import React from 'react'
import Banner from '../components/Home/Banner'
import FeturedProduct from '../components/Home/Feturedproduct'
import Services from '../components/ui/Services'
import Vehicle from '../components/Home/Vehicle'
import Category from '../components/Home/Category'

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
