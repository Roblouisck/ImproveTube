import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import history from '../history'
import { 
  arrowLeftSVG, 
  videoCameraSVG, 
  magnifyingGlassSVG,
  siteLogo } from './svgs'

const HeaderMobile = () => {
  const [p, setPrefix] = useState("header--mobile")
  
  const toggleHeaderIcons = () => {
    document.querySelector('.header--mobile-logo').classList.toggle('hide')
    document.querySelector('.header--mobile-video-camera-icon').classList.toggle('hide')
    document.querySelector('.header--mobile-avatar').classList.toggle('hide')
    document.querySelector('.header--mobile-searchContainer').classList.toggle('hide')
    document.querySelector('.header--mobile-arrow-left-icon').classList.toggle('hide')
    document.querySelector('.header--mobile').classList.toggle('hide')
    document.querySelector('.header--mobile').classList.toggle('flex-center')
    document.querySelector('.header--mobile-magnifying-glass-icon-background').classList.toggle('hide')
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
    <div className={`${p}`}>
      <div className={`${p}-search-icon-clicked`}>
        <div className={`${p}-arrow-left-icon hide`}>
          <div 
            onMouseDown={() => toggleHeaderIcons()}>
            {arrowLeftSVG()}
          </div>
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
        <Link to='/'>{siteLogo()}</Link>
      </div>

      <div className={`${p}-video-camera-icon`}>
        {videoCameraSVG()}
      </div>

      <div className={`${p}-magnifying-glass-icon-background`} onMouseDown={() => toggleHeaderIcons()}>
        <div className={`${p}-magnifying-glass-icon`}>
        {magnifyingGlassSVG()}
      </div>

      </div>
        <Link to="/channel/robertlouis">
          <img className={`${p}-avatar`} src="https://i.imgur.com/F4odDIJ.jpg" alt="Your Avatar" ></img>
        </Link>
    </div>
  )
}

export default HeaderMobile