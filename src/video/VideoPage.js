import React from 'react'

class VideoPage extends React.Component {
  state = {
    // p is short for prefix
    p: "videoPage" 
  }

  render({ p } = this.state) {
    return (
      <div className={`${p}-page-wrapper`}>
        <aside className={`${p}-sidebar`}>
          <span className={`${p}-sidebar-text-upnext`}></span>
          <span className={`${p}-sidebar-text-autoplay`}></span>
          <div className={`${p}-sidebar-grid-wrapper`}>
            <div className={`${p}-sidebar-grid-item`}></div>
            <div className={`${p}-sidebar-grid-item`}></div>
            <div className={`${p}-sidebar-grid-item`}></div>
          </div>
        </aside>

        <main>
          <div className={`${p}-video-wrapper`}>
            <div className={`${p}-video`}>
            </div>

            <div className={`${p}-video-info-wrapper`}>  
              <div className={`${p}-video-title-box`}>
                <h1>Title Of This Video</h1>
                <span className={`${p}-video-text-views`}>162,000 views</span>
                <span className={`${p}-video-text-date`}>Oct 6, 2019</span>
              </div>
              <div className={`${p}-video-options`}>
                <span>Share</span>
                <span>Save</span>
              </div>
            </div>
          </div>
          <div className={`${p}-description-box`}></div>
          <div className={`${p}-new-subsribers-wrapper`}>
            <h2>New Subscribers to DevPlaceholder</h2>
            <div className={`${p}-new-subsribers-grid`}>
              <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
              <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
              <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
              <div className={`${p}-new-subscribers-subscriber-avatar`}></div>
            </div>
          </div>
          <div className={`${p}-video-comments-wrapper`}>
            <span>1,392 comments</span>
            <span>Sort by</span>
            <div className={`${p}-add-new-comment`}></div>
            <div className={`${p}-comments`}></div>
          </div>
        </main>
      </div>
    )
  }
}

export default VideoPage
