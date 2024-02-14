import React, { useContext, useEffect } from 'react'
import PartyBoardItem from './PartyBoardItem'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ChartContext } from '../../context/ChartContext';

const PartyBoardList = () => {
    const {list,setList} = useContext(ChartContext);

  // 가데이터 넣어서 테스트
  const nav = useNavigate();
  //  useEffect(()=>{
  //   axios
  //   .get('http://localhost:3000/Party.json')
  //   .then((res)=>{
  //       setList(res.data.list)
  //   })
  //   console.log(list);
  // },[])

  // 스프링부트 연결 ---------------------
  useEffect(()=>{
    let formData = new FormData();
    axios
    .get('/Sol/partyBoardCon/list',formData)
    .then((res)=>{
      setList(res.data)
    })
    .catch((error) => {
      console.log(error)
    })
    
  },[])
  console.log(list);

  return (
    <div className='list-container'>
      <div className='write-box'>
        <div className='write-button' onClick={()=>{
          nav('/PartyWrite');
        }}>{'모집하러 가기'}</div>
        <div className='board-button' onClick={()=>{nav('/BoardWrite')}} style={{cursor: "pointer"}}>{'[일반게시물작성버튼]'}</div>
      </div>
      <div className='list-item'>
        {list.map((item, index) => <PartyBoardItem item={item}
          key={index} index={index}></PartyBoardItem>)}
      </div>
    </div>
  )
}

export default PartyBoardList