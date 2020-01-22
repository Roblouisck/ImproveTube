import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import history from '../../history'
import handleMediaQueries from './containers/handleMediaQueries'
import setDislikes from './containers/setDislikes'
import NewSubscribers from './NewSubscribers'
import CommentSection from './CommentSection'
import UpNextVideos from './UpNextVideos'
import DescriptionBox from './DescriptionBox'
import VideoNotFound from './VideoNotFound'
import { fetchVideoFromID, fetchPictureFromID } from '../../containers/api'
import { thumbsUp, thumbsDown } from '../svgs'
import { thumbsUpClicked, thumbsDownClicked } from './containers/handleClickingThumbs'

import { 
  abbreviateNumber, 
  capitalizeFirstLetter, 
  randomDate } from '../../containers/helperFunctions'

const VideoPage = ({ match }) => {
  const { params } = match
  const [p, setPrefix] = useState("videoPage")
  const [state, setState] = useState({
    loading: true,
    error: false,
    thumbsUp: false,
    thumbsDown: false
  })
  const mobile = window.innerWidth <= 600
  
  useEffect(() => {
    scroll(0, 0)
    if (!state.loading) handleMediaQueries()
    if (state.loading) {
      extractDataFromUrl()
    }
  }, [state.loading])

  useEffect(() => {
    scroll(0, 0)
    if (state.loading === false) extractDataFromUrl(params.videoId, true)
  }, [params.videoId])

  const fetchVideo = async (id, picAuthorID) => {
    let response = await fetchVideoFromID(id)    
    if (!response) setState(prevState => ({...prevState, error: true}))
    else propogateState(response.data.hits[0], picAuthorID)
  }

  const propogateState = (response, picAuthorID) => {
    setState(prevState => ({
      ...prevState, 
      ...response, 
      loading: false, 
      author: picAuthorID ? 'Loading' : response.user,
      authorAvatar: picAuthorID ? null : response.userImageURL,
      vidAuthorID: response.id,
      date: randomDate(),
      dislikes: setDislikes(response.likes)
    }))
    if (picAuthorID) fetchAuthorAvatar(picAuthorID)
  }

  const extractDataFromUrl = (id) => {
    const currentURL = window.location.href
    const urlAsArray = currentURL.split('/')
    const urlID = id ? id.split('-') : urlAsArray[5].split('-')
    const videoID = urlID[0]
    const picAuthorID = urlID[1]

    // Author avatars are random except on the home page. 
    // if url isnt from homepage, then use videoID
    // if url is from homepage, send that avatarID
    if (urlID.includes('000')) {
      fetchVideo(videoID)
    } else {
      setState(prevState => ({...prevState, picAuthorID: picAuthorID}))
      fetchVideo(videoID, picAuthorID)
    }
  }

  const fetchAuthorAvatar = async (id) => {
    const response = await fetchPictureFromID(id)
    const authorName = response.data.hits[0].user
    const authorAvatar = response.data.hits[0].previewURL
    setState(prevState => ({
      ...prevState, 
      authorAvatar: authorAvatar, 
      author: capitalizeFirstLetter(authorName)
    }))
  }

  const determineVideoSize = () => {
    if (mobile) return state.videos.tiny.url
    else if (state.videos.large.url) return state.videos.large.url
    else if (state.videos.medium.url) return state.videos.medium.url
  }

  return (
    <div>
      { state.error ? <VideoNotFound /> : null}
      { state.loading === true ? null
        : 
        <div className={`${p}-page-wrapper`}>
          <main className={`${p}-main`}>
            <div className={`${p}-video-wrapper posRelative`} key={state.id}>
              <a className={`${p}-pixabay-src`} href={state.pageURL}>?</a>
              <video 
                poster="https://i.imgur.com/Us5ckqm.jpg" 
                className={`${p}-video clickable`}
                src={determineVideoSize()} 
                controls
                autoPlay
                >
              </video>
              <div className={`${p}-video-info-wrapper`}>  
                <div className={`${p}-video-title-box`}>
                  <h1 className={`${p}-video-title`}>{capitalizeFirstLetter(state.tags)}</h1>
                  <span className={`${p}-video-views`}>{abbreviateNumber(Number(state.downloads).toLocaleString())} views</span>
                  <span className={`${p}-video-date`}>{state.date}</span>
                </div>
                <div className={`${p}-video-options`}>
                  <div className="thumbs no-select">
                    <div 
                      className={`${p}-video-options-thumbsUp`}
                      onMouseDown={() => thumbsUpClicked(state.likes)}
                      >{thumbsUp(20)} &nbsp; 
                      <span className={`${p}-video-options-thumbsUp-text`}>{abbreviateNumber(state.likes)}</span>
                    </div>
                    <div 
                      className={`${p}-video-options-thumbsDown`}
                      onMouseDown={() => thumbsDownClicked(state.dislikes)}
                      >{thumbsDown(20)} &nbsp; 
                      <span className={`${p}-video-options-thumbsDown-text`}>{state.dislikes}</span>
                    </div>
                    <div className={`${p}-video-options-likebar`}></div>
                  </div>
                  <span className={`${p}-video-options-share`}>Share</span>
                  <span className={`${p}-video-options-save`}>Save</span>
                  <span className={`${p}-video-options-ellipses`}>...</span>
                </div>
              </div>
            </div>
            <DescriptionBox props={state} />
            <div className={`${p}-suggested-videos-mobile`}></div>
            <div className={`${p}-new-subscribers-wrapper`}>
              <h2 className={`${p}-new-subscribers-text`}>{`New Subscribers to ${state.author}`}</h2>
              <NewSubscribers />
            </div>
            <div className={`${p}-comment-section`}>
              <CommentSection views={state.downloads}/>
            </div>
          </main>
          <aside className={`${p}-sidebar`}>
            <UpNextVideos />
          </aside>
        </div>
      }
    </div>
  )
}

export default withRouter(VideoPage)