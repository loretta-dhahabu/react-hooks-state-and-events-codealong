import React, { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  function handleClick ()
  {
    // updating state directly is a no! e.g
    // isOn=!isOn

    //correct update of states is as below
    setIsOn((isOn)=> !isOn);
  }
  const color = isOn ? "red" : "white";

  return <button style={{background:color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
