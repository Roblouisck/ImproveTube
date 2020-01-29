import React, { useState } from 'react'

const VideoNotFound = () => {
  const [p, setResource] = useState("videoPage")
  return (
    <div>
      <div className="errorVidWrapper">
        <img className="errorVid" src="https://i.imgur.com/3vmjcjO.png" alt="Error Video"/>
      </div>
    </div>
  )
}

export default VideoNotFound