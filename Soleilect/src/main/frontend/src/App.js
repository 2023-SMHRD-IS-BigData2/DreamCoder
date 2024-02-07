import React, {useEffect, useState} from "react";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import './App.css';
import { ChartContext } from "./context/ChartContext";
import Header from "./layouts/Header/Header";
import Main from './Main';
import ChartList from './components/Chart/ChartList';
import ChartDetail from './components/Chart/ChartDetail';
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";

function App() {
  
  const [data, setData] =useState('');
  
  // 모집 게시판 useState
  const[list,setList] = useState([]);

  useEffect(()=>{
    axios.get('/Sol/test')
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  },[])


  return (
    <ChartContext.Provider value={{list, setList}}>
    <div>
      <Header/>
      <Routes>
        <Route path="/Main" element={<Main/>}></Route>
        <Route path="/ChartList" element={<ChartList/>}></Route>
        <Route path='/detail/:num' element={<ChartDetail/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
      </Routes>
    </div>
    </ChartContext.Provider>
  );
}

export default App;
