import React from 'react'
import Header from '../Header'
import ActivityFeed from '../ActivityFeed'
import AboveFold from './AboveFold'
import VideoGrid from '../VideoGrid'

class RenderChannel extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AboveFold />
          <div className="flex-wrapper">
            <ActivityFeed />
            <VideoGrid 
              titleOne={'VIDEOS'} 
              titleTwo={'PLAYLISTS'} 
              titleThree={'SUBSCRIPTIONS'} 
              buttonTextFollow={'FOLLOW'}
              page={'channel'} />
          </div>
      </div>
    )
  }
}

export default RenderChannel