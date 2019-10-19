import React from 'react'
import Header from './Header'
import ActivityFeed from './ActivityFeed'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <ActivityFeed />
      </div>
    )
  }
}

export default App