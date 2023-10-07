import React from 'react'
import './Navbar.css';

export default function Navbar() {
  return (
    <div>
        <div className="navContainer">
            <div className="left">
                <div className="logo"></div>
                <div className="line"></div>
                <div className="name"><span className='rush'>Rush</span><span>Learn</span></div>
            </div>
            <div className="iitrlogo right"></div>
        </div>
    </div>
  )
}
