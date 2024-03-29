import React, { useContext, useEffect } from 'react'
import PartyBoardItem from './PartyBoardItem'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ChartContext } from '../../context/ChartContext';
import Loading from '../../components/Loading/Loading';
import Pagination from '../../components/Pagination/Pagination';
import usePagination from '../../hooks/pagination';

const PartyBoardList = () => {
    const {list,setList,setNum} = useContext(ChartContext);
    const nav = useNavigate();

     // 페이지네이션 훅 호출
    //  const { currentPage, currentData, totalPageCount, nextPage, prevPage, goToPage } = usePagination(6, list); 

  // 스프링부트 연결 ---------------------
  useEffect(()=>{
    let formData = new FormData();
    axios
    .get('/Sol/partyBoardCon/list',formData)
    .then((res)=>{
      setList(res.data.data)
    })
    .catch((error) => {
      console.log(error)
    })
    
  },[])
  // console.log(list);
  const partyWriteClickHandler = () => {
    const userId = sessionStorage.getItem("user_id");
    if (userId) {
        nav('/PartyWrite');
    } else {
        alert("로그인 해주세요."); 
    }
}

  return (
    list ?
    <div className='list-container'>
      <div className='write-box'>
        <div className='write-button' onClick={partyWriteClickHandler}>{'모집하러 가기'}</div>
      </div>
      <div className='list-item'>
        {/* {list && currentData() && currentData().map((item, index) => <PartyBoardItem item={item}
          key={(currentPage - 1) * 6 + index} ></PartyBoardItem>)} */}
           {list.map((item, index) => <PartyBoardItem item={item}
          key={index} index={index} party_seq={item.party_seq} target_cnt={item.target_cnt} now_cnt={item.now_cnt} user_nick={item.user_nick} party_title={item.party_title} party_isJoin={item.party_isJoin} party_views={item.party_views} end_at={item.end_at}>
          </PartyBoardItem>)}
      </div>
      <br></br>
            <div className='repair-info-bottom-box'>
                    <div className='info-list-pagination-box'>
                        {/* 페이지네이션 컴포넌트 */}
                        {/* <Pagination
                            currentPage={currentPage}
                            totalPages={totalPageCount}
                            onNextPage={nextPage}
                            onPrevPage={prevPage}
                            onGoToPage={goToPage}
                        /> */}
                    </div>
                </div>
    </div>
    :<><Loading/></>
  )
}

export default PartyBoardList