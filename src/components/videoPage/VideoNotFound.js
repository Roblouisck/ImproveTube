import React, { useState } from 'react'
import { toggleClass } from '../../containers/helperFunctions'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import FooterMobile from '../FooterMobile'

const VideoNotFound = () => {
  const [p, setResource] = useState("videoPage")
  return (
    <div>
      <div className="errorVidWrapper">
        <img className="errorVid" src="https://i.imgur.com/3vmjcjO.png"/>
      </div>
    </div>
  )
}

export default VideoNotFound