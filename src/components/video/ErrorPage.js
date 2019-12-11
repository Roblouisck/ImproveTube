import React, { useState } from 'react'
import toggleClass from '../../containers/toggleClass'
import Header from '../Header'
import HeaderMobile from '../HeaderMobile'
import FooterMobile from '../FooterMobile'

const ErrorPage = () => {
  const [p, setResource] = useState("videoPage")
  return (
    <div onConTextMenu="return false">
      <Header />
      <HeaderMobile />
      <div className="errorVidWrapper">
        <img className="errorVid" src="https://i.imgur.com/3vmjcjO.png"/>
      </div>
      <FooterMobile />
    </div>
  )
}

export default ErrorPage