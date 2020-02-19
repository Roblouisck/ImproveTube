import React, { 
  useState, 
  useEffect, 
  useRef, 
  useCallback } from 'react'
  
import { 
  abbreviateNumber, 
  capitalizeFirstLetter,
  uuid,
  getRandom,
  fabricateTimeStamp
} from '../containers/helperFunctions'

import ActivityFeed from './ActivityFeed'
import { Link } from 'react-router-dom'
import { videoQuery, avatarQuery } from '../words'
import { handleButtons } from './homePage/handleButtons'
import { determineAvatars } from './homePage/determineAvatars'
import { fetchVideos as callVideosAPI } from '../containers/api'
import { userClicksFollow } from './channelPage/userClicksFollow'

const VideoGrid = (props) => {
  const [videosAsHTML, setVideosAsHTML] = useState([])
  const [p, setPrefix] = useState(props.page)
  const [button, setButton] = useState()
  const [following, setFollowing] = useState()
  // const mobile = window.innerWidth <= 600
  const mobile = typeof window.orientation !== 'undefined'
  let preventInfiniteScroll = false
  let alertTrigger = true

  useEffect(() => {
    if (p === 'home') { 
      fetchVideos(mobile ? 4 : 13, ...Array(2), 'buildings') 
      navButtonHashChange()
    } 
    else fetchVideos(mobile ? 3 : 13, ...Array(2), getRandom(videoQuery))
  }, [window.location.hash])

  const navButtonHashChange = () => {
    switch (window.location.hash) {
      case '#rec':
        fetchVideos(mobile ? 4 : 13, 'buildings', true, undefined, true)
        setButton('recommended')
      break

      case '#fol':
        fetchVideos(mobile ? 4 : 13, 'nature', true, undefined, true)
        setButton('follow')
      break

      case '#sub':
        fetchVideos(mobile ? 4 : 13, 'people', true, undefined, true)
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
      if (endVideo.isIntersecting && mobile) {
        if (preventInfiniteScroll) {
          if (!alertTrigger) return
          setTimeout(() => {alert('Checkout the PC version for infinite scrolling videos, or checkout the activity feed!')}, 1000)
          alertTrigger = false
          return
        }
        fetchVideos(6, ...Array(2), getRandom(videoQuery))
        preventInfiniteScroll = true
      }
      else if (endVideo.isIntersecting && !mobile) fetchVideos(13, ...Array(2), getRandom(videoQuery))
    })
    if (lastVideoNode) observer.current.observe(lastVideoNode)
  })

  const fetchVideos = async (amount, category, editorsChoice, query, pressedNavButton) => {
    let videos
    let pictures

    if (mobile) videos = await callVideosAPI(amount, category, editorsChoice, query)
    else if (!mobile) videos = await callVideosAPI(amount, category, editorsChoice, query)
    if (mobile) pictures = await determineAvatars(amount, category, query)
    else if (!mobile && p === 'home') pictures = await determineAvatars(amount, category, getRandom(avatarQuery))
    
    videos = videos.data.hits
    if (p === 'home') pictures = pictures.data.hits

    mapVideosToHTML(videos, pictures, pressedNavButton)
  }

  const mapVideosToHTML = (videos, pictures, pressedNavButton) => {
    const vidsAsHtml = videos.map((vid, index) => {
      const currentPic = index
      return (
        <div className={`${p}--grid-content-wrapper`} key={uuid()} ref={videos.length === index + 1 ? lastVideo : null}>
          <div className={`${p}--grid-video clickable`}>
            <Link
              onMouseDown={() => window.stop()} 
              to={ p==='home' ? `/video/id/${vid.id}-${pictures[currentPic].id}` : `/video/id/${vid.id}`}>
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
                    <a href={p==='home' ? `/channel/${pictures[currentPic].id}` : null}> 
                      <img className={`${p}--grid-avatar`} src={p === 'home' ? pictures[currentPic].previewURL : null} alt="Video Author Avatar" /> 
                    </a> 
                  </div>
                : null
            }
          <Link to={p === 'home' ? `/video/id/${vid.id}-${pictures[currentPic].id}` : `/video/id/${vid.id}`}>
            <div className={`${p}--grid-title`}>{capitalizeFirstLetter(vid.tags)}</div>
          </Link>

          { /* if home page, send user to channel page when clicking author avatar */}
          { /* else (channel page) don't render author name */}
          {
            p === 'home'
            ? <a href={p === 'home' ? `/channel/${pictures[currentPic].id}` : null}>
                <div className={`${p}--grid-author`}>{p === 'home' ? pictures[currentPic].user : null}</div>
              </a>
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