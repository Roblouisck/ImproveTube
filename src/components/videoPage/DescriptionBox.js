import React, { useState, useEffect } from 'react'
import { abbreviateNumber} from '../../containers/helperFunctions'

const DescriptionBox = ({ props }) => {
  const [p, setPrefix] = useState("videoPage")

  useEffect(() => {
    if (props.authorAvatar === "") console.log('sdf')
  })

  return (
    <div className={`${p}-description-box`}>  
      <div className={`${p}-description-column-1-avatar-wrapper`}>
        <div className={`${p}-avatar-title-followers-wrapper`}>
          <a href={ props.picAuthorID ? `/channel/${props.picAuthorID}` : `/channel/000${props.vidAuthorID}`}>
            <img className={`${p}-description-column-1-avatar`} src={props.authorAvatar === "" ? 'https://i.imgur.com/PDj9hW9.jpg' : props.authorAvatar} />
          </a>
          <div className={`${p}-description-avatar-text-wrapper`}>
            <a href={ props.picAuthorID ? `/channel/${props.picAuthorID}` : `/channel/000${props.vidAuthorID}`}>
              <div className={`${p}-description-column-1-author`}>
                { props.loading === "yes" ? "loading" : props.author }
              </div>
            </a>
            <div className={`${p}-description-column-1-followers`}>
            { props.loading === "yes" ? "loading" : `${abbreviateNumber(props.authorFollowers)} Followers` }
            </div>
          </div>
        </div>
        <div className={`${p}-description-buttons-wrapper flex`}>
          <button className={`${p}-description-subscribe-button`}>SUBSCRIBE</button>
          <button className={`${p}-description-follow-button`}>FOLLOW</button>
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