import React, { useEffect, useState, useRef, useCallback } from 'react'
import axios from 'axios'
import { fetchVideos } from '../../containers/api'
import { capitalizeFirstLetter, uuid } from '../../containers/helperFunctions'

const UpNextVideos = () => {
  const [p, setPrefix] = useState("videoPage")
  const [nextVideos, setNextVideos] = useState([])

  useEffect(() => {
    fetchUpNextVideos(15, 'buildings')
  }, [])

  // INFINITE SCROLL
  // Callback is triggered when ref is set in fetchUpNextVideos
  const observer = useRef()
  const lastUpNextVideo = useCallback(lastVideoNode => {
      console.log('1')

    // Re-hookup observer to last post, to include fetch data callback
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      console.log('2')
      const lastVideo = entries[0]
      if (lastVideo.isIntersecting) fetchUpNextVideos(20)
    })
    if (lastVideoNode) observer.current.observe(lastVideoNode)
  })

  const fetchUpNextVideos = async (amount, category, order) => {
    let response = await fetchVideos(amount, category, order)
    response = response.data.hits

    const responseAsHtml = response.map((vid, index) => {
      return (
        <div className={`${p}-sidebar-grid-video-wrapper`} key={uuid()} ref={response.length === index + 1 ? lastUpNextVideo : null}>
          <div className={`${p}-sidebar-grid-video`}>
            <a href={`/video/id/${vid.id}-000`}>
              <video 
                className={`${p}-video`} 
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={`${vid.videos.tiny.url}#t=1`}
                muted >
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
    setNextVideos(prevState => ([...prevState, ...responseAsHtml]))
  }

  return (
    <div>
      <div className={`${p}-sidebar-text-top`}>
        <span className={`${p}-sidebar-text-upnext`}>Up next</span>
        <span className={`${p}-sidebar-text-autoplay`}>Autoplay</span>
      </div>
      <div className={`${p}-sidebar-grid-wrapper`}>
        {nextVideos}
      </div> 
    </div>
  )
}

export default UpNextVideos
