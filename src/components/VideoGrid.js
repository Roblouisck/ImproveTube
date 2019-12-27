import React, { useState, useEffect } from 'react'
import axios from 'axios'
import history from '../history'

import { 
  toggleClass, 
  abbreviateNumber, 
  capitalizeFirstLetter 
} from '../containers/helperFunctions'

import { fetchAvatars as callAvatarsAPI, fetchVideos as callVideosAPI } from '../containers/api'

const VideoGrid = (props) => {
  const [videosAsHTML, updateVideosAsHTML] = useState([])
  const [p, setPrefix] = useState(props.page)
  
  const fetchData = async (amount, category, order) => {
    let videos = await callVideosAPI(amount, category, order)
    videos = videos.data.hits    

    let pictures = await callAvatarsAPI('man', 50)
    pictures = pictures.data.hits
    console.log(pictures)
    mapDataToHtml(videos, pictures)
  }

  const mapDataToHtml = (videos, pictures) => {
    const vidsAsHtml = videos.map((vid, index) => {
      const currentPic = index

      return (
        <div className={`${p}--grid-content-wrapper`} key={vid.picture_id}>
          <div className={`${p}--grid-video clickable`}>
            <a href={`/video/id/${vid.id}-${pictures[currentPic].id}`}>
              <video
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={`${vid.videos.tiny.url}#t=1`} 
                >
              </video>
            </a>
          </div>
            { /* if home page, send user to channel page when clicking user avatar */}
            { /* else (channel page) don't render this element */}
            {  
              p === 'home' 
                ? <div className={`${p}--grid-avatar-wrapper`}>
                    <a href={`/channel/${pictures[currentPic].id}`}> 
                      <img className={`${p}--grid-avatar`} src={pictures[currentPic].webformatURL}/> 
                    </a> 
                  </div>
                : null
            }

          <a href={`/video/id/${vid.id}-${pictures[currentPic].id}`}>
            <div className={`${p}--grid-title`}>{capitalizeFirstLetter(vid.tags)}</div>
          </a>

          { /* if home page, send user to channel page when clicking user avatar */}
          { /* else (channel page) don't render this element */}
          {
            p === 'home'
            ? <a href={`/channel/${pictures[currentPic].id}`}>
                <div className={`${p}--grid-author`}>{pictures[currentPic].user}</div>
              </a>
            : null
          }

          <div className={`${p}--grid-views`}>{abbreviateNumber(vid.views)} views 
            <span className={`${p}--grid-date`}> • 6 days ago</span>
          </div>
        </div>
      )
  })
  updateVideosAsHTML(vidsAsHtml)
}
  
  useEffect(() => {
    fetchData(50, 'buildings')
  }, []) 
  

  const handleButtons = event => {
    const buttonID = event.target.id
    const unhighlightedText = document.querySelector('.unhighlitedText')
    const followingButton = document.querySelector('.home--grid-nav-following')
    const recommendedButton = document.querySelector('.home--grid-nav-recommended')
    const subscriptionsButton = document.querySelector('.home--grid-nav-subscriptions')
    const yes = 'highlightedText'
    const no = 'unhighlightedText'

    const highlighted = (booleanOne, booleanTwo, booleanThree) => {
      followingButton.classList.remove('unhighlightedText')
      recommendedButton.classList.remove('unhighlightedText')
      subscriptionsButton.classList.remove('unhighlightedText')

      followingButton.classList.add(booleanOne)
      recommendedButton.classList.add(booleanTwo)
      subscriptionsButton.classList.add(booleanThree)
    }

    switch (buttonID) {
      case 'followButton':
        highlighted(yes, no, no)
        fetchData(50, 'buildings')
      break

      case 'recommendedButton':
        highlighted(no, yes, no)
        fetchData(50, 'nature')
      break

      case 'subscriptionsButton':
        highlighted(no, no, yes)
        fetchData(50, 'people')
      break

      default:
        console.log('no cases')
    }
  }

    return (
      <main className={`${p}--grid-background`}>
        <nav className={`${p}--grid-nav`}>
          <button 
            id='followButton' 
            className={`${p}--grid-nav-${props.titleOne}`} 
            onClick={handleButtons}>{props.titleOne}
          </button>

          <button 
            id='recommendedButton' 
            className={`${p}--grid-nav-${props.titleTwo}`} 
            onClick={handleButtons}>{props.titleTwo}
          </button>

          <button 
            id='subscriptionsButton' 
            className={`${p}--grid-nav-${props.titleThree}`} 
            onClick={handleButtons}>{props.titleThree}
          </button>

          <button className={`${p}--grid-nav-${props.titleFour}`}>{props.titleFour}</button>
          <button className={`${p}--grid-nav-${props.titleFive}`}>{props.titleFive}</button>
          <button className={`${p}--grid-nav-follow`}>FOLLOW</button>
        </nav>
        <hr className={`${p}--grid-hr-nav-grey`} />
        <hr className={`${p}--grid-hr-nav-black`} />        

        <div className={`${p}--grid`} style={{marginTop: 'unset'}}>
          {videosAsHTML}
        </div>
      </main>
    )
  }


export default VideoGrid