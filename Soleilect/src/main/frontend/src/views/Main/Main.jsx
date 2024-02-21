import axios from 'axios';
import React, { useState } from 'react'
import './main.css';

const Main = () => {

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
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main