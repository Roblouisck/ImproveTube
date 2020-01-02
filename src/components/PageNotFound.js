import React, { useState } from 'react'
import { pageNotFound } from './svgs'
import Header from './Header'
import HeaderMobile from './HeaderMobile'
import FooterMobile from './FooterMobile'

const PageNotFound = () => {
  const [p, setprefix] = useState('pageNotFound')

  return (
    <div>
      <Header />
      <HeaderMobile />
      <div className={`${p}-container`}>
        <div className={`${p}-svg`}>{pageNotFound()}</div>
        <div className={`${p}-text no-select`}>Page not found</div>
      </div>
      <FooterMobile />
    </div>
  )
}

export default PageNotFound