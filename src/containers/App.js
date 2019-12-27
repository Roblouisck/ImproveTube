import React from 'react'
import { Router, Route } from 'react-router-dom'
import RenderHomepage from '../components/homePage/RenderHomepage'
import RenderChannelPage from '../components/channelPage/RenderChannelPage'
import RenderVideoPage from '../components/videoPage/RenderVideoPage'
import ErrorPage from '../components/videoPage/ErrorPage'
import history from '../history'

const App = () => {
  return ( 
    <div>
      <Router history={history}>
        <Route path="/" exact component={RenderHomepage} /> 
        <Route path="/channel" component={RenderChannelPage} /> 
        <Route path="/video/id" component={RenderVideoPage} /> 
        <Route path="/video/404" exact component={ErrorPage} />
      </Router>
    </div>
  )
}


export default App