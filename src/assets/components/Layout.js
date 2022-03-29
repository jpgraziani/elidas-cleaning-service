import React from 'react'
// import Navbar from './Navbar'
import Header from './header'
import Footer from './Footer'
import "normalize.css"
import '../../styles/main.css'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      {/* <Navbar />  */}
      {children}
      <Footer />
    </>
  )
}

export default Layout