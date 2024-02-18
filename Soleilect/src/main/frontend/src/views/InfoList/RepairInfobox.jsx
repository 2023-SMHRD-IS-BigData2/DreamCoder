
import React, { useState, useRef } from 'react'
import './index.css';

const RepairInfobox = () => {


    return (
        <div className='repair-info-box'>
            <div className='repair-info-box-image-box'>
                <div className='repair-info-box-image'></div>
            </div>
            <div className='repair-info-box-tab-name'>{'수리업체 정보'}</div>
            <div className='repair-info-box-name'>{'업체명이 들어갈 곳'}</div>
            <div className='repair-info-box-phone'>{'062-0000-0000'}</div>
            <div className='repair-info-box-date'>{'2000.00.00몇요일'}</div>
        </div>
    )
}

export default RepairInfobox