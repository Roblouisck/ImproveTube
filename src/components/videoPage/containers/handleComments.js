  // COMMENTS
  import React from 'react'

  import { 
    thumbsUp, 
    thumbsDown, 
    arrowDrop } from '../../svgs'

  export const userClicksAddCommentField = () => {
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

export const showCommentButtons = () => {
    const buttonSpace = document.querySelector('.videoPage-button-space')
    const commentButton = document.querySelector('.videoPage-comment-button')
    const cancelButton = document.querySelector('.videoPage-cancel-button')
    
    commentButton.classList.add('show')
    cancelButton.classList.add('show')
    buttonSpace.classList.remove('hide')
  }

export const resetAddComment = () => {
    document.getElementById('addComment').value = ''
    document.querySelector('.videoPage-comment-button').classList.remove('show')
    document.querySelector('.videoPage-cancel-button').classList.remove('show')
    document.querySelector('.videoPage-button-space').classList.add('hide')
    document.querySelector('.videoPage-comment-button').classList.remove('backgroundBlue')
    document.querySelector('.videoPage-comment-button').classList.remove('clickable')
    document.getElementById('addComment').blur()
  }

export const postComment = (userComment) => {
    const mostRecentComment = document.getElementById('mostRecentComment')
    const commentButton = document.querySelector('.videoPage-comment-button')
    const userCommentNotBlank = !userComment.trim().length < 1

    if (userCommentNotBlank) {
      mostRecentComment.insertAdjacentHTML('beforebegin', 
      ` 
        <div>
          <div id="mostRecentComment" class=videoPage-comment-avatar></div>
            <div class=videoPage-comment-container>
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
        </div>
      `
    )
  resetAddComment()
  }
}

export const commentFieldHasText = (event, userComment) => {
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