import React, { useEffect, useState } from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import ActivityFeed from '../ActivityFeed'
import AboveFold from './AboveFold'
import VideoGrid from '../VideoGrid'
import FooterMobile from '../FooterMobile'
import { fetchPictureFromID, fetchVideoFromID } from '../../containers/api'
import { capitalizeFirstLetter } from '../../containers/helperFunctions'
import PageNotFound from '../PageNotFound'

const RenderChannelPage = (props) => {
  const [state, setState] = useState({})
  
  useEffect(() => {
    extractDataFromUrl()
  }, [])

  const extractDataFromUrl = async () => {
    const currentURL = window.location.href
    const urlAsArray = currentURL.split('/')
    const dataFromURL = urlAsArray[4]

    if (dataFromURL.includes('robertlouis')) {
      setState({
        userAvatar: {
          webformatURL: 'https://i.imgur.com/PAkBGtO.jpg', 
          previewURL: 'https://i.imgur.com/spvqsOj.jpg'}, 
          userName: 'Robert Louis', ready: true
      })
      return null
    }

    // 000 indicates user came from video page, so fetch their avatar from the video api. 
    if (dataFromURL.includes('000')) {
      const response = await fetchVideoFromID(dataFromURL)
      if (!response) setState({error: true})
      else setState({
        userAvatar: response.data.hits[0], 
        pixabaySource: response.data.hits[0].pageURL,
        userName: response.data.hits[0].user, 
        ready: true, 
        authorFollowers: response.data.hits[0].views
      })
    }

    else if (dataFromURL.includes('-')) {
      const newData = dataFromURL.split('-')
      const pictureID = newData[0]
      const videoID = newData[1]

      let picResponse = await fetchPictureFromID(pictureID)
      let vidResponse = await fetchVideoFromID(videoID)
      if (!vidResponse || !picResponse) setState({error: true})

      setState({
        userAvatar: picResponse.data.hits[0], 
        pixabaySource: picResponse.data.hits[0].pageURL,
        userName: capitalizeFirstLetter(picResponse.data.hits[0].user), 
        ready: true,
        authorFollowers: vidResponse.data.hits[0].views
      })
    }

    else {
      const response = await fetchPictureFromID(dataFromURL)
      if (!response) setState({error: true})
      else setState({
        userAvatar: response.data.hits[0],
        pixabaySource: response.data.hits[0].pageURL,
        userName: capitalizeFirstLetter(response.data.hits[0].user), 
        ready: true
      })
    }
  }

  return (
    <div>
      {state.error ? <PageNotFound /> : null} 
      {state.ready ? 
        <div className="channel-body">
          <Header />
          <HeaderMobile />
          <AboveFold 
            userAvatar={state.userAvatar}
            pixabaySource={state.pixabaySource}
            userName={state.userName}
            authorFollowers={state.authorFollowers}
           />
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
              page={'channel'} 
              userAvatar={state.userAvatar} />
            <FooterMobile 
              page={'channel'}
            />
          </div>
        </div>
      : null
      }
    </div>
  )
}

export default RenderChannelPage