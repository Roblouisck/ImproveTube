import React, { useEffect, useState } from 'react'
import { fetchAvatars, fetchVideos } from '../../containers/api'
import { avatarQuery } from '../../words'
import { 
  abbreviateNumber, 
  capitalizeFirstLetter,
  uuid,
  getRandom
} from '../../containers/helperFunctions'

const SearchPage = () => {
  const [p, setPrefix] = useState('searchPage')
  const [videos, setVideos] = useState([])
  const [avatars, setAvatars] = useState([])
  const [searchQuery, setSearchQuery] = useState()

  useEffect(() => {
    extractDataFromUrl()
  }, [])

  const extractDataFromUrl = () => {
    const currentURL = window.location.href
    const urlAsArray = currentURL.split('/')
    const query = decodeURIComponent(urlAsArray[4])
    setSearchQuery(query)
    getAvatars(query)
  }

  const getVideos = async (query) => {
    let response = await fetchVideos(50, ...Array(2), query)
    response = response.data.hits
    setVideos(response)
  }

  const getAvatars = async (query) => {
    let pictures = await fetchAvatars(getRandom(avatarQuery), 50)
    pictures = pictures.data.hits

    if (pictures.length < 50) {
      let additionalPictures = await fetchAvatars(getRandom(avatarQuery), 50)
      additionalPictures = additionalPictures.data.hits
      setAvatars([...pictures, ...additionalPictures])
    }
    else {
      setAvatars(pictures)
      getVideos(query)
    }
  }

  return (
    <div className={`${p}-body`}>
      <main className={`${p}-activity-feed-container`}>
        <h1 className={`${p}-activity-feed-title`}>Search Results: {searchQuery}</h1>
        <hr className={`${p}-activity-feed-hr`} />
        {
          videos.map((vid, index) => {
            return (
              <div className={`${p}-grid-content-wrapper`} key={uuid()}>
                <a className={`${p}-pixabay-src`} href={vid.pageURL}>?</a>
                <video 
                  className={`${p}-video clickable`}
                  onMouseOver={event => event.target.play()}
                  onMouseOut={event => event.target.pause()}
                  src={vid.videos.tiny.url}
                  controls
                  >
                </video>
                <div className={`${p}-under-video-content`}>
                  <div className={`${p}-avatar-wrapper`}>
                    <a href={`/channel/${avatars[index].id}`}> 
                      <img className={`${p}-grid-avatar`} src={avatars[index].webformatURL} alt="Video Author Avatar" /> 
                    </a> 
                  </div>

                  <a href={`/video/id/${vid.id}-${avatars[index].id}`}>
                    <div className={`home--grid-title`}>{capitalizeFirstLetter(vid.tags)}</div>
                  </a>

                  <a href={`/channel/${avatars[index].id}`}>
                    <div className={`home--grid-author`}>{avatars[index].user}</div>
                  </a>

                  <div className={`home--grid-views`}>{abbreviateNumber(vid.views)} views 
                    <span className={`home--grid-date`}> • 6 days ago</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </main>
    </div>
  )
}

export default SearchPage