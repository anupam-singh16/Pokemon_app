import React from 'react'

function Cart({pokemon,loading,infoPokemon,btn}) {
  return (
    <>
    {
       loading  ? <img className='img'  src='https://media.tenor.com/xmSA9SgXtX4AAAAd/pokemon-pokemon-go.gif'  height={500} />:
    pokemon.map((item,i)=>{
        return(
          <div key={i}  className='card-container'>
          <div className='card' onClick={()=>infoPokemon(item)}>
            <h2>{item.id}</h2>
            <img  height={100} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${item.id}.svg`}  alt='' />
            <h2>{item.name}</h2>
            <h2 className='type'>{item.types[0].type.name}</h2>
        </div>

          </div>
        )
      })
    }
       
    </>
  )
}

export default Cart