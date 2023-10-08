import React from "react";

import '../App.css'
import './UserMain.css'
function UserMain(){
    return(
        <>
        <div className="container">
             <main>
        <div class="card">
            <img src="../../public/images/pencil.png" alt="Notes"/>
            <h2>Notes</h2>
        </div>
        <div class="card">
            <img src="../../public/images/assignment.png" alt="Assignments"/>
            <h2>Assignments</h2>
        </div>
        <div class="card">
            <img src="../../public/images/exam.png" alt="Past Year Papers"/>
            <h2>Past Year Papers</h2>
        </div>
        <div class="card">
            <img src="../../public/images/video.png" alt="Videos"/>
            <h2>Videos</h2>
        </div>
    </main>
    </div>
        </>
    )
}

export default UserMain;