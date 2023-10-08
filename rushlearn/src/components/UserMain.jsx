import React from "react";

import '../App.css'

function UserMain(){
    return(
        <>
             <main>
        <div class="card">
            <img src="notes.jpg" alt="Notes"/>
            <h2>Notes</h2>
        </div>
        <div class="card">
            <img src="assignments.jpg" alt="Assignments"/>
            <h2>Assignments</h2>
        </div>
        <div class="card">
            <img src="papers.jpg" alt="Past Year Papers"/>
            <h2>Past Year Papers</h2>
        </div>
        <div class="card">
            <img src="videos.jpg" alt="Videos"/>
            <h2>Videos</h2>
        </div>
    </main>
        </>
    )
}

export default UserMain;