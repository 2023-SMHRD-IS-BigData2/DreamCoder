import axios from 'axios';
import React, { useState } from 'react'
import './main.css';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const nav = useNavigate();
  //        event handler: 시작하기 누르면 회원가입창으로 감
  const goToJoinIn = () => {
    nav('/SignUp')
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
            <div className='main-left-text'>원더풀 라이프</div>
            <div className='main-left-text-light'>친환경 에너지,</div>
            <div className='main-left-text-light'>태양광 에너지 사업의 시작</div>
          </div>
          <div className='main-middle-left-button-box'>
            <div className='main-middle-left-button-text-light'>쉽고 빠른</div>
            <div className='main-middle-left-button-text'>전력 모집 서비스</div>
            <div className='main-middle-left-button-text-link'>바로보기</div>
          </div>
          <div className='main-middle-left-icon'></div>
        </div>
        <div className='main-middle-right'></div>
      </div>
    </div>
  )
}

export default Main