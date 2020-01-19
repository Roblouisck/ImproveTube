import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { uuid, fabricateTimeStamp, getRandom } from '../containers/helperFunctions'
import { avatarQuery } from '../words'
import quote from 'inspirational-quotes'
import history from '../history'

import { thumbsUp, thumbsDown, arrowDrop } from './svgs'
import { 
  fetchAvatars as callAvatarsAPI, 
  fetchVideos as callVideosAPI } from '../containers/api'

const ActivityFeed = (props) => {
  const [firstRenderDone, setFirstRenderDone] = useState()
  const [comments, setComments] = useState([])

  useEffect(() => {
    const mobile = window.innerWidth <= 600
    if (mobile) fetchAvatars('woman', 3)
    if (!mobile) fetchAvatars('woman', 6)
    if (history.location.pathname.includes('/video/') || history.location.pathname.includes('/search/')) {
      document.querySelector('.activityFeedContainer').classList.toggle('hide')
    }
  }, [])
  
  // if user clicks nav button, remove all comments generated by infinite scroll
  useEffect(() => {
    setComments(prevState => (prevState.slice(0, 8)))
  }, [props.button])
  
  // INFINITE SCROLL
  // Callback is triggered when ref is set in mapVideosToHTML
  const observer = useRef()
  const lastActivityPost = useCallback(lastPostNode => {
    observer.current = new IntersectionObserver(entries => {
      const lastPost = entries[0]
      if (lastPost.isIntersecting) fetchAvatars(getRandom(avatarQuery), 6)
    })
    if (lastPostNode) observer.current.observe(lastPostNode)
  })

  const fetchAvatars = async (query, amount) => {
    let response = await callAvatarsAPI(query, amount)
    response = response.data.hits
    mapCommentsToHTML(response)
  }

  const mapCommentsToHTML = (response) => {
    const picsMappedToHTML = response.map((pic, index) => {
      return ( 
        <div className="commentWrapper" key={uuid()} ref={response.length === index + 1 ? lastActivityPost : null}>
          <div className="avatarPlaceholder--comments">
          {props.page === 'channel' 
            ? <img 
                className="avatarPlaceholder--img" 
                src={
                  props.userAvatar.previewURL ? props.userAvatar.previewURL 
                  : props.userAvatar === "" ? 'https://i.imgur.com/ZwDgXSF.jpg' 
                  : props.userAvatar}
                alt="An Activity Feed User Avatar" />

            : <Link to={`/channel/${pic.id}`}> 
                <img 
                  className="avatarPlaceholder--img" 
                  src={pic.previewURL}
                  alt="An Activity Feed User Avatar" />
              </Link>
          }
          </div>
          <div className="commentContainer" >
            <h5 className="commentorName">{props.page === 'channel' ? props.userName : pic.user}</h5>
            <span className="dateOfComment">{fabricateTimeStamp(index)}</span> 
            <p className={`${props.page}-comment`}>{quote.getQuote().text}</p>
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
              View {Math.floor(Math.random() * 50) + 2} Replies
            </div>
          </div>
        </div>
      )
    })
    setComments(prevState => ([...prevState, ...picsMappedToHTML]))
  }

  return (
    <aside className="activityFeedContainer">
      <h1 className={`${props.page}--activity-feed-title`}>Activity Feed</h1>
      <hr className="home--activityfeed-hr" />
      <div className="commentSection--activityfeed">
        {comments}
      </div>
    </aside>
  )
}
export default ActivityFeed