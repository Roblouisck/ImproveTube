import React, { useState, useEffect, useRef, useCallback } from 'react'
import { fetchAvatars } from '../../containers/api'
import { uuid, randomNumber, getRandom } from '../../containers/helperFunctions'
import quote from 'inspirational-quotes'
import { avatarQuery } from '../../words'

import { 
  thumbsUp, 
  thumbsDown, 
  arrowDrop,
  ellipsesVertical } from '../svgs'

const CommentSection = (props) => {
  const [p, setPrefix] = useState("videoPage")
  const [generatedComments, setGeneratedComments] = useState([])
  const [generatedCommentsFinal, setGeneratedCommentsFinal] = useState([])
  const [userComments, setUserComments] = useState([])

  useEffect(() => {
    userClicksAddCommentField()
    fetchComments(getRandom(avatarQuery))
  }, [])

  // Cap the amount of randomly generated comments
  useEffect(() => {
    const commentNumber = calculateComments()
    if (generatedComments.length > commentNumber) {
      let prevComments = generatedComments
      setGeneratedCommentsFinal(prevComments.slice(0, commentNumber))
    }
  }, [generatedComments])

  // INFINITE SCROLL
  // Callback is triggered when ref is set in mapCommentsToHTML
  const observer = useRef()
  const lastUserComment = useCallback(lastCommentNode => {
    
    // Re-hookup observer to last post, to include fetchComments callback
    if (observer.current) observer.current.disconnect()
    observer.current = new IntersectionObserver(entries => {
      const lastComment = entries[0]
      if (lastComment.isIntersecting) fetchComments(getRandom(avatarQuery))
    })
    if (lastCommentNode) observer.current.observe(lastCommentNode)
  })

  const fetchComments = async (query) => {
    let response = await fetchAvatars(query, 16)
    response = response.data.hits
    mapCommentsToHTML(response)
  }

  const mapCommentsToHTML = (response) => {
    const commentsAsHTML = response.map((comment, index) => {
      return (
        <div key={uuid()} ref={response.length === index + 1 ? lastUserComment : null }>
          <a href={`/channel/${comment.id}`}>
            <img className={`${p}-comment-avatar`} src={comment.previewURL} alt="A Commentor Avatar" />
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
            {randomNumber(8) === 8 ? 
                <div className="viewReplies"> 
                  <span className="arrowDrop"> {arrowDrop()} </span>
                  {'View ' + (Math.floor(Math.random() * 10) + 2) + ' Replies' }
                </div>
              : null}
          </div>
        </div>
      )
    })
    setGeneratedComments(prevState => ([...prevState, ...commentsAsHTML]))
  }

  const userClicksAddCommentField = () => {
    const addCommentField = document.querySelector('.videoPage-add-comment')

    addCommentField.addEventListener('focus', () => {
      document.querySelector('.videoPage-add-comment-underline-animated').classList.add('show')
      document.querySelector('.videoPage-comment-button').classList.add('show')
      document.querySelector('.videoPage-cancel-button').classList.add('show')
      document.querySelector('.videoPage-button-space').classList.remove('hide')
    })
    addCommentField.addEventListener('blur', () => {
      document.querySelector('.videoPage-add-comment-underline-animated').classList.remove('show')
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

  const deleteComment = (event, i) => {
    const userCommentsArray = [...userComments]
    userCommentsArray.splice(i, 1)
    setUserComments(prevState => ([...prevState], userCommentsArray))

    const deleteButton = event.currentTarget.parentNode.querySelector('.videoPage-delete-comment-button')
    deleteButton.classList.remove('show')
  }

  const toggleDeleteButton = (event) => {
    const deleteButton = event.currentTarget.parentNode.querySelector('.videoPage-delete-comment-button')
    deleteButton.classList.toggle('show')
  }

  const postComment = (userComment) => {
    const userCommentNotBlank = !userComment.trim().length < 1
    if (userCommentNotBlank) {

      // Unshift inserts new comment to beginning of array
      const newState = [...userComments]
      newState.unshift(userComment)
      setUserComments(prevState => ([...prevState], newState))
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

  const calculateComments = () => {
    const commentNumber = Math.ceil(props.views/100)
    return commentNumber
  }

  return (
    <div>
      <span className={`${p}-number-of-comments`}>{Number(calculateComments()).toLocaleString()} comments</span>
      <span className={`${p}-sort-comments`}>Sort by</span>

      <div className={`${p}-add-comment-wrapper flex`}>
          <img className={`${p}-add-comment-avatar`} src="https://i.imgur.com/F4odDIJ.jpg" alt="Your Avatar" />
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
        { userComments 
          ? userComments.map((item, i) => (
            <div className="videoPage-user-comment-box" key={i}>
              <div id="mostRecentComment"></div>
                <img className="videoPage-comment-avatar" src="https://i.imgur.com/F4odDIJ.jpg" alt="A Commentor Avatar" />
              <div className="videoPage-edit-comment">
                <span className="videoPage-edit-comment-ellipses" onClick={event => toggleDeleteButton(event)}>
                  {ellipsesVertical(14)}
                </span>
                <div className="videoPage-delete-comment-button" onMouseDown={event => deleteComment(event, i)}>
                  <p>Delete</p>
                </div>
              </div>
                <div className="videoPage-comment-container">
                  <h5 className="commentorName">Robert Louis</h5>
                  <div className="dateOfComment">Just Now</div>
                  <p className="comment">{item}</p>
                  <div className="thumbs">
                    <span className="thumbsUpIcon">
                      {thumbsUp(16)}
                    </span>
                    <span className="thumbsDownIcon">
                      {thumbsDown(16)}
                    </span>
                  </div>
                  <p className="replyText">REPLY</p>
                </div>
              </div>
            ))
            : null
          }
        {generatedCommentsFinal.length === calculateComments() ? generatedCommentsFinal : generatedComments}
    </div>
  )
}

export default CommentSection