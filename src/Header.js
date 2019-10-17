import React from 'react'

class Header extends React.Component {

  render() {
    return (
      <div>
        <input 
          className="searchBox"
          type="search"
          placeholder="Search"
        />
      </div>
    )
  }
}

export default Header