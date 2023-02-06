import React, { useState } from "react";
import "../../styles/index.css"

const TrafficLight = () => {

const [redOn, setRedOn] = useState (false);
const [orangeOn, setOrangeOn] = useState (false);
const [greenOn, setGreenOn] = useState (false);

let colors = ["redOn", "orangeOn", "greenOn" ]

const switchRedOn = () => {
setRedOn(false);
setOrangeOn(true);
setGreenOn(true);
}

const switchOrangeOn = () => {
setOrangeOn(false);
setGreenOn(true);
setRedOn(true);
}

const switchGreenOn = () => {
setGreenOn(false);
setRedOn(true);
setOrangeOn(true);
}


return (
<div className="itemAligner">
    <div className="trafficLightFrame">
        <div className={redOn ? 'redOff' : 'redOn'} onClick={switchRedOn}></div>
        <div className={orangeOn ? 'orangeOff' : 'orangeOn'} onClick={switchOrangeOn}></div>
        <div className={greenOn ? 'greenOff' : 'greenOn'} onClick={switchGreenOn}></div>
        
    </div>
</div>

);

}



export default TrafficLight;



