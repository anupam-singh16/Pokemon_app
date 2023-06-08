import React, { useEffect, useState } from "react";
import CatchItem from "./CatchItem";
// import Cart from "./Cart";
import "./style.css"


// import Main from "./Main";
// import { isHtmlElement } from "react-router-dom/dist/dom";
// import "./style.css"


function PokemonInfo({data,page}) {
  // console.log("data itenmmi dbjhxdnhfbjhsdf",data?.id);
//  page.push(data)
  // let [modal,setModal] =useState(false)
    // setDataPage(page.push(data))
    
// console.log("data pagyhag",dataPage);

  return (
    <div>
  <div className="pokeinfo-container" >
    {/* <CatchItem viewData={data} /> */}
       {
       (!data)?"":(
        <>
        <h1>{data.name}</h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
        alt=""
      />
      <p className="type-1" >{data.types[0].type.name}</p>
      {/* <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png`}
        alt=""
      />
      <img
        src={`
        
        https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${data.id}.png
        `}
        alt=""
      /> */
      
      }
      
      <div className="abilities">
      {
        data.abilities.map(poke=>{
          return (
           <>
           <div className="group">
          <h2>{poke.ability.name}</h2>
        </div>
        <div className="base-stat" >
          {
            data.stats.map(poke=>{
              return(
                <>
                  <h3>{poke.stat.name}:{poke.base_stat}</h3>

                </>
              )

            })    
          }     
         </div>
           </>
          )
        })
      }
    </div>
        </>
       )


    }
      
    </div>
    </div>
  );
}



export default PokemonInfo;
