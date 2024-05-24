import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUnlock } from 'react-icons/ai';
import axios from 'axios';
import apiRequest from "../../lib/apiRequest.js";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const response = await axios.post('/api/v1/auth/authenticate', formData);
      const accessToken = response.data.token;
      localStorage.setItem('accessToken', accessToken); 
      console.log('logged in:', accessToken); // Log the access token
      window.location.href = '/';
    } catch (error) {
      console.error('Login failed:', error.response.data);
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='border border-gray-300 rounded-md p-8 shadow-lg'>
        <h1 className='text-4xl text-primary font-bold text-center mb-6'>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className='relative my-4'>
            <input
              type="email"
              className='block w-72 py-2.5 px-0 text-sm border-b-2 border-gray-300 focus:border-blue-500'
              placeholder='Your Email'
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <BiUser className='absolute top-4 right-4 text-gray-500' />
          </div>
          <div className='relative my-4'>
            <input
              type="password"
              className='block w-72 py-2.5 px-0 text-sm border-b-2 border-gray-300 focus:border-blue-500'
              placeholder='Your Password'
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <AiOutlineUnlock className='absolute top-4 right-4 text-gray-500' />
          </div>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <input type="checkbox" name="remember" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link to='' className='text-blue-500 text-sm'>Forgot Password?</Link>
          </div>
          {error && <p className="text-red-500 text-sm my-2">{error}</p>} {/* Display error message */}
          <button
            className='w-full mb-4 text-[18px] mt-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-2 transition-colors duration-300'
            type='submit'
          >
            Login
          </button>
          <div>
            <span className='m-4'>
              New Here? <Link to='/Register' className='text-blue-500 text-sm'>Create an Account</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
