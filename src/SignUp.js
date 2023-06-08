import React, { useState } from 'react'
import "./Login.css";
import {NavLink} from "react-router-dom"


function SignUp() {

    // const [email, setEmail]  = useState("")
    // const [password, setPassword]  = useState("")
    let sche = {
      name : "",
      email : "",
      password : ""
    }
    const [input, setInput] = useState(sche)
    const [data, setData]  = useState([]);
    
   



    const getData = (e) =>{
   console.log(e.target.value);

   const {value,name} = e.target;
    // console.log("Data",value,name);
    setInput(()=>{
        return{
            ...input,
            [name]:value
        }
    })
 }

 const addData = (e)=>{
   e.preventDefault()
   
   const {name,email,password} = input
   if(name === "" ){
       alert("name invalid");
       
    }else if(email === ""){
        alert("invalid email");
      
    }else if(!email.includes("@")){
      alert("please enter valid email ")
    }else if(password === ""){
        alert("password invalid");
        
    }else if(password.length <= 5){
        alert("password shouble be 5 word")
    }else{
        console.log("sign succesfully ");
       localStorage.setItem("data" ,JSON.stringify([...data,input]))
  }
 }
 



  return (
    <>
     <div className="container-login">
        <h5>Sign Up Form</h5>
        <div className="semi-container">
          <div className="login-con">
            <input  onChange={getData} name='name'  className="login" placeholder="user name " type='text'  />
          </div>
          <div>
            <input  onChange={getData}  name='email' className="login"  placeholder="email" type='email' />
          </div>
          <div>
            <input   onChange={getData} name='password'  className="login"  placeholder="password" type='password'  />
          </div>

          <div>
            {/* <button>Login</button> */}
            <button className='btn'  onClick={addData} ><NavLink to="/Login" >Sign up </NavLink></button>
          </div>
          {/* <div> */}
          {/* </div> */}

        </div>
      </div>
    </>
  )
}

export default SignUp