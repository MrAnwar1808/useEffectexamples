
import React from "react";
import Delaymessage from "../Useeffect/Delaymessage";
import Timeintervaldelay from "../Useeffect/Timeinterval";
import Countdown from "../Useeffect/Countdown";

function Mainpage(){
    return(
        <div>
          <Delaymessage />
          <Timeintervaldelay />
          <Countdown />
        </div>
    )
}

export default Mainpage