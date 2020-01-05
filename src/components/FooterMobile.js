import React, { useState } from 'react'
import history from '../history'
import { 
  home, 
  activityFeed, 
  following, 
  subscriptions } from './svgs'

const FooterMobile = () => {
  const handleActivityFeedButton = () => {
    if (history.location.pathname === '/') {
      document.querySelector('.home--grid-background').classList.toggle('hide')
      document.querySelector('.activityFeedContainer').classList.toggle('show')
      document.querySelector('.channel--mobile-footer-button-activityFeed').classList.toggle('button-background-red')
    }

    if (history.location.pathname.includes('/channel/')) {
      document.querySelector('.channel--grid-background').classList.toggle('hide')
      document.querySelector('.activityFeedContainer').classList.toggle('show')
      document.querySelector('.channel--mobile-footer-button-activityFeed').classList.toggle('button-background-red')
    }
  }

  const [p, setResource] = useState('channel--mobile')

    return (
      <footer className={`${p}-footer`}>
        <div className={`${p}-footer-button-home`}>
          <a href="/">{home()}
            <p className={`${p}-footer-text no-select`}>Home</p>
          </a>
        </div>

        <div className={`${p}-footer-button-activityFeed`} onClick={() => handleActivityFeedButton()}>
          {activityFeed()}
          <p className={`${p}-footer-text no-select`}>Activity Feed</p>
        </div>

        <div className={`${p}-footer-button-following`}>
          {following()}
          <p className={`${p}-footer-text no-select`}>Following</p>
        </div>

        <div className={`${p}-footer-button-subscriptions`}>
          {subscriptions()}
          <p className={`${p}-footer-text no-select`}>Subscriptions</p>
        </div>

      </footer>
    )
  }

export default FooterMobile