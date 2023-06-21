import React, { useState } from 'react'

function Crud_userList() {
 

   const [ name ,setName] = useState("")
   const [ email ,setEmail] = useState("")
   const [ address ,setAddress] = useState("")
   const [rowToEdit,setRowToEdit] = useState(null)

  const [data,setData] = useState([
    {
    id: 1,
    name:"anupam",
    email : "anupam@gmail.com",
    address : "bhnagel"
   }
  ])
   
   const addItem =(newRow)=>{
    let id = data.id+1
    setData((olditems)=>[...olditems,{id,name,email,address}])
   
    }
   

   const deleteItem=(id)=>{
    //  data.slice(id,1,{name,email,address})
    //  setData([...data]);
    // alert(id)
     setData(data.filter((_,index)=>index !== id))
   }

 const editItem =(id)=>{
        // setData(data[id])
        setData(data.map((currRow,idx)=>{
          if(idx !== id )  return currRow;
              return id;
        }))
   
  }



  return (
    <div>Crud_userList
    {/* <input value={id}/> */}

    <input value={name}  onChange={(e)=>setName(e.target.value)}/>
    <input value={email}  onChange={(e)=>setEmail(e.target.value)}/>
    <input value={address}  onChange={(e)=>setAddress(e.target.value)}/>

    <button onClick={addItem}  >add item</button>
    {
      data.map((item,i)=>{
        return (
          <>
          <table border={1}>
          <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.address}</td>
        <td><button onClick={()=>deleteItem(i)} >delete</button></td>
        <td><button onClick={()=>editItem(i)} >edit</button></td>

</tr>
</table>
</>
        )
      })
      
    }
    
    </div>
  )
}

export default Crud_userList