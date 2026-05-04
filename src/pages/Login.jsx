import React, { useState } from 'react'
import Input from '../components/ui/input'
import { Link, useNavigate } from 'react-router'
import Button from '../components/ui/button'
import { useLoginMutation } from '../services/api'

const Login = () => {
  const navigate = useNavigate();

  const [login] = useLoginMutation();
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const log = await login(loginData).unwrap();

      localStorage.setItem("user", JSON.stringify(log));

      navigate("/");
      window.location.reload();
    } catch (err) {
      alert(err?.data?.message || "Login failed");
    }
  };

  return (
    <div>
       <div>
          <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-md bg-white border-b-2-[#6367FF] rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
         <Input type='email' label="Email " placeholder="Enter your Email"  onChange={(e) =>
                setLoginData((prev) => ({ ...prev, username: e.target.value }))  } />
         <Input  type='password' label="Password " placeholder="Enter your Password" onChange={(e) =>
                setLoginData((prev) => ({ ...prev, password: e.target.value })) } />
         
          <div className="flex items-center justify-between flex-wrap">
            
            <a href="#" className="text-sm text-blue-500 hover:underline mb-0.5">Forgot password?</a>
            <p className="text-gray-900 mt-4"> Don't have an account? <Link to="/Registration"className="text-sm text-blue-500 -200 hover:underline mt-4">Register</Link></p>
          </div>
          <Button>Create Account</Button>
        </form>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Login
