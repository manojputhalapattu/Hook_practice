import React, { useState } from "react";

function App() {
  
const[count,setCount]=useState(1);
function TIME(){
  let time = new Date().toLocaleTimeString();
console.log(time);

setCount(time);
}
  return (
    <div className="container">
      <h1>{count}</h1>
      <button onClick={TIME}>Get Time</button>
    </div>
  );
}

export default App;
