import React, {useEffect, useState} from "react";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import './App.css';
import { ChartContext } from "./context/ChartContext";
import Header from "./layouts/Header/Header";
import Main from './Main';
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import TLogin from "./TLogin";
import PartyBoardList from "./views/PartyBoard/PartyBoardList";
import PartyBoardDetail from "./views/PartyBoard/PartyBoardDetail";
import './views/PartyBoard/PartyBoard.css';
import './components/CommentItem/Comment.css'
import PartyWrite from "./views/PartyWrite/PartyWrite";
import BoardWrite from "./views/BoardWrite/BoardWrite";
                                                                         

function App() {
  
  const [data, setData] =useState('');
  
  // 모집 게시판 useState
  const[list,setList] = useState([]);

  // useEffect(()=>{
  //   axios.get('/Sol/test')
  //   .then(res=>setData(res.data))
  //   .catch(err=>console.log(err))
  // },[])


  return (
    <ChartContext.Provider value={{list, setList}}>
    <div>
      <Header/>
      <Routes>
        <Route path="/Main" element={<Main/>}></Route>
        <Route path="/TLogin" element={<TLogin/>}></Route>
        <Route path="/PartyBoardList" element={<PartyBoardList/>}></Route>
        <Route path='/detail/:num' element={<PartyBoardDetail/>}></Route>
        <Route path="/SignUp" element={<SignUp/>}></Route>
        <Route path="/SignIn" element={<SignIn/>}></Route>
        <Route path="/PartyWrite" element={<PartyWrite/>}></Route>
        <Route path="/BoardWrite" element={<BoardWrite/>}></Route>
      </Routes>
    </div>
    </ChartContext.Provider>
  );
}

export default App;
