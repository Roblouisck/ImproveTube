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
                    {magnifyingGlassSVG()}
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