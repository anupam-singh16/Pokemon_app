import React, { useEffect, useState } from "react";
import "./NewCrud.css";

function NewCrud() {
  const [name, setName] = useState("");
  const [allData, setAllData] = useState([]);
  const [edit, setEdit] = useState(false);
//   const [editIndex, setEditIndex] = useState();
 useEffect(()=>{
  let  obj = [
    {name : "anupam singh",pincode : 201304},
    {name : "amit kumar",pincode  : 201305},
    {name : 'ankit singh',pincode : 302415}
  ]
  
  console.log(obj);
  
  for(let a  = 0;a <obj.length ; a++){
  
  console.log("loop data",obj[a].pincode);
     
  }
 },[])




  const addData = () => {
    if (name.length !== 0) {
      setAllData((newData) => [...newData, name]);
      // setName("");
    }
  };

  const editData = (i) => {
    setName(allData[i])
        setEdit(true)
        // setEditIndex(i)
  };

  const updateItem = (i) => {
    // let index = i
    allData.splice(i,1,name);
    setAllData([...allData]);
     setEdit(false)
    setName("");

  };

  const deleteItem = (i) => {
    allData.splice(i,1);
    setAllData([...allData]);
    //  console.log(i);
  };

  // console.log(allData);
  return (
    <div>
      <h1>newCrud</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {edit == false?<button onClick={addData}>Add item </button>
      :<button onClick={updateItem}>update item </button>}


      {allData.map((item, i) => {
        return (
          <div key={i}>
            <h3>{item}</h3>
            <button className="edit" onClick={()=>editData(i)}>
              edit
            </button>
            <button className="delete" onClick={() => deleteItem(i)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default NewCrud;
