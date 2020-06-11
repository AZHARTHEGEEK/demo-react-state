import React, { useState } from 'react';
import './Room.css'

function Room() {

    let [isLitON, setLitON] = useState(true);
    let [tempF , setTempF] = useState(72);

    return (
    <div className={`room ${isLitON? "ON": "OFF"}`}> 
        &nbsp;&nbsp;&nbsp;<h1>Room Light is {isLitON? "ON": "OFF"}</h1>
        <br/>
        &nbsp;&nbsp;&nbsp;<button className='button' onClick={()=> setLitON(true) } >ON</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;<button  className='button' onClick={()=> setLitON(false) } >OFF</button>
        <br/>
        &nbsp;&nbsp;&nbsp;<h1>Room Current Temperature is: {tempF}</h1>
        <br/>
        &nbsp;&nbsp;&nbsp;<button  className='button' title="Increase Temperature" onClick={()=> setTempF(++tempF)}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;<button  className='button' title="Decrease Temperature" onClick={()=> setTempF(--tempF)}>-</button>
        <h5>Boot Camp 2020 By Zia Khan & Team</h5>
        <a href="https://github.com/AZHARTHEGEEK">Visit My GitHub Account</a>
    </div>
    );
}
export default Room;