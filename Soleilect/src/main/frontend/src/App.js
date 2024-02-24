import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import axios from "axios";
import './App.css';
import { ChartContext } from "./context/ChartContext";
import Header from "./layouts/Header/Header";
import Main from "./views/Main/Main";
import SignUp from "./components/Auth/SignUp";
import SignIn from "./components/Auth/SignIn";
import PartyBoardList from "./views/PartyBoard/PartyBoardList";
import PartyBoardDetail from "./views/PartyBoard/PartyBoardDetail";
import './views/PartyBoard/PartyBoard.css';
import './components/CommentItem/Comment.css'
import PartyWrite from "./views/PartyWrite/PartyWrite";
import BoardWrite from "./views/BoardWrite/BoardWrite";
import Mypage from "./components/Mypage/Mypage";
import Map from "./views/Map/Map";
import InfoList from "./views/InfoList/InfoList";
import BoardList from "./views/Board/BoardList";
import Footer from "./layouts/Footer/Footer";
import MessagePage from "./views/MessagePage/MessagePage";
import BoardDetail from "./views/Board/BoardDetail";
import ScrollToTop from "./components/ScrollToTop";

  function App() {

    const [data, setData] = useState('');

    // state 모집 게시판 
    const [list, setList] = useState([]);

    // useEffect(()=>{
    //   axios.get('/Sol/test')
    //   .then(res=>setData(res.data))
    //   .catch(err=>console.log(err))
    // },[])


    return (
      <ChartContext.Provider value={{ list, setList }}>
        <div>
          <ScrollToTop/>
          <Header />
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/PartyBoardList" element={<PartyBoardList />}></Route>
            <Route path='/detail/:num' element={<PartyBoardDetail />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path="/SignIn" element={<SignIn />}></Route>
            <Route path="/PartyWrite" element={<PartyWrite />}></Route>
            <Route path="/BoardWrite" element={<BoardWrite />}></Route>
            <Route path="/Mypage" element={<Mypage />}></Route>
            <Route path="/map" element={<Map />}></Route>
            <Route path="/InfoList" element={<InfoList />}></Route>
            <Route path="/BoardList" element={<BoardList />}></Route>
            <Route path='/MessagePage' element={<MessagePage />}></Route>
            <Route path="/BoardDetail/:num" element={<BoardDetail />}></Route>
          </Routes>
          <Footer />
        </div>
      </ChartContext.Provider>
    );
  }

export default App;
