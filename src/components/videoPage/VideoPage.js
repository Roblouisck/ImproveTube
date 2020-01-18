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

import { 
  abbreviateNumber, 
  capitalizeFirstLetter, 
  randomDate } from '../../containers/helperFunctions'

const VideoPage = ({ match }) => {
  const { params } = match
  const [p, setPrefix] = useState("videoPage")
  const [state, setState] = useState({
    loading: true,
    error: false
  })

  useEffect(() => {
    scroll(0, 0)
    if (!state.loading) handleMediaQueries()
    if (state.loading) extractDataFromUrl()
    else if (params.videoId) extractDataFromUrl(params.videoId)
  }, [params.videoId, state.loading])

  const fetchVideo = async (id, picAuthorID) => {
    let response = await fetchVideoFromID(id)
    if (!response) setState(prevState => ({...prevState, error: true}))
    else mapVideoResponseToHTML(response.data.hits, picAuthorID)
  }

  const mapVideoResponseToHTML = (response, picAuthorID) => {
    let responseAsHtml = response.map(vid => {
      return {
        video: 
        <div className={`${p}-video-wrapper posRelative`} key={vid.id}>
          <a className={`${p}-pixabay-src`} href={vid.pageURL}>?</a>
          <video 
            poster="https://i.imgur.com/Us5ckqm.jpg" 
            className={`${p}-video clickable`}
            src={vid.videos.large.url ? vid.videos.large.url : vid.videos.medium.url} 
            controls autoPlay>
          </video>
          <div className={`${p}-video-info-wrapper`}>  
            <div className={`${p}-video-title-box`}>
              <h1 className={`${p}-video-title`}>{capitalizeFirstLetter(vid.tags)}</h1>
              <span className={`${p}-video-views`}>{abbreviateNumber(Number(vid.downloads).toLocaleString())} views</span>
              <span className={`${p}-video-date`}>{randomDate()}</span>
            </div>
            <div className={`${p}-video-options`}>
              <div className="thumbs">
                <div className={`${p}-video-options-thumbsUp`}>{thumbsUp(20)} &nbsp; 
                  <span className={`${p}-video-options-thumbsUp-text`}>{abbreviateNumber(vid.likes)}</span>
                </div>
                <div className={`${p}-video-options-thumbsDown`}>{thumbsDown(20)} &nbsp; 
                  <span className={`${p}-video-options-thumbsDown-text`}>{setDislikes(vid.likes)}</span>
                </div>
                <div className={`${p}-video-options-likebar`}></div>
              </div>
              <span className={`${p}-video-options-share`}>Share</span>
              <span className={`${p}-video-options-save`}>Save</span>
              <span className={`${p}-video-options-ellipses`}>...</span>
            </div>
          </div>
        </div>,
        authorFollowers: vid.views,
        vidAuthorID: vid.id,
        author: picAuthorID ? 'Loading' : vid.user,
        authorAvatar: picAuthorID ? null : vid.userImageURL,
        views: vid.downloads
      }
    })
    responseAsHtml = responseAsHtml[0]
    setState(prevState => ({...prevState, ...responseAsHtml, loading: false}))
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

  return (
    <div>
      { state.error ? <VideoNotFound /> : null}
      { state.loading === true ? null
        : 
        <div className={`${p}-page-wrapper`}>
          <main className={`${p}-main`}>
            {state.video}
            <DescriptionBox props={state} />
            <div className={`${p}-suggested-videos-mobile`}></div>

            <div className={`${p}-new-subscribers-wrapper`}>
              <h2 className={`${p}-new-subscribers-text`}>{`New Subscribers to ${state.author}`}</h2>
              <NewSubscribers />
            </div>
            <div className={`${p}-comment-section`}>
              <CommentSection views={state.views}/>
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