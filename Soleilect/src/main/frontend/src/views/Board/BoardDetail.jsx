import React, { useContext, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ChartContext } from '../../context/ChartContext';
import moment from 'moment';
import axios from 'axios';

const BoardDetail = () => {
  const { list, setList} = useContext(ChartContext);
  let { num } = useParams();

  const nav = useNavigate();
  // state 수정 삭제 토글 상태  다시 누르면 사라지게
  const [showEditDelete, setShowEditDelete] = useState(false);
  // state : 모달 열기를 위한 상태 선언
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 
  const closeModal = () => {
    setIsModalOpen(false);
};

  // component : 게시글 수정, 삭제 컴포넌트  
    const BoardEditDelete = () => {
      return (
            <div className='party-board-edit-delete'>
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
                    <div className='delete-modal-text'>{'['}{list[num].b_title}{']'}</div>
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
      formData.append("b_seq", list[num].b_seq)
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
    nav('/BoardList')
  }

  return (
    <div className='board2-detail-container'>
      <div className='board2-detail-list'>
        <div className='board2-detail-list-box' onClick={onListClickHandler}>{'목록'}</div>
      </div>
      {/* list[num] 값이 있으면 다음 렌덩링 - 새로고침 시 오류가 나서 이렇게 해결*/}
      {list[num] ? (
        <div className='board2-detail-content-box'>
          <div className='board2-detail-categori-more'>
            <div className='board2-detail-categori'>{'['}{list[num].hd_name}{']'}</div>
            {list[num].user_id == sessionStorage.getItem('user_id') ? <div className='more-icon board2-more' onClick={() => setShowEditDelete(prev => !prev)}></div> : <></>}
            {/* showEditDelete 상태에 따라 BoardEditDelete 컴포넌트 렌더링 */}
            {showEditDelete && <BoardEditDelete />}
          </div>
          <div className='board2-detail-content'>
            <div className='board2-detail-top'>
              <div className='board2-detail-title'>
                <div className='board2-detal-titile-box'>{list[num].b_title}</div>
              </div>
            </div>
    
            <div className='board2-detail-middle'>
              <div className='board2-detail-top-icon'>
                <div className='board-detail-writer-profile-image'></div>
              </div>
              <div className='board2-detail-top-info'>
                <div className='board2-detail-top-name'>
                  <div className='board2-detail-top-name-box'>{list[num].user_nick}</div>
                </div>
                <div className='board2-detail-top-date-view'>
                  <div className='board2-detail-top-date-box'>{moment(list[num].created_at).format("YYYY-MM-DD")}</div>
                  <div className='board2-detail-top-view-box'>{'조회수'}{list[num].b_views}</div>
                </div>
              </div>
            </div>
            <div className='board2-divider'></div>
            <div className='board2-detail-bottom'>
              <div className='board2-detail-detailcontent'>
                <div className='board2-detail-detailcontent-box'>{list[num].b_content}</div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>로딩중...</div>
      )}
      {/* 삭제 확인 모달 */}
      {isModalOpen && <Modal />}           
    </div>
)
}

export default BoardDetail