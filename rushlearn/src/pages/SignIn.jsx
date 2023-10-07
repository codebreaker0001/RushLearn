import React from 'react'
import './SignIn.css';
import Navbar from '../components/Navbar'
import SmartText from '../components/SmartText';
export default function SignIn() {
  return (
    <div>
        <Navbar/>
        <SmartText/>
        <form action="#">
          <h1>Who Are You?</h1>
          <input type="number" maxLength="8" placeholder='Enter Your Enrollment Number'/>
          <input type="password" placeholder='Enter Your password'/>
          <div className="btnbox">
              <button type='Submit' className="btn">Submit </button>
              <button className="btn btnn">Sign In with Channeli</button>
          </div>
        </form>
    </div>
  )
}
