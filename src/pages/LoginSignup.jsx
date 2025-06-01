import React from 'react'
import './css/LoginSignup.css'
import { useState } from 'react';

function LoginSignup() {

  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="auth-container">
    <div className="auth-box">
      <h2 className="auth-title">
        {isLogin ? "Login to Your Account" : "Create an Account"}
      </h2>

      <form>
        {!isLogin && (
          <input
            type="text"
            placeholder="Full Name"
            className="auth-input"
          />
        )}

        <input
          type="email"
          placeholder="Email Address"
          className="auth-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="auth-input"
        />

        <button type="submit" className="auth-button">
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p className="auth-toggle">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <button onClick={() => setIsLogin(!isLogin)} className="auth-link">
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </p>
    </div>
  </div>
  )
}

export default LoginSignup
