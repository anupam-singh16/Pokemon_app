import React,{useState} from "react";
import "./Login.css";
import {NavLink, useNavigate} from "react-router-dom"

function Login() {

    const history  = useNavigate()

    const [input, setInput] = useState({
        email : "",
        password : ""
    })
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
   
  const getUser = localStorage.getItem("data");
  console.log("get user",getUser);

   const {email,password} = input
   if(email === ""){
        alert("invalid email1");
      
    }else if(!email.includes("@")){
        alert("please enter valid email ")
      
    }else if(password === ""){
        alert("password invalid");
        
    }else if(password.length <= 5){
        alert("password shouble be 5 word")
    }else{
        if(getUser && getUser.length){
            const userData = JSON.parse(getUser);
            // console.log("userDat",userData);
            const userLogin = userData.filter((element)=>{
             return element.email === email && element.password === password
            })
            //    console.log("userLogin ",userLogin);  
            if(userLogin.length !== 0){
                alert("invalid details 1")
            } else{
                alert("user login successfuly");
                history("/Todo")
            }    
        }
    
    }
 }


  return (
    <>
      <div className="container-login">
        <h5>Login Form</h5>
        <div className="semi-container">
          <div className="login-con">
            <input onChange={getData} name="login"  className="login" placeholder="email" />
          </div>
          <div>
            <input type="password"  className="login" onChange={getData} name="password"  placeholder="password" />
          </div>

          <div>
            <button  onClick={addData}  className="btn" >Login</button>
            <button className="btn" ><NavLink to="/SignUp" >Sign up </NavLink></button>
             <button className="btn"  ><NavLink to="/" >Home</NavLink></button>
          </div>
          {/* <div> */}
          {/* </div> */}

        </div>
      </div>
    </>
  );
}

export default Login;
