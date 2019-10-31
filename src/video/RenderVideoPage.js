import React from 'react'
import Header from '../Header'
import VideoPage from './VideoPage'

class RenderVideoPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <VideoPage />
      </div>
    )
  }
}

export default RenderVideoPage