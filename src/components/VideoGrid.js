import React, { useState, useEffect } from 'react'
import axios from 'axios'
import history from '../history'

import { 
  toggleClass, 
  abbreviateNumber, 
  capitalizeFirstLetter 
} from '../containers/helperFunctions'

const VideoGrid = (props) => {
  const [videos, setResource] = useState([])
  
  const sendUserToVideoPage = (id, event) => {
    event.ctrlKey 
      ? window.open(`/video/id=#${id}`) 
      : window.location.href = `/video/id=#${id}`
  }
  
  const fetchVideos = async (amount, category, order) => {
    const response = await axios.get('https://pixabay.com/api/videos/', {
      params: {
        key: process.env.PIXABAY_API,
        per_page: amount,
        category: category,
        editors_choice: true,
        order: order
      }
    })
    // map the response to html
    const videoData = response.data.hits
    console.log(videoData)
    
    const vidsAsHtml = videoData.map(vid => {
      return (
        <div className={`${props.page}--grid-content-wrapper`} key={vid.picture_id}>
          <div className={`${props.page}--grid-video clickable`}>
            <video
              poster="https://i.imgur.com/Us5ckqm.jpg"
              onMouseOver={event => event.target.play()}
              onMouseOut={event => event.target.pause()}
              src={`${vid.videos.tiny.url}#t=1`} 
              onClick={(event) => sendUserToVideoPage(vid.id, event)}
              >
            </video>
          </div>
          <div className={`${props.page}--grid-avatar-wrapper`}>
            <img className={`${props.page}--grid-avatar`} src="https://i.imgur.com/W40CB6e.jpg"/>
          </div>
          <div className={`${props.page}--grid-title`}>{capitalizeFirstLetter(vid.tags)}</div>
          <div className={`${props.page}--grid-author`}>{vid.user}</div>
          <div className={`${props.page}--grid-views`}>{abbreviateNumber(vid.views)} views 
            <span className={`${props.page}--grid-date`}> • 6 days ago</span>
          </div>
        </div>
      )
  })
  setResource(vidsAsHtml)
}

  useEffect(() => {
    fetchVideos(50, 'buildings')
    const unhighlightedText = document.querySelector('.unhighlitedText')
    const recommendedButton = document.querySelector('.home--grid-nav-recommended')
    toggleClass('highlightedText', recommendedButton, recommendedButton)
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
        fetchVideos(50, 'buildings')
      break

      case 'recommendedButton':
        highlighted(no, yes, no)
        fetchVideos(50, 'nature')
      break

      case 'subscriptionsButton':
        highlighted(no, no, yes)
        fetchVideos(50, 'people')
      break

      default:
        console.log('no cases')
    }
  }

    return (
      <main className={`${props.page}--grid-background`}>
        <nav className={`${props.page}--grid-nav`}>
          <button 
            id='followButton' 
            className={`${props.page}--grid-nav-${props.titleOne}`} 
            onClick={handleButtons}>{props.titleOne}
          </button>

          <button 
            id='recommendedButton' 
            className={`${props.page}--grid-nav-${props.titleTwo}`} 
            onClick={handleButtons}>{props.titleTwo}
          </button>

          <button 
            id='subscriptionsButton' 
            className={`${props.page}--grid-nav-${props.titleThree}`} 
            onClick={handleButtons}>{props.titleThree}
          </button>

          <button className={`${props.page}--grid-nav-${props.titleFour}`}>{props.titleFour}</button>
          <button className={`${props.page}--grid-nav-${props.titleFive}`}>{props.titleFive}</button>
          <button className={`${props.page}--grid-nav-follow`}>FOLLOW</button>
        </nav>
        <hr className={`${props.page}--grid-hr-nav-grey`} />
        <hr className={`${props.page}--grid-hr-nav-black`} />        

        <div className={`${props.page}--grid`} style={{marginTop: 'unset'}}>
          {videos}
        </div>
      </main>
    )
  }


export default VideoGrid