import React from 'react'
import { thumbsUp, thumbsDown, arrowDrop } from '../public/svgs'

class VideoPage extends React.Component {
  state = {
    // p is short for prefix
    p: "videoPage" 
  }


  render({ p } = this.state) {
    return (
      <div className={`${p}-page-wrapper`}>
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

          </div>
        </aside>

        <main>
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
                <span className={`${p}-video-options-thumbs`}>ThumbsPlaceholder</span>
                <span className={`${p}-video-options-share`}>Share</span>
                <span className={`${p}-video-options-save`}>Save</span>
                <span className={`${p}-video-options-ellipses`}>...</span>
              </div>
            </div>
          </div>
          <div className={`${p}-description-box`}></div>
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
              <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
              <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
              <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
              <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
              <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            </div>


          <div className="videoPage-comment-section">
          <span className="videoPage-number-of-comments">1,392 comments</span>
          <span className="videoPage-sort-comments">Sort by</span>

          <div className="flex">
            <div className="videoPage-add-comment-avatar"></div>
            <div className="videoPage-add-comment">Add a public comment</div>
          </div>
          <hr className={`${p}-add-comment-hr`}/>
            <div className="videoPage-comment-avatar"></div>
            <div className="videoPage-comment-container">
              <h5 className="commentorName">LoveLyzKelly</h5>
              <div className="dateOfComment">6 months ago</div>
              <p className="comment">There may possible be a video tomorrow Sunday Japan time</p>
              <div className="thumbs">
                <span className="thumbsUpIcon">
                  {thumbsUp()}
                </span>
                <span className="thumbsDownIcon">
                  {thumbsDown()}
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

            <div className="avatarPlaceholder--comments"></div>
            <div className="videoPage-comment-container">
              <h5 className="commentorName">MartynTheGreat</h5>
              <div className="dateOfComment">6h ago</div>
              <p className="comment">playing fortnite with ninja lol</p>
              <div className="thumbs">
                <span className="thumbsUpIcon">
                  {thumbsUp()}
                </span>
                <span className="thumbsDownIcon">
                  {thumbsDown()}
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

            <div className="avatarPlaceholder--comments"></div>
            <div className="videoPage-comment-container">
              <h5 className="commentorName">Spammerdood</h5>
              <div className="dateOfComment">14h ago</div>
              <p className="comment">Hello my loves! I am extremely jet lagged this week and traveling to Osaka for a couple days! There will be no videos so please wait until next week!</p>
              <div className="thumbs">
                <span className="thumbsUpIcon">
                  {thumbsUp()}
                </span>
                <span className="thumbsDownIcon">
                  {thumbsDown()}
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

            <div className="avatarPlaceholder--comments"></div>
            <div className="videoPage-comment-container">
              <h5 className="commentorName">PewdiePie</h5>
              <div className="dateOfComment">1 days ago</div>
              <p className="comment">I'll be live streaming exclusively on <a href="">@OfficialDLive</a> starting April 14th! In my first stream I'll <a href="">#supportcreators</a> by donating up to $50,000 to up to 100 streamers. Follow me on DLive to increase the total donation amount!  
                <a href=""> https://dlive.tv/pewdiepie﻿</a></p>
              <div className="thumbs">
                <span className="thumbsUpIcon">
                  {thumbsUp()}
                </span>
                <span className="thumbsDownIcon">
                  {thumbsDown()}
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

            <div className="avatarPlaceholder--comments"></div>
            <div className="videoPage-comment-container">
              <h5 className="commentorName">CaseyNeistat</h5>
              <div className="dateOfComment">3 days ago</div>
              <p className="comment">I'm not sure what was more fun, flying in the new first class suite on my way to Dubai or flying home with Triple H sitting behind me﻿</p>
              <div className="thumbs">
                <span className="thumbsUpIcon">
                  {thumbsUp()}
                </span>
                <span className="thumbsDownIcon">
                  {thumbsDown()}
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

          <div className="avatarPlaceholder--comments"></div>
          <div className="videoPage-comment-container">
            <h5 className="commentorName">LoveLyzKelly</h5>
            <div className="dateOfComment">6 months ago</div>
            <p className="comment">There may possible be a video tomorrow Sunday Japan time</p>
            <div className="thumbs">
              <span className="thumbsUpIcon">
                {thumbsUp()}
              </span>
              <span className="thumbsDownIcon">
                {thumbsDown()}
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

            <div className="avatarPlaceholder--comments"></div>
            <div className="videoPage-comment-container">
              <h5 className="commentorName">MartynTheGreat</h5>
              <div className="dateOfComment">6h ago</div>
              <p className="comment">playing fortnite with ninja lol</p>
              <div className="thumbs">
                <span className="thumbsUpIcon">
                  {thumbsUp()}
                </span>
                <span className="thumbsDownIcon">
                  {thumbsDown()}
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

            <div className="avatarPlaceholder--comments"></div>
            <div className="videoPage-comment-container">
              <h5 className="commentorName">Spammerdood</h5>
              <div className="dateOfComment">14h ago</div>
              <p className="comment">Hello my loves! I am extremely jet lagged this week and traveling to Osaka for a couple days! There will be no videos so please wait until next week!</p>
              <div className="thumbs">
                <span className="thumbsUpIcon">
                  {thumbsUp()}
                </span>
                <span className="thumbsDownIcon">
                  {thumbsDown()}
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

            <div className="avatarPlaceholder--comments"></div>
            <div className="videoPage-comment-container">
              <h5 className="commentorName">PewdiePie</h5>
              <div className="dateOfComment">1 days ago</div>
              <p className="comment">I'll be live streaming exclusively on <a href="">@OfficialDLive</a> starting April 14th! In my first stream I'll <a href="">#supportcreators</a> by donating up to $50,000 to up to 100 streamers. Follow me on DLive to increase the total donation amount!  
                <a href=""> https://dlive.tv/pewdiepie﻿</a></p>
              <div className="thumbs">
                <span className="thumbsUpIcon">
                  {thumbsUp()}
                </span>
                <span className="thumbsDownIcon">
                  {thumbsDown()}
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
          </div>
        </div>
        </main>
      </div>
    )
  }
}

export default VideoPage
