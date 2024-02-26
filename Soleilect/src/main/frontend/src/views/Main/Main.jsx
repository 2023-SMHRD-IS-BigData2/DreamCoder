import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './main.css';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  //          state: 로그인 상태
  const [isLogin, setIslogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("user_id") === null) {

    } else {
      setIslogin(true);

    }
  })
  const nav = useNavigate();
  //        event handler: 시작하기 누르면 회원가입창으로 감
  const goToJoinIn = () => {
    if (isLogin == true) {
      nav('/PartyBoardList')
    } else {
      nav('/SignUp')
    }
  }

  const goToInfo = () => {
    localStorage.setItem('header-toggle','info-board')
    nav('/InfoList')
    window.location.reload();
  }
  const goToMap = () => {
    localStorage.setItem('header-toggle','map')
    nav('/map')
    window.location.reload();
  }
  const goToParty = () => {
    localStorage.setItem('header-toggle','party-board')
    nav('/PartyBoardList')
    window.location.reload();
  }

  return (
    <div className='main-wrapper'>
      <div className='main-cover'>
        <div className='main-cover-img'>
          <div className='main-cover-text-box'>
            <div className='main-cover-bord-text-box'>
              <div className='main-cover-text'>간편한</div>
              <div className='main-cover-text'>전력모집 서비스</div>
            </div>
            <div className='main-cover-light-text-box'>
              <div className='main-cover-text-grey'>필요한 만큼의 전력을 쉽고</div>
              <div className='main-cover-text-grey'>간단하게 모아보세요!</div>
            </div>
            <div className='main-cover-button' onClick={goToJoinIn}><span>시작하기</span></div>
          </div>
        </div>
      </div>
      <div className='main-middle-cover'>
        <div className='main-middle-left'>
          <div className='main-middle-left-text-box'>
            <div className='main-left-text'>만나보세요!</div>
            <div className='main-left-text'>솔레일렛트와 함께</div>
            <div className='main-left-text'>그린 라이프</div>
            <div className='main-left-text-light'>친환경 에너지,</div>
            <div className='main-left-text-light'>태양광 에너지 사업의 시작</div>
          </div>
          <div className='main-middle-left-button-box'>
            <div className='main-middle-left-button-text-light'>쉽고 빠른</div>
            <div className='main-middle-left-button-text'>전력 모집 서비스</div>
            <div className='main-middle-left-button-text-link' onClick={goToParty}>바로보기</div>
          </div>
          <div className='main-middle-left-icon'></div>
        </div>
        <div className='main-middle-right'>
          <div className='main-middle-right-top-box'>
            <div className='main-middle-right-top-icon'></div>
            <div className='main-middle-right-light-text'>발전량 지도</div>
            <div className='main-middle-right-text'>
              <div>발전량 예측 정보를</div>
              <div>확인하세요!</div>
            </div>
            <div className='main-middle-right-light-text-link' onClick={goToMap}>자세히보기</div>
          </div>
          <div className='main-middle-right-bottom-box'>
            <div className='main-middle-right-bottom-icon'></div>
            <div className='main-middle-right-light-text'>정보게시판</div>
            <div className='main-middle-right-text'>
              <div>내게 필요한</div>
              <div>수리업체 정보</div>
            </div>
            <div className='main-middle-right-light-text-link' onClick={goToInfo}>자세히보기</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main