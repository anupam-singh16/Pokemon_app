import React, { useState } from 'react'

function Crud1() {

let time =  new Date().toLocaleTimeString()



const [currTimem,setCurrTime] = useState(time)

const updateTime =()=>{
let time =  new Date().toLocaleTimeString()
setCurrTime(time)
}

setInterval(updateTime,1000);
return (

    <div><h1>{currTimem}</h1>
    
    {/* <button onClick={updateTime} >get time</button> */}
    </div>
  )
}

export default Crud1