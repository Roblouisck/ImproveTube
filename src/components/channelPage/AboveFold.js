import React, { useEffect, useState } from 'react'
import { fetchAvatars, getRandomName } from '../../containers/api'
import { 
  getRandom, 
  abbreviateNumber,
  randomNumberBetweenTwo } from '../../containers/helperFunctions'
import { 
  year,
  greeting,
  firstSentence,
  secondSentence
} from './bioTextSnippets.js'

const AboveFold = ({ userName, userAvatar, authorFollowers, pixabaySource }) => {
  const [p, setPrefix] = useState('channel--aboveFold')
  const [subcriberAvatars, setSubscriberAvatars] = useState([])
  const [bio, setBio] = useState([])
  const [subscriberAmount, setSubscriberAmount] = useState([])
  const mobile = typeof window.orientation !== 'undefined'
  
  useEffect(() => {
    if (!mobile) {
      fetchSubscriberAvatars()
      handleBio()
      setSubscriberAmount(randomNumberBetweenTwo(5000, 30000))
    }
    
    const windowSize940 = (mediaQuery940) => {
      const followButton = document.querySelector('.channel--grid-nav-follow')
      const channelAvatar = document.querySelector('.channel--aboveFold-user-avatar-wrapper')
      const gridNavSubscriptionText = document.querySelector('.channel--grid-nav-subscriptions')
    
      if (mediaQuery940.matches) { 
        channelAvatar.parentNode.insertBefore(followButton, channelAvatar.nextSibling)
      } else {
        gridNavSubscriptionText.parentNode.insertBefore(followButton, gridNavSubscriptionText.nextSibling)
      }
    }

    const windowSize580 = (mediaQuery580, mediaQueryBetween) => {
      const followButton = document.querySelector('.channel--grid-nav-follow')
      const avatarFollowerText = document.querySelector('.channel--aboveFold-follower-text')
      const channelAvatar = document.querySelector('.channel--aboveFold-user-avatar-wrapper')
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

    // Clean up
    return () => {
      mediaQuery940.removeListener(windowSize940)
      mediaQuery580.removeListener(windowSize580, mediaQueryBetween)
    }
  }, [])

  const fetchSubscriberAvatars = async () => {
    let subscriberAvatars = await fetchAvatars('woman', 84)
    subscriberAvatars = subscriberAvatars.data.hits
    mapSubscriberAvatarsToHtml(subscriberAvatars)
  }

  const mapSubscriberAvatarsToHtml = (subscriberAvatars) => {
    const subAvatars = subscriberAvatars.map(avatar => {
      return (
        <a href={`/channel/${avatar.id}`} key={avatar.id}> 
          <img 
            className={`${p}-subscriber-avatar`} 
            src={avatar.previewURL}
            alt="A Subscriber To This Channel" />
        </a>
      )
    })
    setSubscriberAvatars(subAvatars)
  }

  const handleBio = async () => {
    let response = await getRandomName()
    response = response.data.results[0]
    const city = response.location.city
    const country = response.location.country

    setBio({
      fullBio: 
      `${getRandom(firstSentence)} ${getRandom(secondSentence)} I have lived in ${city}, ${country} for a total of ${getRandom(year)} years and learned quite a lot -not just about the country but myself as well. Not only do I want to inform others about life abroad but my main goal is to get you organized, stay mindful, and maintain a healthy and exciting lifestyle whether you plan on living in another country or not. This site is not only for adventure lovers but for inspiration seekers. All of what I have gained and endured will allow me to mold you into an adventurer yourself!`,
      greeting: getRandom(greeting)
    })
  }

  const determineAvatarFormat = () => {
    if (userAvatar.webformatURL) return userAvatar.webformatURL
    else if (userAvatar.userImageURL) return userAvatar.userImageURL
    else return 'https://i.imgur.com/4KiKrkv.jpg'
  }

  return (
    <div className={`${p}-wrapper`}>
      <div className={`${ p}-avatar-content-wrapper`}>
        <div className={`${p}-avatar-text-wrapper`}>
          <span className={`${p}-name-text`}>{userName}</span>
          <span className={`${p}-follower-text`}>
            {authorFollowers 
              ? abbreviateNumber(authorFollowers) + ' Followers'
              : abbreviateNumber(subscriberAmount) + ' Followers'} 
          </span>
        </div>
        <div className={`${p}-user-avatar-wrapper posRelative`}>
          <a className={`${p}-pixabay-src`} href={pixabaySource}>?</a>
          <img 
            className={`${p}-channel-avatar`} 
            src={determineAvatarFormat()}
            alt="No Avatar, Question Mark Placeholder" />
        </div>
      </div>
      {
        mobile
        ?
        null
        :
        <div className={`${p}-description-box`}>
          <h2>{bio.fullBio ? 'Description' : null}</h2>
          <br/>
          <p>{bio.fullBio ? bio.greeting : null}</p>
          <br/>
          <p>{bio.fullBio}</p>
          <br/>
          <p>{bio.fullBio ? 'love,' : null}</p>
          <br/>
          <p>{bio.fullBio ? userName : null}</p>
        </div>
      }

      <div className={`${p}-subscribers-box-wrapper`}>
        <span className={`${p}-subscribers-box-title`}> Subscribers </span>
        <div className={`${p}-subscribers-box`}>
          {subcriberAvatars}
        </div>
        <span className={`${p}-subscribers-box-bottom-text`}>{
          authorFollowers 
            ? `...and ${Number(Math.round(authorFollowers/40)).toLocaleString()} more`
            : `...and ${Number(Math.round(subscriberAmount/40)).toLocaleString()} more`
          }
        </span>
      </div>
    </div>
  )
}

export default AboveFold