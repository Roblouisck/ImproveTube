import React, { lazy, Suspense } from 'react'
import Header from '../Header'
import VideoGrid from '../VideoGrid'

const HeaderMobile = lazy(() => import('../HeaderMobile'))
const FooterMobile = lazy(() => import('../FooterMobile'))

// The ActivityFeed is in VideoGrid
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