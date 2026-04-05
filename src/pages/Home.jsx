import React from 'react'
import Banner from '../components/Home/Banner'
import Category from '../components/Home/category'
import Flashdeal from '../components/Home/Flashdeal'
import FeturedProduct from '../components/Home/Feturedproduct'
import Services from '../components/ui/Services'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Flashdeal/>
      <FeturedProduct/>
      <Services/>
    </div>
  )
}

export default Home
