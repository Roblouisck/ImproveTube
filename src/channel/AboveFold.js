import React from 'react'

class AboveFold extends React.Component {
  state = {
    prefix: "channel--aboveFold"
  }

  componentDidMount = () => {
    function windowSize1000(mediaQuery904) {
      const subscribersSection = document.querySelector('.channel--aboveFold-subscribers-box-wrapper')
      const channelAvatar = document.querySelector('.channel--aboveFold-avatar-content-wrapper')
      const descriptionBox = document.querySelector('.channel--aboveFold-description-box')
    
      if (mediaQuery904.matches) { 
        subscribersSection.parentNode.insertBefore(subscribersSection, channelAvatar.nextSibling)
      } else {
        descriptionBox.parentNode.insertBefore(subscribersSection, descriptionBox.nextSibling)
      }
    }

    const mediaQuery904 = window.matchMedia("(max-width: 904px)")
    mediaQuery904.addListener(windowSize1000)
    windowSize1000(mediaQuery904)
  }

  render({ prefix } = this.state) {
    return (
      <div className={`${prefix}-wrapper`}>
        <div className={`${prefix}-avatar-content-wrapper`}>
          <div className={`${prefix}-avatar-text-wrapper`}>
            <span className={`${prefix}-name-text`}>LoveLyzKelly</span>
            <span className={`${prefix}-follower-text`}>149K Followers</span>
          </div>
          <div className={`${prefix}-avatar`}></div>
        </div>
        <div className={`${prefix}-description-box`}>
          <h2>Description</h2>
          <br/>
          <p>Dear friends,</p>
          <br/>
          <p>
            My name is Lyz and I`m a mentor for others who have dreams to travel, live abroad, and descriptionBoxtain a better lifestyle whilst living abroad. I have lived in Japan for a total of five years and learned quite a lot -not just about the country but myself as well. Not only do I want to inform others about life abroad but my descriptionBox goal is to get you organized, stay mindful, and descriptionBoxtain a healthy and exciting lifestyle whether you plan on living in another country or not. This site is not only for adventure lovers but for inspiration seekers. All of what I have gained and endured will allow me to mold you into an adventurer yourself!
          </p>
          <br/>
          <p>love,</p>
          <br/>
          <p>Lyz Kelly</p>
        </div>
        <div className={`${prefix}-subscribers-box-wrapper`}>
          <span className={`${prefix}-subscribers-box-title`}> Subscribers </span>
          <div className={`${prefix}-subscribers-box`}>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div>
            <div className={`${prefix}-subscriber-avatar`}></div></div>
          <span className={`${prefix}-subscribers-box-bottom-text`}>...and 8,912 more</span>
        </div>
      </div>

    )
  }
}

export default AboveFold