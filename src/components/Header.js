import React, { useEffect } from 'react'
import { toggleClass } from '../containers/helperFunctions'
import SearchPage from './searchPage/SearchPage'
import history from '../history'

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
      <div className="headerSiteLogo">LOGO</div>
      <div className="fadeBackground"></div>
      <nav className="hamburgerNav">
        <ul>
          <hr/>
          <li><a href="/">Home</a></li>
          <li><a href="/channel">Channel</a></li>
          <li><a href="#">History</a></li>
          <li><a href="#">Liked videos</a></li>
          <li><a href="#">Favorites</a></li>
          <hr/>
          <li><a href="#">Settings</a></li>
          <li><a href="#">About Author</a></li>
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
                <svg className="p" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
                </svg>
              </span>
            </div>
          </button>
        </form>
      </div>

      <div className="avatarPlaceholder">
      </div>
      <menu className="userMenu">
        <ul>
          <li><a href="#">Your channel</a></li>
          <li><a href="#">Sign in</a></li>
        </ul>
      </menu>
    </header>
  )
}

export default Header