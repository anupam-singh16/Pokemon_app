import React, { useEffect, useState } from 'react'

function ScreenSize() {

 const [width,setWidth] = useState(window.screen.width)
 for(let a=1; a<=100; a++){
    for(let b =a ; b < a+10; b++){
       console.log("nested",b);
    }
  }
 const size = () =>{
    console.log(window.innerWidth);
    setWidth(window.innerWidth)
 }
 useEffect(()=>{
      window.addEventListener("resize",size)
      console.log("addd");
      return () =>{
        window.removeEventListener('resize',size);
        console.log("remove");
      
    }
  
    })
  

  
    return (
    <div>ScreenSize
    <h1>{width}</h1>
    </div>
  )
}

export default ScreenSize