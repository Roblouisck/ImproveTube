import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import history from '../history'
import { videoQuery } from '../words'
import ActivityFeed from './ActivityFeed'
import { handleButtons } from './homePage/handleButtons'
import { determineAvatars } from './homePage/determineAvatars'
import { 
  toggleClass, 
  abbreviateNumber, 
  capitalizeFirstLetter,
  uuid,
  getRandom,
  fabricateTimeStamp
} from '../containers/helperFunctions'
import { fetchAvatars, fetchVideos as callVideosAPI } from '../containers/api'
import { userClicksFollow } from './channelPage/userClicksFollow'

const VideoGrid = (props) => {
  const [videosAsHTML, setVideosAsHTML] = useState([])
  const [p, setPrefix] = useState(props.page)
  const [button, setButton] = useState()
  const [following, setFollowing] = useState()

  useEffect(() => {
    if (p === 'home') { 
      fetchVideos(13, ...Array(2), 'buildings') 
      navButtonHashChange()
    } 
    else fetchVideos(13, ...Array(2), getRandom(videoQuery))
  }, [window.location.hash])

  const navButtonHashChange = () => {
    switch (window.location.hash) {
      case '#rec':
        fetchVideos(13, 'buildings', true, undefined, true)
        setButton('recommended')
      break

      case '#fol':
        fetchVideos(13, 'nature', true, undefined, true)
        setButton('follow')
      break

      case '#sub':
        fetchVideos(13, 'people', true, undefined, true)
        setButton('subscriptions')
      break

      default: null
    }
  }

  // INFINITE SCROLL
  // Callback is triggered when ref is set in mapVideosToHTML
  const observer = useRef()
  const lastVideo = useCallback(lastVideoNode => {

    // Re-hookup observer to last video, to include fetchVideos callback
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      const endVideo = entries[0]
      if (endVideo.isIntersecting) fetchVideos(13, ...Array(2), getRandom(videoQuery))
    })
    if (lastVideoNode) observer.current.observe(lastVideoNode)
  })

  const fetchVideos = async (amount, category, editorsChoice, query, pressedNavButton) => {
    let videos = null
    let pictures = null
    const mobile = window.innerWidth <= 600

    if (mobile) videos = await callVideosAPI(3, category, editorsChoice, query)
    else if (!mobile) videos = await callVideosAPI(amount, category, editorsChoice, query)
    if (mobile) pictures = await determineAvatars(category, query, 3)
    else if (!mobile) pictures = await determineAvatars(category, query, amount)

    videos = videos.data.hits
    pictures = pictures.data.hits

    mapVideosToHTML(videos, pictures, pressedNavButton)
  }

  const mapVideosToHTML = (videos, pictures, pressedNavButton) => {
    const vidsAsHtml = videos.map((vid, index) => {
      const currentPic = index
      return (
        <div className={`${p}--grid-content-wrapper`} key={uuid()} ref={videos.length === index + 1 ? lastVideo : null}>
          <div className={`${p}--grid-video clickable`}>
            <Link onMouseDown={() => window.stop()} to={{ pathname: `/video/id/${vid.id}-${pictures[currentPic].id}` }}>
              <video
                className={`${p}--video`}
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={`${vid.videos.tiny.url}#t=1`}
                muted
                >
              </video>
            </Link>
          </div>
            { /* if home page, send user to channel page when clicking author avatar */}
            { /* else (channel page) don't render author avatar */}
            {  
              p === 'home' 
                ? <div className={`${p}--grid-avatar-wrapper`}>
                    <Link to={`/channel/${pictures[currentPic].id}`}> 
                      <img className={`${p}--grid-avatar`} src={pictures[currentPic].previewURL} alt="Video Author Avatar" /> 
                    </Link> 
                  </div>
                : null
            }

          <Link to={`/video/id/${vid.id}-${pictures[currentPic].id}`}>
            <div className={`${p}--grid-title`}>{capitalizeFirstLetter(vid.tags)}</div>
          </Link>

          { /* if home page, send user to channel page when clicking author avatar */}
          { /* else (channel page) don't render author name */}
          {
            p === 'home'
            ? <Link to={`/channel/${pictures[currentPic].id}`}>
                <div className={`${p}--grid-author`}>{pictures[currentPic].user}</div>
              </Link>
            : null
          }

          <div className={`${p}--grid-views`}>{abbreviateNumber(vid.downloads)} views 
            <span className={`${p}--grid-date`}> • {fabricateTimeStamp(index)}</span>
          </div>
        </div>
      )
  })
  if (pressedNavButton) setVideosAsHTML(vidsAsHtml)
  else setVideosAsHTML(prevState => ([...prevState, ...vidsAsHtml]))
  }

  return (
    <div className={props.page === 'home' ? "homepage-wrapper" : `${p}--grid-background`}>
      { props.page==='home' ? <ActivityFeed page={'home'} button={button} /> : null}
      <main className={ props.page==='channel' ? null : `${p}--grid-background`}>
        <nav className={`${p}--grid-nav`}>
          <button 
            id='recommendedButton' 
            className={`${p}--grid-nav-${props.titleOne}`} 
            onMouseDown={p === 'home' ? handleButtons : null}
            >{props.titleOne}
          </button>

          <button 
            id='followButton' 
            className={`${p}--grid-nav-${props.titleTwo}`} 
            onMouseDown={p === 'home' ? handleButtons : null}
            >{props.titleTwo}
          </button>

          <button 
            id='subscriptionsButton' 
            className={`${p}--grid-nav-${props.titleThree}`} 
            onMouseDown={p === 'home' ? handleButtons : null}
            >{props.titleThree}
          </button>

          <button className={`${p}--grid-nav-${props.titleFour}`}>{props.titleFour}</button>
          <button className={`${p}--grid-nav-${props.titleFive}`}>{props.titleFive}</button>
          <button 
            className={`${p}--grid-nav-follow`}
            onMouseDown={() => setFollowing(userClicksFollow(following))}
            >FOLLOW
          </button>
        </nav>
        <hr className={`${p}--grid-hr-nav-grey`} />
        <hr className={`${p}--grid-hr-nav-black`} />        

        <div className={`${p}--grid`} style={{marginTop: 'unset'}}>
          {videosAsHTML}
        </div>
      </main>
    </div>
  )
}

export default VideoGrid