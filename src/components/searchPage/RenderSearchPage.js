import React from 'react'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import SearchPage from './SearchPage'
import FooterMobile from '../FooterMobile'


const RenderSearchPage = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <SearchPage />
      <FooterMobile />
    </div>
  )
}

export default RenderSearchPage