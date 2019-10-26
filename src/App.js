import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import RenderHomepage from './home/RenderHomepage'
import RenderChannel from './channel/RenderChannel'

const App = () => {
  return ( 
    <div>
      <BrowserRouter>
        <Route path="/" exact component={RenderHomepage} /> 
        <Route path="/channel" exact component={RenderChannel} /> 
      </BrowserRouter>
    </div>
  )
}


export default App