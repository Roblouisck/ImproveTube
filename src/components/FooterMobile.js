import React, { useState } from 'react'
import { 
  home, 
  activityFeed, 
  following, 
  subscriptions } from './svgs'

const FooterMobile = () => {
  const handleActivityFeedButton = () => {
    document.querySelector('.home--grid-background').classList.toggle('hide')
    document.querySelector('.activityFeedContainer').classList.toggle('show')
    document.querySelector('.channel--mobile-footer-button-activityFeed').classList.toggle('button-background-red')
  }

  const [p, setResource] = useState('channel--mobile')

    return (
      <footer className={`${p}-footer`}>
        <div className={`${p}-footer-button-home`}>
          <a href="/">{home()}
            <p className={`${p}-footer-text`}>Home</p>
          </a>
        </div>

        <div className={`${p}-footer-button-activityFeed`} onClick={() => handleActivityFeedButton()}>
          {activityFeed()}
          <p className={`${p}-footer-text`}>Activity Feed</p>
        </div>

        <div className={`${p}-footer-button-following`}>
          {following()}
          <p className={`${p}-footer-text`}>Following</p>
        </div>

        <div className={`${p}-footer-button-subscriptions`}>
          {subscriptions()}
          <p className={`${p}-footer-text`}>Subscriptions</p>
        </div>

      </footer>
    )
  }

export default FooterMobile