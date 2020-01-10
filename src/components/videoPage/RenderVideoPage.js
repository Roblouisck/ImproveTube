import React, { useEffect, useState } from 'react'
import VideoPage from './VideoPage'
import axios from 'axios'

import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import FooterMobile from '../FooterMobile'
import ActivityFeed from '../ActivityFeed'

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