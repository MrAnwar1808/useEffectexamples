
import React, { useEffect, useState } from "react";

function Timeintervaldelay(){

    const [time, setTime] = useState(0)
    const [isActive, setIsactive] = useState(false)

    useEffect(() => {
        let interval

        if(isActive){
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 1)
            }, 500)
        }else{
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive])
    return(
        <div>
            <h1>Time: {time}s</h1>
            <button onClick={() => setIsactive(!isActive)}>
            {isActive ? 'Stop' : 'Start'}
            </button>

        </div>
    )
}

export default Timeintervaldelay