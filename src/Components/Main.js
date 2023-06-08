import React, { useEffect, useState } from 'react'
import "./style.css"
import Card from "./Cart"
import PokemonInfo from './PokemonInfo'
import axios from "axios"
import CatchItem from './CatchItem'
import { Link } from 'react-router-dom'



function Main({cData}) {
    
function timing(){
 setTime( new Date ().toLocaleTimeString());
 setDate(new Date ().toLocaleDateString())

}
setInterval(timing,1000)

   const [time,setTime] = useState()
   const [date,setDate] = useState()

   const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true)
  const [url , setUrl] = useState("https://pokeapi.co/api/v2/pokemon/")
  const [nextUrl , setnextUrl] = useState()
  const [prevUrl , setPrevUrl] = useState()
  const [pokeDex,setPokeDex] = useState() 
  const [catchItem,setCatchItem] = useState([])
  const [catchBtn,setCatchBtn] = useState(false)
  const [modal,setModal] = useState()
  const [search,setSearch] = useState("")
  // console.log("real pokedata",pokeData);
const pokeFun = async () =>{
   setLoading(true)
   const res = await axios.get(url);
  //  console.log(res.data.results);
  setnextUrl("https://pokeapi.co/api/v2/pokemon?limit=800")
  setPrevUrl(res.data.previous);
  getPokemon(res.data.results);
  setLoading(false)
} 


const getPokemon = async(res) =>{
  res.map(async(item)=>{
    // console.log("dfhadk",item.url);
     const result = await axios.get(item.url);
     setPokeData(state=>{
      state = [...state,result.data]
       state.sort((a,b)=>a.id>b.id?1:-1)
       return state;
     })
  })
}

  useEffect(()=>{
    pokeFun()    
  },[url]);


  useEffect(()=>{
    
      fetch('https://pokeapi.co/api/v2/pokemon?limit=1200')
      .then(response => response.json())
      .then(allpokemon => console.log("ALL PokeMon Name",allpokemon))    
  },[])

 const catchData=(p)=>{

   setCatchItem(catchItem.concat(p))
   cData(catchItem.concat(p));
  //  setCatchBtn(p)
   alert("Pokemon added")
 }

   const fetchData =(value)=>{
     fetch("https://pokeapi.co/api/v2/pokemon?limit=1200").then((data)=>{
       return data.json()
     }).then((aData)=>{
      console.log("adatadsahdj ",aData);
        const result = aData.filter((user)=>{
          return value && user && user.results.name && user.results.name.toLowerCase().includes(value);
        })
        console.log("search ",result);
     })
   } 

   const handlerChange =(value)=>{
     setSearch(value);
     fetchData(value)
  }

  return (
    <>

        <div className='container'>
        {/* {catchItem} */}
       <div className='time' >  <div><img  width={180} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png' /></div></div>
         {/* <Link to="/catchitem" >  */}
         <div  className='left-content'  onClick={()=>{setCatchBtn(true);setModal(true)}}>
              <Card pokemon={pokeData} loading={loading}     infoPokemon={poke=>setPokeDex(poke)} />
            </div>

            <div className='btn-group' >
          <button onClick={()=>{
            setUrl(prevUrl)
          }} >previous</button>
          <button onClick={()=>{
            setUrl(nextUrl)
          }} >next</button>
           
         </div>

            {/* </Link>  */}
              
             {modal?<div className='poke-con' ><div className='right-content' onClick={()=>setModal(false)} > 
                 <PokemonInfo data={pokeDex} />
                 {/* <input  placeholder='nick name' /> */}
                  {catchBtn?<button className='btn-group-1' onClick={()=>catchData(pokeDex)}>Catch</button>:""}
                  </div>
              </div>:""}


             <Link to="/catchitem">
              <div className='catch-item' > 
              {/* <CatchItem  catchData={catchItem}   PokemonInfo={poke=>setPokeDex(poke)} /> */}
               <img  height={70} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/770px-Pok%C3%A9_Ball_icon.svg.png'/>
               </div>
               </Link>


              
        </div>
    </>
  )
}

export default Main