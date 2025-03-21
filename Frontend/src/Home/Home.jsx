import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Freebook from '../Components/Freebook'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
    <Navbar></Navbar>
        <Banner></Banner>
        <Freebook></Freebook>
        <Footer></Footer>
    </>
  )
}

export default Home