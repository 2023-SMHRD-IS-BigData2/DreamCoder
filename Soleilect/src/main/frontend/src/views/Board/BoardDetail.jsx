import React from 'react'

const BoardDetail = () => {
    return (
        <div className='board2-detail-container'>
          <div className='board2-detail-list'>
              <div className='board2-detail-list-box'>{'목록'}</div>
            </div>
          <div className='board2-detail-content-box'>
            <div className='board2-detail-categori'>{'[자유게시판]'}</div>
            <div className='board2-detail-content'>
              <div className='board2-detail-top'>
                <div className='board2-detail-title'>
                  <div className='board2-detal-titile-box'>{'1년에 수리업체 몇번 정도 부르세요?'}</div>
                </div>
              </div>
    
              <div className='board2-detail-middle'>
                <div className='board2-detail-top-icon'>
                  <div className='board-detail-writer-profile-image'></div>
                </div>
                <div className='board2-detail-top-info'>
                  <div className='board2-detail-top-name'>
                    <div className='board2-detail-top-name-box'>{'홍길동'}</div>
                  </div>
                  <div className='board2-detail-top-date-view'>
                    <div className='board2-detail-top-date-box'>{'2024-02-19'}</div>
                    <div className='board2-detail-top-view-box'>{'조회수'}{'52'}</div>
                  </div>
                </div>
              </div>
              <div className='board2-divider'></div>
              <div className='board2-detail-bottom'>
                <div className='board2-detail-detailcontent'>
                  <div className='board2-detail-detailcontent-box'>{'1년에 수리업체 몇번 정도 부르세요? 비용이 꽤 나가네요'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
}

export default BoardDetail