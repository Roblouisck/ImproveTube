import React from 'react'

class AboveFold extends React.Component {
  state = {
    p: "channel--aboveFold"
  }

  componentDidMount = () => {
    function windowSize940(mediaQuery940) {
      const followButton = document.querySelector('.channel--grid-nav-follow')
      const channelAvatar = document.querySelector('.channel--aboveFold-avatar')
      const gridNavSubscriptionText = document.querySelector('.channel--grid-nav-subscriptions')
    
      if (mediaQuery940.matches) { 
        channelAvatar.parentNode.insertBefore(followButton, channelAvatar.nextSibling)
      } else {
        gridNavSubscriptionText.parentNode.insertBefore(followButton, gridNavSubscriptionText.nextSibling)
      }
    }

    function windowSize580(mediaQuery580, mediaQueryBetween) {
      const followButton = document.querySelector('.channel--grid-nav-follow')
      const avatarFollowerText = document.querySelector('.channel--aboveFold-follower-text')
      const channelAvatar = document.querySelector('.channel--aboveFold-avatar')
      const gridNavSubscriptionText = document.querySelector('.channel--grid-nav-subscriptions')
    
      if (mediaQuery580.matches) { 
        avatarFollowerText.parentNode.insertBefore(followButton, avatarFollowerText.nextSibling)
      } else if (mediaQueryBetween) {
        gridNavSubscriptionText.parentNode.insertBefore(followButton, gridNavSubscriptionText.nextSibling)
      } else if (window.matchMedia("(max-width: 940px)").matches && (window.matchMedia("(min-width: 580px)").matches)) {
        channelAvatar.parentNode.insertBefore(followButton, channelAvatar.nextSibling)
      }
    }

    const mediaQuery940 = window.matchMedia("(max-width: 940px)")
    const mediaQueryBetween = window.matchMedia("(max-width: 99999px) and (min-width: 940px)")
    const mediaQuery580 = window.matchMedia("(max-width: 580px)")
    mediaQuery940.addListener(windowSize940)
    mediaQuery580.addListener(windowSize580, mediaQueryBetween)
    windowSize940(mediaQuery940)
    windowSize580(mediaQuery580)
  }

  render({ p } = this.state) {
    return (
      <div className={`${p}-wrapper`}>
        <div className={`${p}-avatar-content-wrapper`}>
          <div className={`${p}-avatar-text-wrapper`}>
            <span className={`${p}-name-text`}>LoveLyzKelly</span>
            <span className={`${p}-follower-text`}>149K Followers</span>
          </div>
          <div className={`${p}-avatar`}></div>
        </div>
        <div className={`${p}-description-box`}>
          <h2>Description</h2>
          <br/>
          <p>Dear friends,</p>
          <br/>
          <p>
            My name is Lyz and I`m a mentor for others who have dreams to travel, live abroad, and gridNavSubscriptionTexttain a better lifestyle whilst living abroad. I have lived in Japan for a total of five years and learned quite a lot -not just about the country but myself as well. Not only do I want to inform others about life abroad but my gridNavSubscriptionText goal is to get you organized, stay mindful, and gridNavSubscriptionTexttain a healthy and exciting lifestyle whether you plan on living in another country or not. This site is not only for adventure lovers but for inspiration seekers. All of what I have gained and endured will allow me to mold you into an adventurer yourself!
          </p>
          <br/>
          <p>love,</p>
          <br/>
          <p>Lyz Kelly</p>
        </div>
        <div className={`${p}-subscribers-box-wrapper`}>
          <span className={`${p}-subscribers-box-title`}> Subscribers </span>
          <div className={`${p}-subscribers-box`}>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div>
            <div className={`${p}-subscriber-avatar`}></div></div>
          <span className={`${p}-subscribers-box-bottom-text`}>...and 8,912 more</span>
        </div>
      </div>

    )
  }
}

export default AboveFold