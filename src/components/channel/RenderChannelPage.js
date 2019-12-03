import React from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import ActivityFeed from '../ActivityFeed'
import AboveFold from './AboveFold'
import VideoGrid from '../VideoGrid'
import FooterMobile from '../FooterMobile'

class RenderChannelPage extends React.Component {
  render() {
    return (
      <div className="channel-body">
        <Header />
        <HeaderMobile />
        <AboveFold />
          <div className="channel--wrapper">
            <ActivityFeed 
              page={'channel'} />
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
}

export default RenderChannelPage