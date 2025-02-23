
import React, { useEffect, useState } from "react";

function Delaymessage(){

    const [message, setMessage] = useState("")

    useEffect(() => {
        const delay = setTimeout(() => {
            setMessage("This message appear after 3 seconds")
        }, 3000)

        return () => clearTimeout(delay)

    }, [])
    return(
        <div>
              {message}
        </div>

    )
}

export default Delaymessage