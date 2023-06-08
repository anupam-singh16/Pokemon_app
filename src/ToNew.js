import { all } from "axios";
import React, { useEffect, useState } from "react";

function ToNew() {
  const [name, setName] = useState("");
  const [allData, setAllDAta] = useState([]);
  const [edit,setEdit] = useState(false)
  const [toggle,settoggle] = useState(false)

  
 
  


  function names(e) {
    setName(e.target.value);
    // console.log(name);
  }
  function addItem() {
    
    if (name.length  !== 0 ) {
      setAllDAta((oldItems) => [...oldItems, name]);
      setName("");
    } 
    
    }
    function deleteItem(i){
      allData.splice(i,1);
      setAllDAta([...allData])
      setName("")
    }
    
    
    function editItem(i){
      setName(allData[i])
      setAllDAta([...allData])
      setEdit(true)
      settoggle(true)
    } 
    
    function updateItem(i){
      
        allData.splice(i,1,name)
        setAllDAta([...allData]) 
        setName("")   
        setEdit(false);
    }
    
    
    return (
      <>
      <div>
        <input 
        value={name}
        onChange={(e) => names(e)}
          type="text"
          placeholder="item"
        />
        {edit !== true ?  <button onClick={addItem}>add</button>:<button onClick={updateItem}  >update</button>}
       
        

        <br></br>
        {/* {allData} */}
      </div>
      {allData.map((item, i) => {
        return (
          <ol key={i}>
         <li>{item}</li>
         
            <button onClick={()=>deleteItem(i)} >delete</button>
            <button onClick={()=>editItem(i)} >edit</button>

          </ol>
        );
      })}
    </>
  );
}

export default ToNew;
