import React, { useEffect, useState } from 'react'
import axios from 'axios'
import history from '../../history'
import handleMediaQueries from './containers/mediaQueries'
import quote from 'inspirational-quotes'

import setDislikes from './containers/setDislikes'
import makeLeftClickRedirect from './containers/makeLeftClickRedirect'

import { 
  fetchVideoFromID, 
  fetchVideos, 
  fetchAvatars,
  fetchPictureFromID } from '../../containers/api'

import { 
  toggleClass, 
  abbreviateNumber, 
  capitalizeFirstLetter, 
  randomDate } from '../../containers/helperFunctions'

import {
  userClicksAddCommentField,
  showCommentButtons,
  resetAddComment,
  postComment,
  commentFieldHasText
} from './containers/handleComments'

import { 
  thumbsUp, 
  thumbsDown, 
  arrowDrop } from '../svgs'


const VideoPage = () => {
  const [p, setPrefix] = useState("videoPage")
  const [state, setState] = useState(

  // Data to act as a placeholder until video loads
  {
    video: 
      <div className={`${p}-video-wrapper`}>
        <video poster="https://i.imgur.com/Us5ckqm.jpg" className={`${p}-video clickable`} controls autoPlay></video>
        <div className={`${p}-video-info-wrapper`}>  
          <div className={`${p}-video-title-box`}>
            <h1 className={`${p}-video-title`}>Loading</h1>
            <span className={`${p}-video-views`}>0k views</span>
            <span className={`${p}-video-date`}>Loading Date</span>
          </div>
          <div className={`${p}-video-options`}>
            <div className="thumbs">
              <div className={`${p}-video-options-thumbsUp`}>{thumbsUp(20)} &nbsp; 
                <span className={`${p}-video-options-thumbsUp-text`}>20k</span>
              </div>
              <div className={`${p}-video-options-thumbsDown`}>{thumbsDown(20)} &nbsp; 
                <span className={`${p}-video-options-thumbsDown-text`}>20k</span>
              </div>
              <div className={`${p}-video-options-likebar`}></div>
            </div>
            <span className={`${p}-video-options-share`}>Share</span>
            <span className={`${p}-video-options-save`}>Save</span>
            <span className={`${p}-video-options-ellipses`}>...</span>
          </div>
        </div>
      </div>,
    loading: "yes"
  })

  const fetchUpNextVideos = async (amount, category, order) => {
    let response = await fetchVideos(amount, category, order)
    response = response.data.hits
    console.log(response)

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
            <h3 className={`${p}-sidebar-grid-video-title`}>{vid.tags}</h3>
          </a>
          <a href={`/channel/000${vid.id}`}>
            <p className={`${p}-sidebar-grid-video-author`}>{vid.user}</p>
          </a>
          <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
        </div>
      )
    })
    setState(prevState => ({...prevState, upNextVideos: responseAsHtml}))
    fetchSubscriberAvatars()
}

  const fetchVideo = async (id, authorAvatar) => {
    let response = await fetchVideoFromID(id)
    response = response.data.hits
    console.log(response)
    mapVideoResponseToHTML(response, authorAvatar)
  }

  const mapVideoResponseToHTML = (response, authorAvatar) => {
    let responseAsHtml = response.map(vid => {
      return {
        video: 
        <div className={`${p}-video-wrapper`} key={vid.id}>
          <video 
            poster="https://i.imgur.com/Us5ckqm.jpg" 
            className={`${p}-video clickable`} 
            src={vid.videos.large.url} 
            controls autoPlay>
          </video>
          <div className={`${p}-video-info-wrapper`}>  
            <div className={`${p}-video-title-box`}>
              <h1 className={`${p}-video-title`}>{capitalizeFirstLetter(vid.tags)}</h1>
              <span className={`${p}-video-views`}>{abbreviateNumber(vid.views)} views</span>
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
        authorFollowers: vid.id,
        vidAuthorID: vid.id,
        author: authorAvatar ? 'Loading' : vid.user,
        authorAvatar: authorAvatar ? null : vid.userImageURL
      }
    })
    responseAsHtml = responseAsHtml[0]
    setState(prevState => ({...prevState, ...responseAsHtml, loading: false}))
  }

  const fetchSubscriberAvatars = async () => {
    let subscriberAvatars = await fetchAvatars('woman', 21)
    subscriberAvatars = subscriberAvatars.data.hits
    mapSubscriberAvatarsToHtml(subscriberAvatars)
  }

  const mapSubscriberAvatarsToHtml = (subscriberAvatars) => {
    const newSubscribers = subscriberAvatars.map(avatar => {
      return (
        <a className={`${p}-new-subscribers-subscriber-img-anchor`} href={`/channel/${avatar.id}`} key={avatar.id}> 
          <img className={`${p}-new-subscribers-subscriber-img`} src={avatar.webformatURL} />
        </a>
      )
    })
    setState(prevState => ({...prevState, newSubscribers: newSubscribers}))
    fetchComments()
  }

  const fetchComments = async () => {
    let response = await fetchAvatars('person')
    response = response.data.hits
    mapCommentsToHTML(response)
  }

  const mapCommentsToHTML = (response) => {
    const commentsAsHTML = response.map(comment => {
      return (
        <div key={comment.id}>
          <a href={`/channel/${comment.id}`}>
            <img className={`${p}-comment-avatar`} src={comment.webformatURL}/>
          </a>
          <div className={`${p}-comment-container`}>
            <a href={`/channel/${comment.id}`}>
              <h5 className="commentorName">{comment.user}</h5>
            </a>
            <div className="dateOfComment">6 months ago</div>
            <p className="comment">{quote.getQuote().text}</p>
            <div className="thumbs">
              <span className="thumbsUpIcon">
                {thumbsUp(16)}
              </span>
              <span className="thumbsDownIcon">
                {thumbsDown(16)}
              </span>
            </div>
            <p className="replyText">REPLY</p>
            <div className="viewReplies">
              <span className="arrowDrop">
                {arrowDrop()}
              </span>
              View {Math.floor(Math.random() * 100)} Replies
            </div>
          </div>
        </div>
      )
    })
    setState(prevState => ({...prevState, comments: commentsAsHTML}))
  }

  const extractDataFromUrl = () => {
    const currentURL = window.location.href
    const urlAsArray = currentURL.split('/')
    const urlID = urlAsArray[5].split('-')
    const videoID = urlID[0]
    const picAuthorID = urlID[1]

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
    const authorAvatar = response.data.hits[0].webformatURL
    setState(prevState => ({
      ...prevState, 
      authorAvatar: authorAvatar, 
      author: capitalizeFirstLetter(authorName)
    }))
    fetchUpNextVideos(50, 'buildings')
  }

  useEffect(() => {
    extractDataFromUrl()
    userClicksAddCommentField()
    handleMediaQueries()
  }, [])

  useEffect(() => {
    if (state.picAuthorID) {
      fetchAuthorAvatar(state.picAuthorID)
    } else {
      fetchUpNextVideos(50, 'buildings')
    }
}, [state.loading])

  return (
    <div className={`${p}-page-wrapper`}>
      <main className={`${p}-main`}>
        {state.video}
        <div className={`${p}-description-box`}>  
          <div className={`${p}-description-column-1-avatar-wrapper`}>
            <div className="flex">
              <a href={`/channel/${state.d}`}>
                <img className={`${p}-description-column-1-avatar`} src={state.authorAvatar} />
              </a>
              <div>
                <a href={ state.picAuthorID ? `/channel/${state.picAuthorID}` : `/channel/000${state.vidAuthorID}`}>
                  <div className={`${p}-description-column-1-author`}>
                    { state.loading === "yes" ? "Loading" : state.author }
                  </div>
                </a>
                <div className={`${p}-description-column-1-followers`}>
                { state.loading === "yes" ? "Loading" : `${abbreviateNumber(state.authorFollowers)} Followers` }
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
          
        <div className={`${p}-suggested-videos-mobile`}></div>
        <div className={`${p}-new-subscribers-wrapper`}>
          <h2 className={`${p}-new-subscribers-text`}>New Subscribers to DevPlaceholder</h2>
          <div className={`${p}-new-subscribers-grid`}>
            {state.newSubscribers}
          </div>
        </div>
        <div className={`${p}-comment-section`}>
        <span className={`${p}-number-of-comments`}>1,392 comments</span>
        <span className={`${p}-sort-comments`}>Sort by</span>

        <div className={`${p}-add-comment-wrapper flex`}>
          <div className={`${p}-add-comment-avatar`}></div>
          <input 
            id="addComment"
            className={`${p}-add-comment`} 
            placeholder="Add a public comment" 
            onKeyUp={event => commentFieldHasText(event, event.currentTarget.value)}
            onClick={event => showCommentButtons()}
            />
          <hr className={`${p}-add-comment-underline`}/>
          <hr className={`${p}-add-comment-underline-animated`}/>
          <button 
            className={`${p}-comment-button hide`}
            onClick={() => postComment(document.getElementById('addComment').value)}>
            Comment
          </button>

          <button 
            className={`${p}-cancel-button hide`}
            onClick={() => resetAddComment()}>
            Cancel
          </button>
         </div>
          <div className={`${p}-button-space hide`}></div>
          <div id='mostRecentComment'></div>
          {state.comments}
        </div>
      </main>
      <aside className={`${p}-sidebar`}>
        <div className={`${p}-sidebar-text-top`}>
          <span className={`${p}-sidebar-text-upnext`}>Up next</span>
          <span className={`${p}-sidebar-text-autoplay`}>Autoplay</span>
        </div>
        <div className={`${p}-sidebar-grid-wrapper`}>
        {state.upNextVideos}
        </div> 
      </aside>
    </div>
  )
}

export default VideoPage