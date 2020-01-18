import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, handleMenuClick }) => {
  return (
    <>
      <Header handleMenuClick={handleMenuClick} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
