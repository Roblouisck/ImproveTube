import React from 'react'
import Header from '../Header'
import ActivityFeed from '../ActivityFeed'
import VideoGrid from './VideoGrid'

class RenderHomepage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ActivityFeed />
        <VideoGrid
          titleOne={'FOLLOWING'} 
          titleTwo={'RECOMMENDED'} 
          titleThree={'SUBSCRIPTIONS'} 
          page={'home'} />

      </div>
    )
  }
}

export default RenderHomepage