import React from 'react'
import HeaderMobile from '../HeaderMobile'
import Header from '../Header'
import ActivityFeed from '../ActivityFeed'
import VideoPage from './VideoPage'
import FooterMobile from '../FooterMobile'

const RenderVideoPage = () => {
  return (
    <div className="videoPage-body">
      <HeaderMobile />
      <Header />
      <ActivityFeed page={'home'} />
      <VideoPage />
      <FooterMobile page={'video'} />
    </div>
  )
}

export default RenderVideoPage