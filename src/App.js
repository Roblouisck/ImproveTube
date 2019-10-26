import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import RenderHomepage from './RenderHomepage'
import RenderChannel from './RenderChannel'

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Header />
//         <ActivityFeed />
//         <Grid_Homepage />
//       </div>
//     )
//   }
// }

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