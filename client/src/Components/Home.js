import React from 'react'
import '../css/home.css'

const loginwithgoogle = ()=>{
  window.open("http://localhost:6005/auth/google/callback","_self")
}

const Home = () => {
  return (
    <>
      <div style={{textAlign:"center"}}>
      <div class="container">
        <h1 class="animate__animated animate__fadeIn">Document Summarization</h1>
        <div class="summarization-icon"></div>
        <p>Welcome to our document summarization platform. Summarize your documents effortlessly!</p>
        <a class="login-button animate__animated animate__bounceInLeft" onClick={loginwithgoogle}>Sign In</a>
            </div>
        
      </div>
    </>
  )
}

export default Home