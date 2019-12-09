import React from 'react'
import { thumbsUp, thumbsDown, arrowDrop } from './svgs'

const ActivityFeed = ({ page } = this.props) => {
  return (
    <aside className="activityFeedContainer">
      <h1 className={`${page}--activity-feed-title`}>Activity Feed</h1>
      <hr className="home--activityfeed-hr" />
      <div className="commentSection--activityfeed">

        <div className="avatarPlaceholder--comments"></div>
        <div className="commentContainer">
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

        <div className="avatarPlaceholder--comments"></div>
        <div className="commentContainer">
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

        <div className="avatarPlaceholder--comments"></div>
        <div className="commentContainer">
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

        <div className="avatarPlaceholder--comments"></div>
        <div className="commentContainer">
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

        <div className="avatarPlaceholder--comments"></div>
        <div className="commentContainer">
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
      <div className="avatarPlaceholder--comments"></div>
        <div className="commentContainer">
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
        <div className="avatarPlaceholder--comments"></div>
        <div className="commentContainer">
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
        <div className="avatarPlaceholder--comments"></div>
        <div className="commentContainer">
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
        <div className="avatarPlaceholder--comments"></div>
        <div className="commentContainer">
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
      </div>
    </aside>
  )
}
export default ActivityFeed