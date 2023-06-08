import React, { useState,useEffect } from 'react'
import Crud1 from './Crud1';
// import TextSpeech from './Components/TextSpeech';


function AnupamCrud() {
  
  
  const get =()=>{
    let list = localStorage.getItem("userData")
    console.log(list);
    if(list){
      return  JSON.parse(localStorage.getItem("userData"))
    }else{
      return [];
    }
    }
  const [item,setItem] = useState("");
  const [edit , setEdit] = useState(false)
  const [allData, setAllData] = useState(get);
  const [id, setId] = useState(null);

  


useEffect(()=>{
  localStorage.setItem("userData",JSON.stringify(allData));
  console.log("use call");
  },[item])
  


 const addItem=()=>{
 if(item.length !== 0 ){
    setAllData((oldItems)=>[...oldItems,item]);
    setItem("")
 }else{
  alert("please enter the item")
 }
}

const editItem  = (i)=>{
 setItem(allData[i])
  setEdit(true)
  setId(i)
}

const deleteItem = (i)=>{
  allData.splice(i,1)
  setAllData([...allData])
  setItem("")
  setEdit(false)
  // allData[localStorage.removeItem("userData")]

}

 const updateItem=()=>{
    allData.splice(id,1,item);
    setAllData([...allData])
    setItem("")
    setEdit(false)
 }


  return (
    <div>
 <input onChange={(e)=>setItem(e.target.value)} value={item}  />
{edit ==  false?<button onClick={addItem} >add data</button>:
<button onClick={updateItem} >update data</button>
}
{
    allData.map((item,i)=>{
        return(
            <ol key={i}>
               
                    <li>
                        {item}
                    </li>
                    <button onClick={()=>editItem(i)} >edit item</button>
                    <button onClick={()=>deleteItem(i)} >delete</button>

              
            </ol>
        )
    })
}
<Crud1/>
    </div>
  )
}

export default AnupamCrud