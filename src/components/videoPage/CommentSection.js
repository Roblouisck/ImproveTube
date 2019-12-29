import React, { useState, useEffect } from 'react'
import {fetchAvatars } from '../../containers/api'
import quote from 'inspirational-quotes'

import { 
  thumbsUp, 
  thumbsDown, 
  arrowDrop,
  ellipsesVertical } from '../svgs'

const CommentSection = () => {
  const [p, setPrefix] = useState("videoPage")
  const [state, setState] = useState([])

  useEffect(() => {
    userClicksAddCommentField()
    fetchComments()
  }, [])

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

  const userClicksAddCommentField = () => {
    const addCommentField = document.querySelector('.videoPage-add-comment')
    const underlineAnimated = document.querySelector('.videoPage-add-comment-underline-animated')
    const commentButton = document.querySelector('.videoPage-comment-button')
    const cancelButton = document.querySelector('.videoPage-cancel-button')
    const buttonSpace = document.querySelector('.videoPage-button-space')

    addCommentField.addEventListener('focus', () => {
      underlineAnimated.classList.add('show')
      commentButton.classList.add('show')
      cancelButton.classList.add('show')
      buttonSpace.classList.remove('hide')
    })
    addCommentField.addEventListener('blur', () => {
      underlineAnimated.classList.remove('show')
    })
  }

  const showCommentButtons = () => {
    const buttonSpace = document.querySelector('.videoPage-button-space')
    const commentButton = document.querySelector('.videoPage-comment-button')
    const cancelButton = document.querySelector('.videoPage-cancel-button')
    
    commentButton.classList.add('show')
    cancelButton.classList.add('show')
    buttonSpace.classList.remove('hide')
  }

  const resetAddComment = () => {
    document.getElementById('addComment').value = ''
    document.querySelector('.videoPage-comment-button').classList.remove('show')
    document.querySelector('.videoPage-cancel-button').classList.remove('show')
    document.querySelector('.videoPage-button-space').classList.add('hide')
    document.querySelector('.videoPage-comment-button').classList.remove('backgroundBlue')
    document.querySelector('.videoPage-comment-button').classList.remove('clickable')
    document.getElementById('addComment').blur()
  }

  const toggleEditComment = () => {
    document.querySelector('.videoPage-edit-comment-menu').classList.toggle('hide')
    console.log('ran')
  }

  const postComment = (userComment) => {
    const mostRecentComment = document.getElementById('mostRecentComment')
    const commentButton = document.querySelector('.videoPage-comment-button')
    const userCommentNotBlank = !userComment.trim().length < 1

    if (userCommentNotBlank) {
      mostRecentComment.insertAdjacentHTML('beforebegin', 
       
`       <div class="videoPage-user-comment-box">
          <div id="mostRecentComment" class="videoPage-comment-avatar"></div>
          <div class="videoPage-edit-comment">
            <span class="videoPage-edit-comment-ellipses" onClick="toggleEditComment()">
              ${ellipsesVertical(14, "insideJSX")}
            </span>
            <div class="videoPage-edit-comment-menu">
              <p class="videoPage-delete-comment-text">Delete</p>
            </div>
          </div>
            <div class="videoPage-comment-container">
              <h5 class="commentorName">Guest</h5>
              <div class="dateOfComment">Just Now</div>
              <p class="comment">${userComment}</p>
              <div class="thumbs">
                <span class="thumbsUpIcon">
                  ${thumbsUp(16, "insideJSX")}
                </span>
                <span class="thumbsDownIcon">
                  ${thumbsDown(16, "insideJSX")}
                </span>
              </div>
              <p class="replyText">REPLY</p>
            </div>
          </div>`
        )
      resetAddComment()
    }
  }

  const commentFieldHasText = (event, userComment) => {
    const userCommentBlank = userComment.trim().length < 1
    const userCommentNotBlank = !userCommentBlank
    const commentButton = document.querySelector('.videoPage-comment-button')

    if (userCommentNotBlank) {
      commentButton.classList.add('clickable')
      commentButton.classList.add('backgroundBlue')
    } 
    if (userCommentBlank) {
      commentButton.classList.remove('clickable')
      commentButton.classList.remove('backgroundBlue')
    }
    // User presses enter button
    if ((event.key === 'Enter') && userCommentNotBlank) {
      postComment(userComment)
    }
  }

  return (
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
  )
}

export default CommentSection