
import React, { Component } from 'react';

export default class HighRisk extends Component {
   toggleKnow = ()=>{
   var acc = document.getElementsByClassName("accordion");
   var i;

   for (i = 0; i < acc.length; i++) {
     acc[i].addEventListener("click", function() {
       this.classList.toggle("active");
       var panel = this.nextElementSibling;
       if (panel.style.display === "block") {
         panel.style.display = "none";
       } else {
         panel.style.display = "block";
       }
     });
   }
 }
 render() {
   return <div className='high-risk'>
       <h1 className='head'>High Risk</h1>
       <h1>1. You're gonna be okay.</h1>
       <h1>2. You may be at high risk of becoming pregnant.</h1>

       <h1>
         Based on the information provided you are least likely to get pregnant at this time of your cycle.
         <button class="accordion" onClick={this.toggleKnow}>
           Know your Options:
         </button>
         <div class="panel">
           <p>
             <ul>
               <li>
                 <a href="https://www.planbonestep.com/taking-plan-b/" target="_blank" rel="noopener noreferrer">
                   Plan B
                 </a>{" "}
               </li>
               <li>
                 <a href="https://www.healthychildren.org/English/ages-stages/teen/dating-sex/Pages/Birth-Control-for-Sexually-Active-Teens.aspx" target="_blank" rel="noopener noreferrer">
                   Contraceptives
                 </a>
               </li>

               <li>
                 <a href="https://www.whattoexpect.com/pregnancy/week-by-week/" target="_blank" rel="noopener noreferrer">
                   What To Expect When You Are Expecting
                 </a>
               </li>

               <li>
                 <a href="https://www.plannedparenthood.org/" target="_blank" rel="noopener noreferrer">
                   Make An Appointment
                 </a>
               </li>
             </ul>
           </p>
         </div>
       </h1>
     </div>;
 }
}
