import React from 'react'
import Header from '../Header'
import VideoPage from './VideoPage'
import HeaderMobile from '../HeaderMobile'
import FooterMobile from '../FooterMobile'

class RenderVideoPage extends React.Component {
  render() {
    return (
      <div className="videoPage-body">
        <HeaderMobile />
        <Header />
        <VideoPage />
        <FooterMobile />
      </div>
    )
  }
}

export default RenderVideoPage