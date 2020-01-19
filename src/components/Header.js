import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toggleClass } from '../containers/helperFunctions'
import SearchPage from './searchPage/SearchPage'
import history from '../history'
import { magnifyingGlassSVG, siteLogo } from './svgs'

const Header = () => {

  const burgerReverse = (class1, class2) => {
    class1.addEventListener('click', () => {
      if (class2.classList.contains('slideIn')) {
        class2.classList.remove('slideOut')
      } else {
        class2.classList.add('slideOut')
      }
    })
  }

  const noAnimationDuringWindowResize = (burgerMenu) => {
    window.addEventListener("resize", () => {
      burgerMenu.classList.remove('slideOut')
    })
  }

  useEffect(() => {
    const burgerIcon = document.querySelector('.hamburgerIcon')
    const burgerMenu = document.querySelector('.hamburgerNav')
    const burgerFadedBackground = document.querySelector('.fadeBackground')
    const signInAvatar = document.querySelector('.header > .avatarPlaceholder')
    const userMenu = document.querySelector('.userMenu')

    // An eventlistener gets set in toggleClass when component mounts
    toggleClass('show', burgerIcon, burgerMenu, burgerFadedBackground)
    toggleClass('show', burgerFadedBackground, burgerFadedBackground)
    toggleClass('show', signInAvatar, userMenu)
    toggleClass('slideIn', burgerIcon, burgerMenu)

    // slideIn is already set when faded background is visible to user
    // therefore we need to toggle both classes, to remove slideIn and set slideOut
    toggleClass('slideOut', burgerFadedBackground, burgerMenu)
    toggleClass('slideIn', burgerFadedBackground, burgerMenu)
    burgerReverse(burgerIcon, burgerMenu)
    noAnimationDuringWindowResize(burgerMenu)
  }, [])

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
      <div className="hamburgerIcon">
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
          <li><a href="/channel/robertlouis">Channel</a></li>
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

      <div className="avatarPlaceholder">
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