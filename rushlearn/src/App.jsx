import React from 'react'
import SignIn from './pages/SignIn'
import NavbarUser from '/Users/vaibhavsingh/RushLearn/rushlearn/src/components/Navbar2.jsx'
import './App.css'
import UserMain from './components/UserMain'
import Footer from './components/footer'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      {/* <SignIn/> */}
      {/* <NavbarUser/> */}
      <Navbar/>
      <UserMain/>
      <Footer/>
    </div>
  
  )
}
