import React from 'react'
import Header from '../Header'
import ActivityFeed from '../ActivityFeed'
import VideoGrid from '../VideoGrid'
import HeaderMobile from '../HeaderMobile'
import FooterMobile from '../FooterMobile'

class RenderHomepage extends React.Component {
  render() {
    return (
      <div className="homepage-background">
        <Header />
        <HeaderMobile />
        <VideoGrid
          titleOne={'recommended'} 
          titleTwo={'following'} 
          titleThree={'subscriptions'} 
          page={'home'} />
        <FooterMobile page={'home'} />
      </div>
    )
  }
}

export default RenderHomepage