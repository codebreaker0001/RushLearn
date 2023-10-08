import React from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './SignUp.css';
import Navbar from '../components/Navbar';
export default function SignUp() {
  
  return (
    <div>
        <form action="#">
          <h1>Register</h1>
          <input type="number" max="99999999" placeholder='Enter Your Enrollment Number'/>
          <input type="password" placeholder='Enter Your password'/>
          <input type="password" placeholder='Confirm Your Password'/>
          <div className="btnbox">
            <Link to='/userProfile'>
              <button type='Submit' className="btn">Register</button>
            </Link>
          </div>
        </form>
    </div>
  )
}