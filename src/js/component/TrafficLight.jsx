import React, { useState } from "react";
import "../../styles/index.css"

const TrafficLight = () => {

const [redOn, setRedOn] = useState (false);
const [orangeOn, setOrangeOn] = useState (false);
const [greenOn, setGreenOn] = useState (false);

let colors = ["redOn", "orangeOn", "greenOn" ]

const switchRedOn = () => {
setRedOn(!redOn);
}

const switchOrangeOn = () => {
setOrangeOn(!orangeOn);
}

const switchGreenOn = () => {
setGreenOn(!greenOn);
}

console.log("hola pringao");

return (
<div className="itemAligner">
    <div className="trafficLightFrame">
        <div className={redOn ? 'redOff' : 'redOn'} onClick={switchRedOn}></div>
        <div className={orangeOn ? 'orangeOff' : 'orangeOn'} onClick={switchOrangeOn}></div>
        <div className={greenOn ? 'greenOff' : 'greenOn'} onClick={switchGreenOn}></div>
        <p>hello</p>
    </div>
</div>

);

}



export default TrafficLight;



// return (
// <div className="itemAligner">
//     <div className="trafficLightFrame">
//         <div className={`redOff ${redOn ? "redOff" : "redOn"}`} onClick={() => setRedOn(!redOn)}></div>
//         <div className="orangeOff" onClick={() => encendido()}></div>
//         <div className="greenOff" onClick={() => encendido()}></div>
//         <p>hello</p>
//     </div>
// </div>

// );




//   const [isActive, setActive] = useState(false);
//   const toggleClass = () => {
//     setActive(!isActive);
//   };
//   return (
//     <div 
//       className={isActive ? 'your_className': null} 
//       onClick={toggleClass} 
//     >
//       <p>my text</p>
//     </div>
//    );
