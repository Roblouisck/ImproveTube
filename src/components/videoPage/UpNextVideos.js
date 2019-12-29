import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { fetchVideos } from '../../containers/api'
import { capitalizeFirstLetter } from '../../containers/helperFunctions'

const UpNextVideos = () => {
  const [p, setPrefix] = useState("videoPage")
  const [state, setState] = useState([])

  useEffect(() => {
    fetchUpNextVideos(50, 'buildings')
  }, [])

  const fetchUpNextVideos = async (amount, category, order) => {
    let response = await fetchVideos(amount, category, order)
    response = response.data.hits

    const responseAsHtml = response.map(vid => {
      return (
        <div className={`${p}-sidebar-grid-video-wrapper`} key={vid.id}>
          <div className={`${p}-sidebar-grid-video`}>
            <a href={`/video/id/${vid.id}-000`}>
              <video 
                className={`${p}-video`} 
                src={vid.videos.tiny.url}>
              </video>
            </a>
          </div>
          <a href={`/video/id/${vid.id}`}>
            <h3 className={`${p}-sidebar-grid-video-title`}>{capitalizeFirstLetter(vid.tags)}</h3>
          </a>
          <a href={`/channel/000${vid.id}`}>
            <p className={`${p}-sidebar-grid-video-author`}>{vid.user}</p>
          </a>
          <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
        </div>
      )
    })
    setState(prevState => ({...prevState, upNextVideos: responseAsHtml}))
  }

  return (
    <div>
      <div className={`${p}-sidebar-text-top`}>
        <span className={`${p}-sidebar-text-upnext`}>Up next</span>
        <span className={`${p}-sidebar-text-autoplay`}>Autoplay</span>
      </div>
      <div className={`${p}-sidebar-grid-wrapper`}>
        {state.upNextVideos}
      </div> 
    </div>
  )
}

export default UpNextVideos
