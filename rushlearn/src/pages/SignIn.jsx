import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './SignIn.css';
import Navbar from '../components/Navbar';
export default function SignIn() {
  
  return ( 

    <div>
        <form action="/userProfile">
          <h1>Who Are You?</h1>
          <input type="number" max="99999999" placeholder='Enter Your Enrollment Number'/>
          <input type="password" placeholder='Enter Your password'/>
          <div className="btnbox">
              <button type='Submit' className="btn">Submit </button>
              <Link to='/signUp'><button id ='signIn' className="btn btnn">SignUp</button></Link>
          </div>
        </form>
        
    </div>
    
  )
}
