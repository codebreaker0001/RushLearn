import React from 'react'
import SignIn from './pages/SignIn'
import './App.css'
import UserMain from './components/UserMain'
import Footer from './components/footer'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      {/* <SignIn/> */}
      <Navbar/>
      <UserMain/>
      <Footer/>
    </div>
  
  )
}
