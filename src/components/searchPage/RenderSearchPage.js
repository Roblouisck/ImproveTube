import React from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import SearchPage from './SearchPage'
import FooterMobile from '../FooterMobile'
import ActivityFeed from '../ActivityFeed'


const RenderSearchPage = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <SearchPage />
      <ActivityFeed page={'search'} />
      <FooterMobile />
    </div>
  )
}

export default RenderSearchPage