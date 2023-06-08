import React, { useState } from "react";
import PokemonInfo from "./PokemonInfo";

function CatchItem({catchData}) {
  console.log("Catch item datat", catchData); 
  return (
    <div className="con-catch">
    {/* <div  className="catch-item" > */}
    <h1>All catch item</h1>
    {/* <div className="catch-card" > */}
    {/* <div  >{data?.name}</div> */}
      {catchData?.map((item) => {
        return(
            <>
          <div className='card-'>
            <h2>{item.id}</h2>
            <img  height={160} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}  alt='' />
            <h2>{item.name}</h2>
            <h2 className='type'>{item.types[0].type.name}</h2>

        </div>
        {/* {
            catchData.map((item)=>{
                return (
        <PokemonInfo  data={item}/>

                )
            })
        } */}
          </>
        )
      })}
</div>

// </div>
   
    
  );
}

export default CatchItem;
