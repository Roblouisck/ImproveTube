import React from 'react'

const VideoGrid = (props) => {
    return (
      <main className={`${props.page}--grid-background`}>
        <nav className={`${props.page}--grid-nav`}>
          <button className={`${props.page}--grid-nav-${props.titleOne}`}>{props.titleOne}</button>
          <button className={`${props.page}--grid-nav-${props.titleTwo}`}>{props.titleTwo}</button>
          <button className={`${props.page}--grid-nav-${props.titleThree}`}>{props.titleThree}</button>
          <button className={`${props.page}--grid-nav-${props.titleFour}`}>{props.titleFour}</button>
          <button className={`${props.page}--grid-nav-${props.titleFive}`}>{props.titleFive}</button>
          <button 
            className={`${props.page}--grid-nav-follow`}>FOLLOW
          </button>
        </nav>
        <hr className={`${props.page}--grid-hr-nav-grey`} />
        <hr className={`${props.page}--grid-hr-nav-black`} />

        <div className={`${props.page}--grid`} style={{marginTop: 'unset'}}>
          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>  

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div> 

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>  

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>
        </div>

        <div className={`${props.page}--grid-date-hr-container`}>
          <hr className={`${props.page}--grid-date-hr-grey-left`} /> 
          <h2 className={`${props.page}--grid-divider-date-text`}>YESTERDAY</h2>
          <hr className={`${props.page}--grid-date-hr-grey-right`} />
        </div>

        <div className={`${props.page}--grid`}>
          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>  

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div> 

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>  

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>

          <div className={`${props.page}--grid-content-wrapper`}>
            <div className={`${props.page}--grid-video`}></div>
            <div className={`${props.page}--grid-avatar-placeholder`}></div>
            <div className={`${props.page}--grid-title`}>Video Title That's A Little Longer</div>
            <div className={`${props.page}--grid-author`}>Author</div>
            <div className={`${props.page}--grid-views`}>612K 
              <span className={`${props.page}--grid-date`}> • 6 days ago</span>
            </div>
          </div>
        </div>
      </main>
    )
  }


export default VideoGrid