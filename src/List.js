import React from 'react'
// import App from './App'



function List({item,btn}) {
  return (
    <>

<ol>
           {/* <li>{toDo}</li>
           <li>{toDo}</li>
           <li>{toDo}</li> */}

            {item.map((data,i)=>{
              return <li key={i} className='List-li'>
              <button  onClick={()=>{btn(i)}}  className='d_btn' >&</button>
              {data}</li>            
      
            })}
          </ol>

    </>
  )
}

export default List