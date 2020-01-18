import React, { lazy, Suspense } from 'react'
import { Router, Route, Switch} from 'react-router-dom'
const RenderHomepage = lazy(() => import('../components/homePage/RenderHomepage'))
const RenderChannelPage = lazy(() => import('../components/channelPage/RenderChannelPage'))
const RenderVideoPage = lazy(() => import('../components/videoPage/RenderVideoPage'))
const RenderSearchPage = lazy(() => import('../components/searchPage/RenderSearchPage'))
const PageNotFound = lazy(() => import('../components/PageNotFound'))
import history from '../history'

const App = () => {
  return ( 
    <div>
      <Router history={history}>
        <Suspense fallback={<div></div>}>
            <Switch>
              <Route path="/" exact component={RenderHomepage} /> 
              <Route path="/channel/:channelId" component={RenderChannelPage} /> 
              <Route path="/video/id/:videoId" component={RenderVideoPage} /> 
              <Route path="/search" component={RenderSearchPage} /> 
              <Route path="/404" exact component={PageNotFound} />
              <Route component={PageNotFound} />
            </Switch>
        </Suspense>
      </Router>
    </div>
  )
}


export default App