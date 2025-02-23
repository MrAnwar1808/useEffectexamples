
import React, { useEffect, useState } from "react";

function Countdown(){

        const [time, setTime] = useState(10); 

        useEffect(() => {
        if (time === 0) return; 

        const intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
        }, 1000); 

        return () => clearInterval(intervalId);
        }, [time]); 
               
    return(
        <div>
            <h1>Countdown: {time}s</h1>
            {time === 0 && <p>Time's up!</p>}

        </div>
    )
}

export default Countdown