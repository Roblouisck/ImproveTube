import React, { useState } from 'react'
import history from '../history'
import { 
  home, 
  activityFeed, 
  following, 
  subscriptions } from './svgs'

const FooterMobile = (props) => {
  const [p, setResource] = useState('channel--mobile')

  const handleActivityFeedButton = () => {
    scroll(0, 0)
    
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

    if (history.location.pathname.includes('/video/')) {
      document.querySelector('aside').classList.toggle('hide')
      document.querySelector('main').classList.toggle('hide')
      document.querySelector('.activityFeedContainer').classList.toggle('show')
      document.querySelector('.home--activity-feed-title').classList.toggle('margin-top')
      document.querySelector('.channel--mobile-footer-button-activityFeed').classList.toggle('button-background-red')
    }

    if (history.location.pathname.includes('/search/')) {
      document.querySelector('main').classList.toggle('hide')
      document.querySelector('.activityFeedContainer').classList.toggle('show')
      // document.querySelector('.home--activity-feed-title').classList.toggle('margin-top')
      document.querySelector('.channel--mobile-footer-button-activityFeed').classList.toggle('button-background-red')
    }
  }

  const figureOutOperation = (type) => {
    if (props.page === 'home') {
      if (type === 'recommended') window.location.hash = 'rec'
      else if (type === 'subscriptions') window.location.hash = 'sub'
      else if (type === 'following') window.location.hash = 'fol'
    }
    else if (type === 'recommended') history.push('/#rec')
    else if (type === 'subscriptions') history.push('/#sub')
    else if (type === 'following') history.push('/#fol')
  
    scroll(0, 0)
    if (document.querySelector('.activityFeedContainer').classList.contains('show')) {
      document.querySelector('.channel--mobile-footer-button-activityFeed').classList.remove('button-background-red')
      document.querySelector('.activityFeedContainer').classList.add('hide')
      document.querySelector('.activityFeedContainer').classList.remove('show')
      document.querySelector('.home--grid-background').classList.remove('hide')
      document.querySelector('.channel--grid-background').classList.remove('hide')
    }
  }

  return (
    <footer className={`${p}-footer`}>
      <div className={`${p}-footer-button-home`}>
        <div onMouseDown={() => figureOutOperation('recommended')}>
        {home()}
          <p className={`${p}-footer-text no-select`}>Home</p>
        </div>
      </div>

      <div className={`${p}-footer-button-activityFeed`} onMouseDown={() => handleActivityFeedButton()}>
        {activityFeed()}
        <p className={`${p}-footer-text no-select`}> Activity Feed</p>
      </div>

      <div className={`${p}-footer-button-following`} onMouseDown={() => figureOutOperation('following')}>
        {following()}
        <p className={`${p}-footer-text no-select`}>Following</p>
      </div>

      <div className={`${p}-footer-button-subscriptions`} onMouseDown={() => figureOutOperation('subscriptions')}>
        {subscriptions()}
        <p className={`${p}-footer-text no-select`} >Subscriptions</p>
      </div>

    </footer>
  )
}

export default FooterMobile