import React, { lazy, Suspense, useEffect } from 'react'
import Header from '../Header'
import ActivityFeed from '../ActivityFeed'
import VideoGrid from '../VideoGrid'
import { source } from '../../containers/api'

const HeaderMobile = lazy(() => import('../HeaderMobile'))
const FooterMobile = lazy(() => import('../FooterMobile'))

const RenderHomepage = () => {
  return (
    <div className="homepage-background">
      <Header />
      <Suspense>
        <HeaderMobile />
      </Suspense>
      <VideoGrid
        titleOne={'recommended'} 
        titleTwo={'following'} 
        titleThree={'subscriptions'} 
        page={'home'} />
      <Suspense>
        <FooterMobile page={'home'} />
      </Suspense>
    </div>
  )
}

export default RenderHomepage