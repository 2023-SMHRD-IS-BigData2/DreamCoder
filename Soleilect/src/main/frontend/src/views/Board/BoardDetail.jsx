import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { ChartContext } from '../../context/ChartContext';
import moment from 'moment';
import axios from 'axios';
import Loading from '../../components/Loading/Loading';

const BoardDetail = () => {
  const { list, setList } = useContext(ChartContext);

  const nav = useNavigate();
  // state 수정 삭제 토글 상태  다시 누르면 사라지게
  const [showEditDelete, setShowEditDelete] = useState(false);
  // state : 모달 열기를 위한 상태 선언
  const [isModalOpen, setIsModalOpen] = useState(false);
  //  state 조회수   
  // const [chartViews, setChartViews] = useState(0);

  // 모집 게시판 party_seq 받아옴
  const {num}= useParams();
   // 게시글 정보 가져오기 ---------------------

   useEffect(() => {
    let formData = new FormData();
    formData.append("b_seq", num);
    axios
        .post('/Sol/boardCon/detail', formData)
        .then((res) => {
            setList(res.data.data)
        })
        .catch((error) => {
            console.log(error)
        })
}, []);

  // function 모달창 끄기 상태 변환
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // component : 게시글 수정, 삭제 컴포넌트  
  const BoardEditDelete = () => {
    return (
      <div className='board-edit-delete'>
        <div className='edit-icon-box'>{'수정하기'}<div className='edit-icon'></div>
        </div>
        <div className='delete-icon-box' onClick={onPartyDeleteClickHandler}>{'삭제하기'}<div className='delete-icon' ></div>
        </div>
      </div>
    )
  }

  const modalRef = useRef(null);

  // event handler  삭제 버튼 클릭 핸들러 -------------------
  const onPartyDeleteClickHandler = () => {
    console.log('삭제버튼 클릭');
    // 모달 열기 상태 변경
    setIsModalOpen(true);
  }

  // 삭제 확인 모달 컴포넌트 ---------------------------------
  const Modal = () => {
    return (
      <div className='p_Modal'>
        <div ref={modalRef} className='delete-container'>
          <button className='close' onClick={() => setIsModalOpen(false)}>
            X
          </button>
          <div className='delete-modal-text'>{'['}{list[0].b_title}{']'}</div>
          <div className='delete-modal-text'> 게시글을 삭제하시겠습니까?</div>
          <div className='delete-ownplant-button-box'>
            <div className='delete-ownplant-button' onClick={ondeletePartyBoardClickHandler}>{'삭제하기'}</div>
          </div>
        </div>
      </div>
    );
  };

  // event handler 모달 안의 삭제하기 버튼 클릭 핸들러 ------------------
  const ondeletePartyBoardClickHandler = () => {
    let formData = new FormData();
    formData.append("b_seq", list[0].b_seq)
    axios
      .post('/Sol/boardCon/delete', formData)
      .then((res) => {
        // setList(res.data.data)
        alert('게시글 삭제 완료!')
        closeModal();
        nav('/BoardList')
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      })
    // 모달 닫기 상태 변경
    setIsModalOpen(false);
  }

  // event 일반게시판 목록으로 돌아가기
  const onListClickHandler = () => {
    window.history.back();
  }

  return (
    <div className='board2-detail-container'>
      <div className='board2-detail-list'>
        <div className='board2-detail-list-box' onClick={onListClickHandler}>{'목록'}</div>
      </div>
      {/* list[num] 값이 있으면 다음 렌덩링 - 새로고침 시 오류가 나서 이렇게 해결*/}
      {list[0] ? (
        <div className='board2-detail-content-box'>
          <div className='board2-detail-categori-more'>
            <div className='board2-detail-categori'>{'['}{list[0].hd_name}{']'}</div>
            {list[0].user_id == sessionStorage.getItem('user_id') ? <div className='more-icon board2-more' onClick={() => setShowEditDelete(prev => !prev)}></div> : <></>}
            {/* showEditDelete 상태에 따라 BoardEditDelete 컴포넌트 렌더링 */}
            {showEditDelete && <BoardEditDelete />}
          </div>
          <div className='board2-detail-content'>
            <div className='board2-detail-top'>
              <div className='board2-detail-title'>
                <div className='board2-detal-titile-box'>{list[0].b_title}</div>
              </div>
            </div>
            <div className='board2-detail-middle'>
              <div className='board2-detail-top-icon'>
                <div className='board-detail-writer-profile-image'></div>
              </div>
              <div className='board2-detail-top-info'>
                <div className='board2-detail-top-name'>
                  <div className='board2-detail-top-name-box'>{list[0].user_nick}</div>
                </div>
                <div className='board2-detail-top-date-view'>
                  <div className='board2-detail-top-date-box'>{moment(list[0].created_at).format("YYYY-MM-DD")}</div>
                  {/* <div className='board2-detail-top-view-box'>{'조회수'}{list[0].b_views}</div> */}
                </div>
              </div>
            </div>
            <div className='board2-divider'></div>
            <div className='board2-detail-bottom'>
              <div className='board2-detail-detailcontent'>
                <div className='board2-detail-detailcontent-box'>{list[0].b_content}</div>
              </div>
            </div>
          </div>
        </div>
       ) : ( 
        <div><Loading/></div>
       )} 
      {/* 삭제 확인 모달 */}
       {isModalOpen && <Modal />} 
    </div>
  )
}

export default BoardDetail