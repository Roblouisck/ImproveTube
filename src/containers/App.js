import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import RenderHomepage from '../components/home/RenderHomepage'
import RenderChannelPage from '../components/channel/RenderChannelPage'
import RenderVideoPage from '../components/video/RenderVideoPage'

const App = () => {
  return ( 
    <div>
      <BrowserRouter>
        <Route path="/" exact component={RenderHomepage} /> 
        <Route path="/channel" exact component={RenderChannelPage} /> 
        <Route path="/video" exact component={RenderVideoPage} /> 
      </BrowserRouter>
    </div>
  )
}


export default App