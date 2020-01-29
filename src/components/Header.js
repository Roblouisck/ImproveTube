import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SearchPage from './searchPage/SearchPage'
import history from '../history'
import { magnifyingGlassSVG, siteLogo } from './svgs'

const Header = () => {
  const handleSlide = () => {
    const burgerMenu = document.querySelector('.hamburgerNav')
    const burgerFadedBackground = document.querySelector('.fadeBackground')

    if (burgerMenu.classList.contains('slideIn') && burgerMenu.classList.contains('slideOut')) {
      burgerMenu.classList.remove('slideOut')
      burgerFadedBackground.classList.remove('hide')
      burgerFadedBackground.classList.add('show')
    }
    else if (burgerMenu.classList.contains('slideIn')) {
      burgerMenu.classList.add('slideOut')
      burgerFadedBackground.classList.remove('show')
      burgerFadedBackground.classList.add('hide')
    }
    else {
      burgerMenu.classList.toggle('slideIn')
      burgerFadedBackground.classList.toggle('show')
    }
  }

  const userClicksAvatar = () => {
    document.querySelector('.avatarPlaceholder').classList.toggle('show')
    document.querySelector('.userMenu').classList.toggle('show')
  }

  const onFormSubmit = (event) => {
    event.preventDefault()
    const userQuery = event.target.input.value
    const userInputIsBlank = userQuery.trim().length < 1

    if (userInputIsBlank) return null
    else { 
      history.push(`/search/${userQuery}`)
      location.reload()
    }
  }

  return (
    <header className="header">
      <div className="hamburgerIcon" onMouseDown={() => handleSlide()}>
        <div className="hamburgerLine1"></div>
        <div className="hamburgerLine2"></div>
        <div className="hamburgerLine3"></div>
      </div>

      <div className="headerSiteLogo">
        <Link to='/'>{siteLogo()}</Link>
      </div>
      <div className="fadeBackground"></div>
      <nav className="hamburgerNav">
        <ul>
          <hr/>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/channel/robertlouis">Channel</Link></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Liked videos</a></li>
          <li><a href="#">Favorites</a></li>
          <hr/>
          <li><a href="#">Settings</a></li>
          <li><a href="https://github.com/Roblouisck" target="_blank">About Author</a></li>
        </ul>
      </nav>

      <div className="searchBar">
        <form className="searchForm" onSubmit={(event) => onFormSubmit(event)}>
          <input 
            className="searchBox"
            name="input"
            type="search"
            placeholder="Search" />

          <button className="searchButton" type="submit">
            <div className="magnifyBackground">
              <span className="magnifyIcon">
                {magnifyingGlassSVG()}
              </span>
            </div>
          </button>
        </form>
      </div>

      <div className="avatarPlaceholder" onMouseDown={() => userClicksAvatar()}>
        <img 
          className="headerAvatar" 
          src="https://i.imgur.com/F4odDIJ.jpg" 
          alt="Your Avatar" />
      </div>
      <menu className="userMenu">
        <ul>
          <li><a href="/channel/robertlouis">Your Channel</a></li>
          <li><a href="#">Sign Out</a></li>
        </ul>
      </menu>
    </header>
  )
}

export default Header