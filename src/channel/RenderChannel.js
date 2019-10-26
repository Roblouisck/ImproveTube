import React from 'react'
import Header from '../Header'
import ActivityFeed from '../ActivityFeed'
import VideoGrid from '../home/VideoGrid'

class RenderChannel extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ActivityFeed />
        <VideoGrid 
          titleOne={'VIDEOS'} 
          titleTwo={'PLAYLISTS'} 
          titleThree={'SUBSCRIPTIONS'} 
          buttonTextFollow={'FOLLOW'}
          page={'channel'} />
      </div>
    )
  }
}

export default RenderChannel