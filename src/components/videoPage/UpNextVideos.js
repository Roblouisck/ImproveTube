import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { videoQuery } from '../../words'
import { fetchVideos } from '../../containers/api'
import { 
  capitalizeFirstLetter, 
  uuid,
  getRandom,
  abbreviateNumber
} from '../../containers/helperFunctions'

const UpNextVideos = () => {
  const [p, setPrefix] = useState("videoPage")
  const [nextVideos, setNextVideos] = useState([])

  useEffect(() => {
  const mobile = window.innerWidth <= 600
    if (mobile) fetchUpNextVideos(3, getRandom(videoQuery))
    else fetchUpNextVideos(10, getRandom(videoQuery))
  }, [])

  // INFINITE SCROLL
  // Callback is triggered when ref is set in fetchUpNextVideos
  const observer = useRef()
  const lastUpNextVideo = useCallback(lastVideoNode => {

    // Re-hookup observer to last post, to include fetch data callback
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      const lastVideo = entries[0]
        if (lastVideo.isIntersecting && window.innerWidth <= 1000) {
          document.querySelector('.videoPage-show-more-button').classList.add('show')
        }
        else if (lastVideo.isIntersecting && window.innerWidth > 1000) {
          document.querySelector('.videoPage-show-more-button').classList.remove('show')
          fetchUpNextVideos(10, getRandom(videoQuery))
      }
    })
    if (lastVideoNode) observer.current.observe(lastVideoNode)
  })

  const fetchUpNextVideos = async (amount, query) => {
    let response = await fetchVideos(amount, ...Array(2), query)
    response = response.data.hits

    const responseAsHtml = response.map((vid, index) => {
      return (
        <div className={`${p}-sidebar-grid-video-wrapper`} key={uuid()} ref={response.length === index + 1 ? lastUpNextVideo : null}>
          <div className={`${p}-sidebar-grid-video`}>
            <Link to={`/video/id/${vid.id}`}>
              <video 
                className={`${p}-upnext-video`} 
                onMouseOver={event => event.target.play()}
                onMouseOut={event => event.target.pause()}
                src={`${vid.videos.tiny.url}#t=1`}
                muted >
              </video>
            </Link>
          </div>
          <Link to={`/video/id/${vid.id}`}>
            <h3 className={`${p}-sidebar-grid-video-title`}>{capitalizeFirstLetter(vid.tags)}</h3>
          </Link>
          <Link to={`/channel/000${vid.id}`}>
            <p className={`${p}-sidebar-grid-video-author`}>{vid.user}</p>
          </Link>
          <p className={`${p}-sidebar-grid-video-views-text`}>{abbreviateNumber(vid.downloads)} views</p>
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
      <button 
        className={`${p}-show-more-button`} 
        onMouseDown={() => fetchUpNextVideos(15, getRandom(videoQuery))}>
        Show More
      </button>
    </div>
  )
}

export default UpNextVideos
