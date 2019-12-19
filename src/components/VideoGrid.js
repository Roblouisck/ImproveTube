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
  const [p, setPrefix] = useState(props.page)
  
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
        <div className={`${p}--grid-content-wrapper`} key={vid.picture_id}>
          <div className={`${p}--grid-video clickable`}>
            <a href={`/video/id=#${vid.id}`}>
              <video
                poster="https://i.imgur.com/Us5ckqm.jpg"
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={`${vid.videos.tiny.url}#t=1`} 
                >
              </video>
            </a>
          </div>
          <div className={`${p}--grid-avatar-wrapper`}>
            <img className={`${p}--grid-avatar`} src="https://i.imgur.com/W40CB6e.jpg"/>
          </div>
          <div className={`${p}--grid-title`}>{capitalizeFirstLetter(vid.tags)}</div>
          <div className={`${p}--grid-author`}>{vid.user}</div>
          <div className={`${p}--grid-views`}>{abbreviateNumber(vid.views)} views 
            <span className={`${p}--grid-date`}> • 6 days ago</span>
          </div>
        </div>
      )
  })
  setResource(vidsAsHtml)
}

  const toggles = () => {
    const recommendedButton = document.querySelector('.home--grid-nav-recommended')
    const page = p
    
    if (page === 'home') {
      toggleClass('highlightedText', recommendedButton, recommendedButton)
    }
    if (page === 'channel') {
      console.log('channel')
    }
  }

  useEffect(() => {
    fetchVideos(50, 'buildings')
    toggles()
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
          {videos}
        </div>
      </main>
    )
  }


export default VideoGrid