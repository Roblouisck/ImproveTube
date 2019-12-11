import React, { useEffect } from 'react'
import Header from '../Header'
import VideoPage from './VideoPage'
import HeaderMobile from '../HeaderMobile'
import FooterMobile from '../FooterMobile'
import axios from 'axios'

const RenderVideoPage = () => {
  return (
    <div className="videoPage-body">
      <HeaderMobile />
      <Header />
      <VideoPage />
      <FooterMobile />
    </div>
  )
}

export default RenderVideoPage