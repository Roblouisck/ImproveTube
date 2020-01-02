import React, { useEffect, useState } from 'react'
import VideoPage from './VideoPage'
import axios from 'axios'

import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import FooterMobile from '../FooterMobile'

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