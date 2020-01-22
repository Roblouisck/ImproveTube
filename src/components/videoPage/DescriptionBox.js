import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { abbreviateNumber} from '../../containers/helperFunctions'

const DescriptionBox = ({ props }) => {
  const [p, setPrefix] = useState("videoPage")
  const [subscribed, setSubscribed] = useState(false)
  const [following, setFollowing] = useState(false)
  const { 
    picAuthorID, 
    vidAuthorID,
    loading,
    author,
    views,
    authorAvatar
  } = props
  const mobile = window.innerWidth <= 600

  const userClicksSubscribe = () => {
    if (subscribed) {
      document.querySelector(`.${p}-description-subscribe-button`).innerHTML = "SUBSCRIBE"
      document.querySelector(`.${p}-description-subscribe-button`).classList.remove('button-grey')
      setSubscribed(false)
    } else {
      document.querySelector(`.${p}-description-subscribe-button`).innerHTML = "UNSUBSCRIBE"
      document.querySelector(`.${p}-description-subscribe-button`).classList.add('button-grey')
      setSubscribed(true)
    }
  }

  const userClicksFollow = () => {
    if (following) {
      document.querySelector(`.${p}-description-follow-button`).innerHTML = "FOLLOW"
      document.querySelector(`.${p}-description-follow-button`).classList.remove('button-grey')
      setFollowing(false)
    } else {
      document.querySelector(`.${p}-description-follow-button`).innerHTML = "UNFOLLOW"
      document.querySelector(`.${p}-description-follow-button`).classList.add('button-grey')
      setFollowing(true)
    }
  }

  return (
    <div className={`${p}-description-box`}>  
      <div className={`${p}-description-column-1-avatar-wrapper`}>
        <div className={`${p}-avatar-title-followers-wrapper`}>
          <Link onTouchStart={() => window.stop()} to={{ pathname: picAuthorID ? `/channel/${picAuthorID}-${vidAuthorID}` : `/channel/000${vidAuthorID}`}}>
            <img 
              className={`${p}-description-column-1-avatar`} 
              src={authorAvatar === "" ? 'https://i.imgur.com/PDj9hW9.jpg' : authorAvatar} 
              alt="Video Author Avatar" />
          </Link>
          <div className={`${p}-description-avatar-text-wrapper`}>
            <Link to={{ pathname: picAuthorID ? `/channel/${picAuthorID}-${vidAuthorID}` : `/channel/000${vidAuthorID}`}}>
              <div className={`${p}-description-column-1-author`}>
                { loading === "yes" ? "loading" : author }
              </div>
            </Link>
            <div className={`${p}-description-column-1-followers`}>
            { loading === "yes" ? "loading" : `${abbreviateNumber(views)} Followers` }
            </div>
          </div>
        </div>
        <div className={`${p}-description-buttons-wrapper flex`}>
          <button 
            className={`${p}-description-subscribe-button`}
            onMouseDown={() => userClicksSubscribe()}
            >SUBSCRIBE
          </button>
          <button 
            className={`${p}-description-follow-button`}
            onMouseDown={() => userClicksFollow()}
            >FOLLOW</button>
        </div>
      </div>
      <div className={`${p}-description-column-1`}>
        <div className={`${p}-description-column-1-text`}>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eligendi architecto nesciunt velit sequi placeat voluptatibus,
          <br/>
          <br/>
          a laboriosam, et vitae aliquid beatae quae mollitia fuga dolores distinctio provident eum totam.
          <br/>
          <br/>
          a laboriosam, et vitae aliquid beatae quae mollitia fuga dolores distinctio provident eum totam.
          </span>
        </div>
      </div>
      <div className={`${p}-description-column-2`}>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eligendi architecto nesciunt velit sequi placeat voluptatibus,
          <br/>
          <br/>
          a laboriosam, et vitae aliquid beatae quae mollitia fuga dolores distinctio provident eum totam.
          <br/>
          <br/>
          a laboriosam, et vitae aliquid provident eum totam.
          <br/>
          <br/>
          Quos eligendi architecto nesciunt velit sequi placeat voluptatibus,
          <br/>
          <br/>
          a laboriosam, et vitae aliquid beatae quae mollitia fuga dolores distinctio provident eum totam.
          <br/>
          <br/>
          et vitae aliquid beatae quae mollitia 
        </span>
      </div>
      <div className={`${p}-description-column-3`}>
        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos eligendi architecto nesciunt velit sequi placeat voluptatibus,
          <br/>
          <br/>
          a laboriosam, et vitae aliquid beatae quae mollitia fuga dolores distinctio provident eum totam.
          <br/>
          <br/>
          a laboriosam, et vitae aliquid beatae quae mollitia fuga dolores distinctio provident eum totam.
        </span>
      </div>
    </div>
  )
}

export default DescriptionBox