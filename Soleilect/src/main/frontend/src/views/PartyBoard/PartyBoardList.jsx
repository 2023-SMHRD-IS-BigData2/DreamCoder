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

  return (
    <div className='list-container'>
      <div className='write-box'>
        <div className='write-button' onClick={()=>{
          nav('/PartyWrite');
        }}>{'모집하러 가기'}</div>
        <div className='board-button' onClick={()=>{nav('/BoardWrite')}} style={{cursor: "pointer"}}>{'[일반게시물작성버튼]'}</div>
      </div>
      <div className='list-item'>
        <div className='item-container'>
              <div className='board-top-date'>
                  <div className='board-top-end-date'>{'마감일 2024-02-15'}</div>
              </div>
              <div className='Chart-item-box'>
              </div>
              <div className='chart-content'>
                      <div className='board-list-item-top'>
                          <div className='board-list-item--nickname'></div>
                      </div>
                      <div className='board-list-item-middle'>
                          <div className='board-list-item-title'></div>
                      </div>
                      <div className='board-list-item-bottom'>
                          <div className='board-list-item-recruit'>{'모집중'}</div>
                          <div className='board-list-item-counts'>{`조회수 `}</div>
                      </div>
                  </div>
          </div>
      </div>
    </div>
    
  )
}

export default PartyBoardList