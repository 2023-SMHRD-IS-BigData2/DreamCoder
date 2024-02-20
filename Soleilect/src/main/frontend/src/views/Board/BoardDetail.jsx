import React, { useContext} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { ChartContext } from '../../context/ChartContext';
import moment from 'moment';

const BoardDetail = () => {
  const { list } = useContext(ChartContext);
  let { num } = useParams();
  const nav = useNavigate();

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
      {list[num] && <div className='board2-detail-content-box'>
        <div className='board2-detail-categori'>{'['}{list[num].hd_name}{']'}</div>
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
      </div>}
    </div>
  )
}

export default BoardDetail