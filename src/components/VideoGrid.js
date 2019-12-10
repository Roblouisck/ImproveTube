import React, { useState, useEffect } from 'react'
import axios from 'axios'
import toggleClass from '../containers/toggleClass'

const VideoGrid = (props) => {
  const vidRef = React.createRef()
  const [videos, setResource] = useState([])

  const abbreviateNumbersOver999 = (num) => {
    if (num > 999) {
      return Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k'
    } 
      return num
  }

  const fetchData = async (amount, category) => {
    const [picsResponse, vidsResponse] = await Promise.all([
      axios.get('https://api.pexels.com/v1/search?', {
        headers: { Authorization: process.env.PEXELS_API },
        params: {
          query: 'face',
          per_page: 80
        }
      }),
      axios.get('https://api.pexels.com/videos/search?', {
        headers: { Authorization: process.env.PEXELS_API },
        params: {
          query: 'smiling',
          per_page: 80,
          max_width: "1920"
        }
      })
    ]) 
    console.log(picsResponse)
    console.log(vidsResponse.data.videos)
    const data = vidsResponse.data.videos
    // const picturesAndVideos = [...picsResponse.data.photos, ...vidsResponse.data.videos]
    const filtered = data.filter(vid => {
      if (vid.width === 1920) {
        return vid
      }
      if (vid.width === 1280) {
        return vid
      }
      return null
    })
    console.log(filtered)

    const dataAsHtml = filtered.map(object => {
      return (
        <div className={`${props.page}--grid-content-wrapper`} key={object.id}>
          <div className={`${props.page}--grid-video`}>
            <video
              ref={vidRef}
              poster="https://i.imgur.com/Us5ckqm.jpg"
              onMouseOver={event => event.target.play()}
              onMouseOut={event => event.target.pause()}
              src={`${object.video_files[0].link}#t=1`} >
            </video>
          </div>
          <div className={`${props.page}--grid-avatar-wrapper`}>
            <img className={`${props.page}--grid-avatar`} src="https://i.imgur.com/W40CB6e.jpg"/>
          </div>
          <div className={`${props.page}--grid-title`}>Placeholder</div>
          <div className={`${props.page}--grid-author`}>{object.user.name}</div>
          <div className={`${props.page}--grid-views`}>60k 
            <span className={`${props.page}--grid-date`}> • 6 days ago</span>
          </div>
        </div>
      )
    })
  setResource(dataAsHtml)
}

  useEffect(() => {
    fetchData()
    // fetchAvatars()
    // fetchVideos(50, 'food')
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
        // fetchVideos(50, 'food')
      break

      case 'recommendedButton':
        console.log('b')
        highlighted(no, yes, no)
        // fetchVideos(50, 'people')
      break

      case 'subscriptionsButton':
        highlighted(no, no, yes)
        // fetchVideos(50, 'animals')
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