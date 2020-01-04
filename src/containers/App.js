import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import RenderHomepage from '../components/homePage/RenderHomepage'
import RenderChannelPage from '../components/channelPage/RenderChannelPage'
import RenderVideoPage from '../components/videoPage/RenderVideoPage'
import RenderSearchPage from '../components/searchPage/RenderSearchPage'
import PageNotFound from '../components/PageNotFound'
import history from '../history'

const App = () => {
  return ( 
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={RenderHomepage} /> 
          <Route path="/channel" component={RenderChannelPage} /> 
          <Route path="/video/id" component={RenderVideoPage} /> 
          <Route path="/search" component={RenderSearchPage} /> 
          <Route path="/404" exact component={PageNotFound} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  )
}


export default App