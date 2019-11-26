import React from 'react'
import toggleClass from '../containers/toggleClass'
import { thumbsUp, thumbsDown, arrowDrop } from '../svgs'


class VideoPage extends React.Component {
  state = {
    // p is short for prefix
    p: "videoPage" 
  }

  componentDidMount = () => {
    this.inputFocus()

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
  }

  inputFocus = () => {
    console.log('inputFocus ra')
    const addUserComment = document.querySelector('.videoPage-add-comment')
    const underlineAnimated = document.querySelector('.videoPage-add-comment-underline-animated')

    addUserComment.addEventListener('focus', () => {
      underlineAnimated.classList.add('show')
    })
    addUserComment.addEventListener('blur', () => {
      underlineAnimated.classList.remove('show')
    })
  }

  render({ p } = this.state) {
    return (
      <div className={`${p}-page-wrapper`}>
        <main className={`${p}-main`}>
          <div className={`${p}-video-wrapper`}>
            <div className={`${p}-video`}>
            </div>

            <div className={`${p}-video-info-wrapper`}>  
              <div className={`${p}-video-title-box`}>
                <h1 className={`${p}-video-title`}>Bill Gates remembers his early programming career</h1>
                <span className={`${p}-video-views`}>162,000 views</span>
                <span className={`${p}-video-date`}>Oct 6, 2019</span>
              </div>
              <div className={`${p}-video-options`}>
                <div className="thumbs">
                  <div className={`${p}-video-options-thumbsUp`}>{thumbsUp(20)} &nbsp; 
                    <span className={`${p}-video-options-thumbsUp-text`}>12k</span>
                  </div>
                  <div className={`${p}-video-options-thumbsDown`}>{thumbsDown(20)} &nbsp; 
                    <span className={`${p}-video-options-thumbsDown-text`}>71</span>
                  </div>
                  <div className={`${p}-video-options-likebar`}></div>
                </div>
                <span className={`${p}-video-options-share`}>Share</span>
                <span className={`${p}-video-options-save`}>Save</span>
                <span className={`${p}-video-options-ellipses`}>...</span>
              </div>
            </div>
          </div>
          <div className={`${p}-description-box`}>  
            <div className={`${p}-description-column-1-avatar-wrapper`}>
              <div className="flex">
                <div className={`${p}-description-column-1-avatar`}></div>
                <div>
                  <div className={`${p}-description-column-1-author`}>DevPlaceholder</div>
                  <div className={`${p}-description-column-1-followers`}>356k Followers</div>
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
            
          <div className={`${p}-suggested-videos-mobile`}>
          </div>
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
            <input className={`${p}-add-comment`} placeholder="Add a public comment" />
            <hr className={`${p}-add-comment-underline`}/>
            <hr className={`${p}-add-comment-underline-animated`}/>
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
              <div className="viewComment">
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
              <div className="viewComment">
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
              <p className="comment">Hello my loves! I am extremely jet lagged this week and traveling to Osaka for a couple days! There will be no videos so please wait until next week!</p>
              <div className="thumbs">
                <span className="thumbsUpIcon">
                  {thumbsUp(16)}
                </span>
                <span className="thumbsDownIcon">
                  {thumbsDown(16)}
                </span>
              </div>
              <p className="replyText">REPLY</p>
              <div className="viewComment">
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
              <div className="viewComment">
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
              <div className="viewComment">
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
            <div className="viewComment">
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
              <div className="viewComment">
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
              <p className="comment">Hello my loves! I am extremely jet lagged this week and traveling to Osaka for a couple days! There will be no videos so please wait until next week!</p>
              <div className="thumbs">
                <span className="thumbsUpIcon">
                  {thumbsUp(16)}
                </span>
                <span className="thumbsDownIcon">
                  {thumbsDown(16)}
                </span>
              </div>
              <p className="replyText">REPLY</p>
              <div className="viewComment">
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
              <div className="viewComment">
                <span className="arrowDrop">
                  {arrowDrop()}
                </span>
                View 104 Replies
              </div>
            </div>
          </div></main>
        <aside className={`${p}-sidebar`}>
          <div className={`${p}-sidebar-text-top`}>
            <span className={`${p}-sidebar-text-upnext`}>Up next</span>
            <span className={`${p}-sidebar-text-autoplay`}>Autplay</span>
          </div>

          <div className={`${p}-sidebar-grid-wrapper`}>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>
            
            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

            <div className={`${p}-sidebar-grid-video-wrapper`}>
              <div className={`${p}-sidebar-grid-video`}></div>
              <h3 className={`${p}-sidebar-grid-video-title`}>Noel Gallagher Looks Back in Anger at Spicy Wings</h3>
              <p className={`${p}-sidebar-grid-video-author`}>First We Feast</p>
              <p className={`${p}-sidebar-grid-video-recommended-text`}>Recommended for you</p>
            </div>

          </div> 
        </aside>
      </div>
    )
  }
}

export default VideoPage
