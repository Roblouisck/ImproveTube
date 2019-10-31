import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import RenderHomepage from './home/RenderHomepage'
import RenderChannelPage from './channel/RenderChannelPage'
import RenderVideoPage from './video/RenderVideoPage'

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