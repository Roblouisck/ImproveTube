import React, { useEffect, useState } from 'react'
import axios from 'axios'
import history from '../../history'

import { 
  toggleClass, 
  abbreviateNumber, 
  capitalizeFirstLetter, 
  randomDate } from '../../containers/helperFunctions'
  
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

    upNextVideos: '',
    loading: "yes",
  }
)

  // COMMENTS
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

  const postComment = (userComment) => {
    const mostRecentComment = document.getElementById('mostRecentComment')
    const commentButton = document.querySelector('.videoPage-comment-button')
    const userCommentNotBlank = !userComment.trim().length < 1

    if (userCommentNotBlank) {
      mostRecentComment.insertAdjacentHTML('beforebegin', 
      ` 
        <div>
          <div id="mostRecentComment" class=${p}-comment-avatar></div>
            <div class=${p}-comment-container>
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

  // Pixabay API data didn't come with dislikes, so this function sets dislikes at 1% 
  // of likes, with a chance of setting dislikes to 0 if video has less than 500 likes.
  const setDislikes = (likes) => {
    const randomlyZeroOrOne = Math.floor(Math.random() * 2) + 0
    const dislikes = Math.ceil(likes*.01)
      if (likes < 500) {
        return dislikes*randomlyZeroOrOne
      }
    return likes
  }

  const sendUserToVideoPage = (id, event) => {
    event.ctrlKey 
      ? window.open(`/video/id=#${id}`) 
      : window.location.href = `/video/id=#${id}`
  }



  const mapToHtml = (response) => {
    // console.log(state)
    // const oldState = {...state}
    // console.log(oldState)
    const responseAsHtml = response.map(vid => {
      return {
        video: 
        <div className={`${p}-video-wrapper`} key={vid.id}>
          <video 
            poster="https://i.imgur.com/Us5ckqm.jpg" 
            className={`${p}-video clickable`} 
            src={vid.videos.large.url} 
            controls autoPlay></video>
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
        author: vid.user,
        authorFollowers: vid.id      
      }
    })

    const newState = Object.assign(state, ...responseAsHtml)
    setState(newState)
    setState(({...state, loading: "false"}))
  } 

  // FETCHING DATA
  const fetchVideo = async (id) => {
    try {
      let response = await axios.get('https://pixabay.com/api/videos/', {
        params: {
          key: process.env.PIXABAY_API,
          id: id
        }
      })
    mapToHtml(response.data.hits)
  } catch (err) {
    history.push('404')
  }
}

  const fetchUpNextVideos = async (amount, category, order) => {
    let response = await axios.get('https://pixabay.com/api/videos/', {
      params: {
        key: process.env.PIXABAY_API,
        per_page: amount,
        category: category,
        editors_choice: true,
        order: order
      }
    })
    // map the response to html
    response = response.data.hits
    const responseAsHtml = response.map(vid => {
      return (
        <div className={`${p}-sidebar-grid-video-wrapper`} key={vid.id}>
          <div className={`${p}-sidebar-grid-video`}>
            <video 
            className={`${p}-video clickable`} 
            src={vid.videos.tiny.url} 
            onClick={(event) => sendUserToVideoPage(vid.id, event)} 
            >
            </video>
          </div>
          <h3 className={`${p}-sidebar-grid-video-title`}>{vid.tags}</h3>
          <p className={`${p}-sidebar-grid-video-author`}>{vid.user}</p>
          <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
        </div>
      )
    })
    setState(({...state, upNextVideos: responseAsHtml}))
}

  // COMPONENT MOUNTS
  useEffect(() => {
    console.log(state)
    const token = location.hash
    fetchVideo(token.replace('#', ''))
    fetchUpNextVideos(50, 'buildings')
    userClicksAddCommentField()

    function windowSize1000(mediaQuery1000) {
      const commentSection = document.querySelector('.videoPage-comment-section')
      const sidebar = document.querySelector('.videoPage-sidebar')
      const main = document.querySelector('.videoPage-main')
    
      if (mediaQuery1000.matches) { 
        commentSection.parentNode.insertBefore(sidebar, commentSection.nextSibling)
      } else {
        main.parentNode.insertBefore(sidebar, main.nextSibling)
      }
    }

    function windowSize600(mediaQuery600) {
      const descriptionBoxAuthor = document.querySelector('.videoPage-description-column-1-avatar-wrapper')
      const newSubscribers = document.querySelector('.videoPage-new-subscribers-wrapper')
      const descriptionBox = document.querySelector('.videoPage-description-box')
    
      if (mediaQuery600.matches) { 
        descriptionBoxAuthor.parentNode.insertBefore(newSubscribers, descriptionBoxAuthor.nextSibling)
      } else {
        descriptionBox.parentNode.insertBefore(newSubscribers, descriptionBox.nextSibling)
      }
    }

    const mediaQuery1000 = window.matchMedia("(max-width: 1000px)")
    const mediaQuery600 = window.matchMedia("(max-width: 600px)")
    mediaQuery1000.addListener(windowSize1000)
    mediaQuery600.addListener(windowSize600) 
    windowSize1000(mediaQuery1000)
    windowSize600(mediaQuery600)
  }, [])


  return (
    <div className={`${p}-page-wrapper`}>
      <main className={`${p}-main`}>
        {state.video}
        <div className={`${p}-description-box`}>  
          <div className={`${p}-description-column-1-avatar-wrapper`}>
            <div className="flex">
              <div className={`${p}-description-column-1-avatar`}></div>
              <div>
                <div className={`${p}-description-column-1-author`}>
                  { state.loading === "yes" ? "Placeholder" : state.author }
                </div>
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
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
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
          {state.comment}
          <div id='mostRecentComment' className={`${p}-comment-avatar`}></div>
          <div className={`${p}-comment-container`}>
            <h5 className="commentorName">LoveLyzKelly</h5>
            <div className="dateOfComment">6 months ago</div>
            <p className="comment">There may possible be a video tomorrow Sunday Japan time</p>
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
              View 10 Replies
            </div>
          </div>

          <div className={`${p}-comment-avatar`}></div>
          <div className={`${p}-comment-container`}>
            <h5 className="commentorName">MartynTheGreat</h5>
            <div className="dateOfComment">6h ago</div>
            <p className="comment">playing fortnite with ninja lol</p>
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
              View 28 Replies
            </div>
          </div>

          <div className={`${p}-comment-avatar`}></div>
          <div className={`${p}-comment-container`}>
            <h5 className="commentorName">Spammerdood</h5>
            <div className="dateOfComment">14h ago</div>
            <p className="comment">Hello my loves! I am extremely jet lagged week and traveling to Osaka for a couple days! There will be no videos so please wait until next week!</p>
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
              View 64 Replies
            </div>
          </div>

          <div className={`${p}-comment-avatar`}></div>
          <div className={`${p}-comment-container`}>
            <h5 className="commentorName">PewdiePie</h5>
            <div className="dateOfComment">1 days ago</div>
            <p className="comment">I'll be live streaming exclusively on <a href="">@OfficialDLive</a> starting April 14th! In my first stream I'll <a href="">#supportcreators</a> by donating up to $50,000 to up to 100 streamers. Follow me on DLive to increase the total donation amount!  
              <a href=""> https://dlive.tv/pewdiepie﻿</a></p>
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
              View 104 Replies
            </div>
          </div>

          <div className={`${p}-comment-avatar`}></div>
          <div className={`${p}-comment-container`}>
            <h5 className="commentorName">CaseyNeistat</h5>
            <div className="dateOfComment">3 days ago</div>
            <p className="comment">I'm not sure what was more fun, flying in the new first class suite on my way to Dubai or flying home with Triple H sitting behind me﻿</p>
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
              View 201 Replies
            </div>
          </div>

        <div className={`${p}-comment-avatar`}></div>
        <div className={`${p}-comment-container`}>
          <h5 className="commentorName">LoveLyzKelly</h5>
          <div className="dateOfComment">6 months ago</div>
          <p className="comment">There may possible be a video tomorrow Sunday Japan time</p>
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
            View 10 Replies
          </div>
        </div>

          <div className={`${p}-comment-avatar`}></div>
          <div className={`${p}-comment-container`}>
            <h5 className="commentorName">MartynTheGreat</h5>
            <div className="dateOfComment">6h ago</div>
            <p className="comment">playing fortnite with ninja lol</p>
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
              View 28 Replies
            </div>
          </div>

          <div className={`${p}-comment-avatar`}></div>
          <div className={`${p}-comment-container`}>
            <h5 className="commentorName">Spammerdood</h5>
            <div className="dateOfComment">14h ago</div>
            <p className="comment">Hello my loves! I am extremely jet lagged week and traveling to Osaka for a couple days! There will be no videos so please wait until next week!</p>
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
              View 64 Replies
            </div>
          </div>

          <div className={`${p}-comment-avatar`}></div>
          <div className={`${p}-comment-container`}>
            <h5 className="commentorName">PewdiePie</h5>
            <div className="dateOfComment">1 days ago</div>
            <p className="comment">I'll be live streaming exclusively on <a href="">@OfficialDLive</a> starting April 14th! In my first stream I'll <a href="">#supportcreators</a> by donating up to $50,000 to up to 100 streamers. Follow me on DLive to increase the total donation amount!  
              <a href=""> https://dlive.tv/pewdiepie﻿</a></p>
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
              View 104 Replies
            </div>
          </div>
        </div>
      </main>
      <aside className={`${p}-sidebar`}>
        <div className={`${p}-sidebar-text-top`}>
          <span className={`${p}-sidebar-text-upnext`}>Up next</span>
          <span className={`${p}-sidebar-text-autoplay`}>Autplay</span>
        </div>

        <div className={`${p}-sidebar-grid-wrapper`}>
        {state.upNextVideos}
        </div> 
      </aside>
    </div>
  )
}

export default VideoPage
