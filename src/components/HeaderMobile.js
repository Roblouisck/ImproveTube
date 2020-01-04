import React, { useEffect, useState } from 'react'
import history from '../history'
import { toggleClass } from '../containers/helperFunctions'
import { 
  arrowLeftSVG, 
  videoCameraSVG, 
  magnifyingGlassSVG } from './svgs'

const HeaderMobile = () => {
  const [p, setPrefix] = useState("header--mobile")

  useEffect(() => {
    const searchButton = document.querySelector('.header--mobile-magnifying-glass-icon-background')
    const logo = document.querySelector('.header--mobile-logo')
    const videoCamera = document.querySelector('.header--mobile-video-camera-icon')
    const avatar = document.querySelector('.header--mobile-avatar')
    const searchbar = document.querySelector('.header--mobile-searchContainer')
    const backArrow = document.querySelector('.header--mobile-arrow-left-icon')
    const headerMobile = document.querySelector('.header--mobile')

    toggleClass('hide', searchButton, logo, videoCamera, avatar, searchButton, backArrow, searchbar)
    toggleClass('hide', backArrow, logo, videoCamera, avatar, backArrow, searchbar, searchButton)
    toggleClass('flex-center', searchButton, headerMobile)
    toggleClass('flex-center', backArrow, headerMobile)
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
    <div className={`${p}`}>
      <div className={`${p}-search-icon-clicked`}>
        <div className={`${p}-arrow-left-icon hide`}>
          {arrowLeftSVG()}
        </div>
        <div className={`${p}-searchContainer hide`}>
          <div className={`${p}-searchBar`}>
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
        </div>
      </div>

      <div className={`${p}-logo`}>
        logo
      </div>

      <div className={`${p}-video-camera-icon`}>
        {videoCameraSVG()}
      </div>

      <div className={`${p}-magnifying-glass-icon-background`}>
        <div className={`${p}-magnifying-glass-icon`}>
        {magnifyingGlassSVG()}
      </div>

      </div>
      <div className={`${p}-avatar`}></div>
    </div>
  )
}

export default HeaderMobile