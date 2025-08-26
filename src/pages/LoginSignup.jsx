import React from 'react'
import './LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign up</h1>
        <div className="loginsignup-fields">
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='email address'/>
          <input type='password' placeholder='password'/>
          
        </div>
        <button>continue</button>
        <p className='loginsignup-login'>Already have an account<span> login here</span></p>
        <div className="loginsignup-agree">
          <input type='checkbox' name=''  id= '' />
          <p>By counting, i agree to the trem of use and privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
