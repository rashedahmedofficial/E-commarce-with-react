import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Productdetails from './pages/Productdetails'
import Login from './pages/Login'
import Registration from './pages/Registration'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home/>}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/shop/:id" element={<Productdetails/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>
        
      </Routes>
   </BrowserRouter>
  )
}

export default App
