import React, { useState } from 'react';
import Todo from './Todo';
import Login from './Login';
import SignUp from './SignUp';
import {Routes,Route} from "react-router-dom"
import PageError from './pageError';
import NewCrud from './newCrud';
import Main from './Components/Main';
import ToNew from './ToNew';
import Calculator from "./Calculator"
import CatchItem from './Components/CatchItem';
import PokemonInfo from './Components/PokemonInfo';
import AnupamCrud from './AnupamCrud';
import NextPage from './Components/NextPage';
import ScreenSize from './ScreenSize';
import PureCom from './Components/pureCom';
import Crud_userList from './Crud_userList';



const App = () => {
  const [catchData, setCatchData] = useState();
  const [nextPage, setNextPage] = useState();


  return (
     <>
         <Routes>
          <Route path='/'  element={<Main cData={setCatchData} />}/>
          <Route path='/SignUp'  element={<SignUp/>}/>
          <Route path='/Login'  element={<Login/>}/>
          <Route path='/Todo'  element={<Todo/>}/>
          <Route path='*'  element={<PageError/>}/>
          <Route path='/newCrud'  element={<NewCrud/>}/>
          <Route path='/anupamCrud'  element={<AnupamCrud/>}/>
          <Route path='/calculator'  element={<Calculator/>}/>
          <Route path='/catchitem' element={<CatchItem catchData={catchData}/>} /> 
          <Route path='/PokemonInfo'  element={<PokemonInfo page={setNextPage} />} />
          <Route path='/NextPage'  element={<NextPage nextPage={nextPage} />}/>
          <Route path='/ScreenSize'  element={<ScreenSize/>}/>
          <Route path='/pureCom'  element={<PureCom/>} />
          <Route path='/userList' element={<Crud_userList/>}  />
        </Routes>
     </>
    )
}

export default App