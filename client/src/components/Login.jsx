import React from 'react'
import logo from '../images/logo.png'
import './Login.css'

function Login() {
  return (
    <>
    <div class="page01">
        <div class="logo-area">
            <img className="logo" src={logo} alt=""/>
        </div>
        <div class="hr"></div>
        <div class="login-box">
            <p class="caption">Create an account</p>
            <button className="google-signup">
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google Logo" />
                Sign Up with Google
            </button>
            <button className="create-account-btn">Create an Account</button>
             <p className="signin-text">
             Already have an account? 
             <span className="signin-link">Sign In</span>  
            </p>
        </div>
        <div class="footer">
           <p >@ Reachinbox 2024. All rights are reserved.</p>
        </div>
    </div>
    </>
  )
}

export default Login