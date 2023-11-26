// Task2: array

//  update index, show pass in green and fail in red
import React from "react";
import { useState } from "react";
import "./task2.css" 
export default function Task2() {
   let [marks, setMarks] = useState([
     90, 49, 80, 51, 48
   ]);

   const increase = (key) => {
    let copyMarks = [...marks];
    copyMarks[key] += 1;
    setMarks(copyMarks)
   }
   const decrease = (key) => {
    let copyMarks = [...marks];
    copyMarks[key] -= 1;
    setMarks(copyMarks)
   }
     return (
       <div className="containers my-5">
      <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <span className="navbar-brand mb-0 h1">
              Status:: #Passing: {marks.filter(m =>m >= 50).length}, #Failing: {marks.filter(m=>m<50).length} </span>
          </div>
        </nav>

       {marks.map((m, i) => {
         
         return (
           <div key={i}>
           <button className="plus" onClick={(e)=> decrease(i)} > - </button> <b style={{color: m>=50 ? 'green' : 'red'}}> {m}</b> <button className="minus" onClick={(e) => increase(i)} > + </button>
           </div>
         )
        
       }
       )
     }
     </div>
   );
 }
