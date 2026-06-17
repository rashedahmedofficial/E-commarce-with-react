import React from 'react'
import Banner from '../components/Home/Banner'
import Category from '../components/Home/category'
import FeturedProduct from '../components/Home/Feturedproduct'
import Services from '../components/ui/Services'
import Vehicle from '../components/Home/Vehicle'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Vehicle/>
      <FeturedProduct/>
      <Services/>
    </div>
  )
}

export default Home
