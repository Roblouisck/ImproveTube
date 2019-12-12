import React, { useState } from 'react'
import { 
  home, 
  activityFeed, 
  following, 
  subscriptions } from './svgs'

const FooterMobile = () => {
  const [p, setResource] = useState('channel--mobile')

    return (
      <footer className={`${p}-footer`}>
        <div>
          {home()}
          <p className={`${p}-footer-text`}>Home</p>
        </div>

        <div>
          {activityFeed()}
          <p className={`${p}-footer-text`}>Activity Feed</p>
        </div>

        <div>
          {following()}
          <p className={`${p}-footer-text`}>Following</p>
        </div>

        <div>
          {subscriptions()}
          <p className={`${p}-footer-text`}>Subscriptions</p>
        </div>

      </footer>
    )
  }

export default FooterMobile