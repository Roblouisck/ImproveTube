import React, { useEffect, useState, useRef, useCallback } from 'react'
import quote from 'inspirational-quotes'

import { 
  thumbsUp, 
  thumbsDown, 
  arrowDrop } from './svgs'

import { 
  fetchAvatars as callAvatarsAPI, 
  fetchVideos as callVideosAPI } from '../containers/api'

const ActivityFeed = (props) => {
  const [comments, setPics] = useState([])
  const [firstRenderDone, setFirstRenderDone] = useState()

  // INFINITE SCROLL
  // Callback is triggered when ref is set in mapVideosToHTML
  const observer = useRef()
  const lastActivityPost = useCallback(lastPostNode => {

    // Re-hookup observer to last post, to include fetch data callback
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      const lastPost = entries[0]
      if (lastPost.isIntersecting) fetchAvatars()
    })
    if (lastPostNode) observer.current.observe(lastPostNode)
  })

  const fetchAvatars = async () => {
    let response = await callAvatarsAPI('person')
    response = response.data.hits
    mapPicsToHTML(response)
  }

  const mapPicsToHTML = (response) => {
    const picsMappedToHTML = response.map((pic, index) => {
      return ( 
        <div className="commentWrapper" key={pic.id} ref={response.length === index + 1 ? lastActivityPost : null}>
          <div className="avatarPlaceholder--comments">
          {props.page === 'channel' 
            ? <img className="avatarPlaceholder--img" src={props.userAvatar}/>
            : <a href={ `/channel/${pic.id}`}> 
                <img className="avatarPlaceholder--img" src={pic.webformatURL}/>
              </a>
          }
          </div>
          <div className="commentContainer" >
            <h5 className="commentorName">{props.page === 'channel' ? props.userName : pic.user}</h5>
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
    setPics(prevState => ([...prevState, ...picsMappedToHTML]))
  }

  useEffect(() => {
    setFirstRenderDone(true)
    if ((firstRenderDone) && (props.page === 'channel')) {
      fetchAvatars()
    } else if (props.page === 'home') {
      fetchAvatars()
    }
  }, [props])

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