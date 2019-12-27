import React, { useEffect, useState } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import ActivityFeed from '../ActivityFeed'
import AboveFold from './AboveFold'
import VideoGrid from '../VideoGrid'
import FooterMobile from '../FooterMobile'
import { fetchPictureFromID, fetchVideoFromID } from '../../containers/api'
import { capitalizeFirstLetter } from '../../containers/helperFunctions'

const RenderChannelPage = () => {
  const [state, setState] = useState({})

  const extractDataFromUrl = async () => {
    const currentURL = window.location.href
    const urlAsArray = currentURL.split('/')
    const dataFromURL = urlAsArray[4]

    // 000 indicates user came from video page, so fetch their avatar from the video api. 
    if (dataFromURL.includes('000')) {
      let response = await fetchVideoFromID(dataFromURL)
      response = response.data.hits[0]
      setState(prevState => ({userAvatar: response.userImageURL, userName: response.user }))
    } else {
      let response = await fetchPictureFromID(dataFromURL)
      response = response.data.hits[0]
      setState(prevState => ({userAvatar: response.webformatURL, userName: capitalizeFirstLetter(response.user)}))
    }
  }

  useEffect(() => {
    extractDataFromUrl()
  }, [])

  return (
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
  )
}

export default RenderChannelPage