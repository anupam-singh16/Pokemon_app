import React, { useEffect, useState } from 'react'

function Crud() {

 const [apiData , setApiData]  =  useState([]);

 const [name , setName] = useState("")
 const [title, setTitle] = useState("") 
//  const [uname,setUname] = useState("")
//  const [utitle, setUtitle] = useState("");
 const [id,setId] = useState(null)
 

 console.log(apiData);

 let objData = {name,title}
 
function  apiCall() {
        let apiKey = "http://localhost:5000/service"
        fetch(apiKey).then((data)=>{
          return data.json()
        }).then((actData)=>{
           setApiData(actData);
              // let newData = apiData[0].name
              // let user =
          //  setName(actData[0].name);
          //  setTitle(actData[0].title)
          //  setId(actData[0].id)
          //  setUname(actData[0].name);
          //  setUtitle(actData[0].title)
          localStorage.setItem("new name" , "api is running ")
        })
    }

    useEffect(()=>{
        apiCall()
      },[])
      
     function saveUser() {
        fetch("http://localhost:5000/api/service",{
            method : "POST",
            headers:{
                "Accept" : "application/json",
                "Content-Type" : "application/json"
            },
            body:JSON.stringify(objData)
               
            
        }).then((result)=>{
            console.log("result",result);
            apiCall()
        });
        sessionStorage.setItem(name,title)
        
        localStorage.setItem(name,title)
        setName("");
        setTitle("");
     }


       const  selectUser = (id) =>{
        let item = apiData[id-1]
        // console.log(apiData[id-1]);
        setName(item.name)
        setId(item.id)
        setTitle(item.title)
        // setUname(item.name);
        // setUtitle(item.title)
       }


    const  updateData =()=>{
        let userData = {name,title,id};
       fetch(`http://localhost:5000/update/service/${id}`,{
         method : "PUT",
         headers:{
          "Accept" : "application/json",
          "Content-Type" : "application/json"
         },
         body :  JSON.stringify(userData)
         
       }).then((newData)=>{
           return newData.json()
       }).then((actData)=>{
          console.log("dataaaaa",actData.data); 
         setName("");
         setTitle("")
          apiCall() 
          localStorage.setItem(name , title)
       })
    }

 const deleteAPi = (id) =>{
    // console.log(id); 
   fetch(`http://localhost:5000/api/service/${id}`,{
          method : "DELETE"
     }).then((data)=>{
       return data.json()
      }).then((response)=>{
        console.log("response",response);
        apiCall()
      })
      // localStorage.setItem(name , title);
        // sessionStorage.setItem(name,title)

 }


  return (
    <>
    <table border={1}>
    <tbody>
        <tr>
        <td>user id</td>
            <td>name</td>
            <td>title</td>
            <tr>
            <tr >action</tr>
            </tr>

            {/* <tr></tr> */}

            {/* <td>update</td> */}

        </tr>
        {apiData.map((item,i)=> 
            <tr key={i} >
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.title}</td>
              {/* <td>
            <input value={name}/>
              </td> */}
              {/* <td><button onClick={()=>deleteData(item.id)} >delete</button></td> */}
              <td><button onClick={()=>selectUser(item.id)} >Edit</button></td>
              <td><button onClick={()=>deleteAPi(item.id)} >delete</button></td>



        </tr>
        )}
   
        </tbody>
         </table>
    <input type='text' value={name}  onChange={(e)=>setName(e.target.value)}  placeholder='enter the  name ' /><br/>
    <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)}  placeholder='enter the  title ' /><br/>

    <button type='submit'  onClick={saveUser} >post data</button>


    <div >
      {/* <input type='text' value={name} placeholder=' update name'  onChange={(e)=>setName(e.target.value)}   className='update_data' /><br></br>

      <input type='text' value={title}  placeholder='update title' onChange={(e)=>setTitle(e.target.value)}   className='update_data' /><br/> */}

      <button type='submit'  onClick={updateData} >update data</button>
    </div>

    </>
  )
}

export default Crud