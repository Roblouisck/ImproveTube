import React, { useEffect, useState } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import ActivityFeed from '../ActivityFeed'
import AboveFold from './AboveFold'
import VideoGrid from '../VideoGrid'
import FooterMobile from '../FooterMobile'
import { fetchPictureFromID, fetchVideoFromID } from '../../containers/api'
import { capitalizeFirstLetter } from '../../containers/helperFunctions'
import ErrorPage from '../videoPage/ErrorPage'

const RenderChannelPage = () => {
  const [state, setState] = useState({})

  useEffect(() => {
    extractDataFromUrl()
  }, [])

  useEffect(() => {
    console.log(state)
  })

  const extractDataFromUrl = async () => {
    const currentURL = window.location.href
    const urlAsArray = currentURL.split('/')
    const dataFromURL = urlAsArray[4]

    // 000 indicates user came from video page, so fetch their avatar from the video api. 
    if (dataFromURL.includes('000')) {
      const response = await fetchVideoFromID(dataFromURL)
      if (!response) setState({error: true})
      else setState({userAvatar: response.data.hits[0].userImageURL, userName: response.data.hits[0].user, ready: true})

    } else {
      const response = await fetchPictureFromID(dataFromURL)
      if (!response) setState({error: true})
      else setState({userAvatar: response.data.hits[0].webformatURL, userName: capitalizeFirstLetter(response.data.hits[0].user), ready: true})
    }
  }

  return (
    <div>
      {state.error ? <ErrorPage/> : null} 
      {state.ready ? 
        <div className="channel-body">
          <Header />
          <HeaderMobile />
          <AboveFold 
          userAvatar={state.userAvatar}
          userName={state.userName} />
          <div className="channel--wrapper">
            <ActivityFeed 
              page={'channel'} 
              userAvatar={state.userAvatar}
              userName={state.userName} />
            <VideoGrid 
              titleOne={'videos'} 
              titleTwo={'feed'} 
              titleThree={'playlists'} 
              titleFour={'about'} 
              titleFive={'subscriptions'} 
              page={'channel'} />
            <FooterMobile />
          </div>
        </div>
      : null
      }
    </div>
  )
}

export default RenderChannelPage