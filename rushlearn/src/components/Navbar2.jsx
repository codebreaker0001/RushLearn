import React from "react";

import '../App.css'

function NavbarUser(){
    return(
        <>
        
        <header>
        <nav>
            <div class="logo">
                <img src="logo.png" alt="Your Logo"/>
                <h1>Your Study App</h1>
            </div>
            <div class="profile">
                <img src="profile.png" alt="User Profile"/>
            </div>
        </nav>
    </header>
        </>
    )
}

export default NavbarUser;