import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Todo() {
  const [toDo, SetToDo] = useState("");
  const [item, setItem] = useState(getData());
  const [active, setActive] = useState(null);
  const [edit, setEdit] = useState(false);

  function getData() {
    let localData = localStorage.getItem("items");
    // console.log("get data",localData);

    if (localData) {
      return JSON.parse(localStorage.getItem("items"));
    } else {
      return [];
    }
  }

  //    const itemEvent = (e) =>{
  //         SetToDo(e.target.value)
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(item));
  }, [item]);
  console.log(item);
  //    }
  const history = useNavigate();

  const listOfItem = () => {
    if (edit === true) {
      let a = item;
      a[active] = toDo;
      setItem(a);
      setEdit(false);
    } else if (toDo !== "") {
      setItem((oldItem) => {
        return [...oldItem, toDo];
      });
    }else{
      // const   allInput = {id : new Date().getTime().toString(),name: toDo}
      // setItem((data)=>{
      //   return [...data,allInput]
      // })
      console.log("never run");
    }
    SetToDo("");
  };

  const deleteItem = (id) => {
    setItem((oldItem) => {
      return oldItem.filter((arrayEle, index) => {
        return index !== id;
      });
    });
    console.log("delete");
  };

  const editItem = (id) => {
    setActive(id);
    SetToDo(item[id]);
    const editData = item.filter((ele,ind)=>{
      // setItem(ele)
       return ind !== id;
    });
    setItem(editData)
  };

 const remove = () =>{
  localStorage.removeItem("items");

  
  
 }


  //  const logOutData = localStorage.getItem("data");
  //  console.log("log out ",logOutData);

  const logOut = () => {
    localStorage.removeItem("data");
    history("/");
  };

  return (
    <>
      <h1> to do list </h1>
      <NavLink to="/">home page</NavLink>
      <br></br>
      <input
        value={toDo}
        type="text"
        placeholder="enter item "
        onChange={(e) => {
          SetToDo(e.target.value);
        }}
      />
      <br />
      <button onClick={listOfItem}>add item</button>
      <button onClick={logOut}>log out</button>
      <button onClick={remove} > remove all data </button>

      {item.map((data, ind) => {
        return (
          <ol key={ind} id={ind}>
            <li>{data}</li>
            <button onClick={() => deleteItem(ind)}>delete</button>
            <button onClick={() => editItem(ind)}>edit</button>
          </ol>
        );
      })}
    </>
  );
}

export default Todo;
