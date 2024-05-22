import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import {BiUser} from 'react-icons/bi';
import {AiOutlineUnlock} from 'react-icons/ai';
import axios from 'axios';
import apiRequest from "../../lib/apiRequest.js";


const Register = () => {
  const [formData,setFormData] = useState({
    firstName:  '',
    lastName: '',
    email: '',
    password: '',
    birthDate: ''
  })
  const [errors,setErrors] = useState({

  })
  const [valid,setValid] = useState(true)
  const handleSubmit = (e) => {
    e.preventDefault();
    let isvalid = true
    let validationErrors = {}
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isvalid=false;
      validationErrors.email = 'Please enter a valid email address'
    }
    if (formData.password.length < 8 ) {
      isvalid=false;
      validationErrors.password = 'Password length at least 8 characters'
    }
    setErrors(validationErrors)
    setValid(isvalid)
    if(Object.keys(validationErrors).length === 0){
      alert("Registred Succefully");
      console.log(formData);
      apiRequest.post('/api/v1/auth/register',formData)
      .then(result => {
        console.log(result);
        window.location.href = '/';

    })
      .catch(err => console.log(err))
    }
  }
  return (
    <div>
        <div className='h-[100vh] flex justify-center items-center'>
      <div className=' border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter relative'>
        <h1 className='text-4xl text-primary font-bold text-center mb-6'>Register</h1>
        <form action="" onSubmit={handleSubmit}>
        <div className='flex gap-1'>
        <div className='relative my-4'>
          <input type="text" 
          className='block py-2.5 px-0 text-sm border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer bg-transparent' 
          placeholder=''
          name='firstName'
          required
          onChange={(event)=> setFormData({...formData,firstName: event.target.value})}
          />
          <label htmlFor="" className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] text-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 -z-10'>First Name</label>
        </div>
        <div className='relative my-4'>
          <input type="text" 
          className='block py-2.5 px-0 text-sm border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer bg-transparent' 
          placeholder=''
          name='lastName'
          required
          onChange={(event)=> setFormData({...formData,lastName: event.target.value})}
          />
          <label htmlFor="" className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] text-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 -z-10'>Last Name</label>
        </div>
        </div>
        <div className='relative my-4'>
          <input type="email" 
          className='block w-full py-2.5 px-0 text-sm border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer bg-transparent' 
          placeholder=''
          name='email'
          required
          onChange={(event)=> setFormData({...formData,email: event.target.value})}
          />
          <label htmlFor="" className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] text-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 -z-10'>Your Email </label>
          <BiUser className='absolute top-4 right-4'/>
        </div>
        {
          valid ? <></> :
          <span className='text-red-500'>{errors.email}</span>
        }
        <div className='relative my-4'>
          <input type="date" 
          className='block w-full py-2.5 px-0 text-sm text-light border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer bg-transparent pr-4' placeholder=''
          name='birthDate'
          required
          onChange={(event)=> setFormData({...formData,birthDate: event.target.value})}
          />
        </div>
        <div className='relative my-4'>
          <input type="password" 
          className='block w-full py-2.5 px-0 text-sm border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer bg-transparent' 
          placeholder=''
          name='password'
          required
          onChange={(event)=> setFormData({...formData,password: event.target.value})}
          />
          <label htmlFor="" className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] text-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 -z-10'>Your Password </label>
          <AiOutlineUnlock className='absolute top-4 right-4'/>
        </div>
        {
          valid ? <></> :
          <span className='text-red-500'>{errors.password}</span>
        }
        {/* <div className='relative my-4'>
          <input type="password" className='block w-full py-2.5 px-0 text-sm text-white border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-black focus:border-blue-600 peer bg-transparent' placeholder=''/>
          <label htmlFor="" className='absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] text-light peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 -z-10'>Confirm Password </label>
          <AiOutlineUnlock className='absolute top-4 right-4'/>
        </div> */}
        <button className='w-full mb-4 text-[18px] mt-6 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-2 transition-colors duration-300 ' type='submit'>Register</button>
        <div>
          <span className='m-4'>Already have an account? <Link to='/Authenticate' className='text-blue-500'>Login</Link></span>
        </div>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register