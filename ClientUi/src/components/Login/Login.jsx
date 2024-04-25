import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

import video from '/assets/video.mp4'
import logo from '/assets/logo2.png'

const Login = () => {
  return (
    <div className='loginPage flex'>
        <div className='container flex'>
            <div className='videoDiv'>
                <video src={video} autoPlay muted loop></video>
                <div className='textDiv'>
                  <h2 className='title'>Title just for trying </h2>
                  <p>explore and blow ur mind etc etc ..</p>
                </div>

                <div className='footerDiv flex'>
                  <span className='text'>Don't have an account already?</span>   
                  <Link to={'/SignUp'}>
                   <button className="btn">Sign Up</button>
                  </Link>
                </div>

            </div>

            <div className='formDiv flex'>
                <div className='headerDiv'>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login