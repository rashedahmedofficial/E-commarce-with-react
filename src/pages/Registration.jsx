import React from 'react'
import Input from '../components/ui/input'
import { Link } from 'react-router'
import Button from '../components/ui/button'

const Registration = () => {
  return (
   <div>
          <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex justify-center">Registation</h2>
        <form className="flex flex-col gap-4">
         <Input type='Full Name' label="Email " placeholder="Enter your Full Name"/>
         <Input type='email' label="Email " placeholder="Enter your Email"/>
         <Input  type='password' label="Password " placeholder="Enter your Password"/>
         
          <div className="flex items-center justify-between flex-wrap">
            
            <Link to="/login" href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</Link>
            <p className="text-gray-900 mt-4"> Alredy have been Account? <Link to="/login" className="text-sm text-blue-500 -200 hover:underline mt-4">Login</Link></p>
          </div>
          <Button>Create Account</Button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Registration
