import React from 'react'
import Header from './Header'
import ActivityFeed from './ActivityFeed'
import Grid_Homepage from './Grid_Homepage'

class RenderHomepage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ActivityFeed />
        <Grid_Homepage />
      </div>
    )
  }
}

export default RenderHomepage