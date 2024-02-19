import React from 'react'
import { useNavigate } from 'react-router-dom';

const RepairInfoDetail = () => {
    const gotoListClickHandler=()=>{
        window.history.back();
    }
    return (
        <div id='repair-info-wrapper'>
            <div className='repair-info-detail-container'>
                <div className='repair-info-detail-top-text'>
                    <div className='repair-info-detail-tab-name'>수리업체 정보</div>
                    <div className='repair-info-detail-title'>{'업체명이들어갈 곳 제목이 어쩌고저쩌고'}</div>
                    <div className='repair-info-detail-phone'>{'062-0000-0000'}</div>
                    <div className='repair-info-detail-date'>{'2000.00.00몇요일'}</div>
                </div>
                <div className='repair-info-detail-division-line'></div>
                <div className='repair-info-detail-content-box'>
                    <div className='repair-info-detail-image-box'>
                        <div className='repair-info-detail-image'></div>
                    </div>
                    <div className='repair-info-detail-text'>{'내용이들어갑니다내용이들어갑니다내용이들어갑니다내용이들어갑니다내용이들어갑니다내용이들어갑니다내용이들어갑니다내용이들어갑니다내용이내용이내용ㅇ내용이내용이들어갑니다내용이내용이내용ㅇ내용이내용이들어갑니다내용이내용이내용ㅇ내용이내용이들어갑니다내용이내용이내용ㅇ내용이내용이들어갑니다내용이내용이내용ㅇ내용이'}</div>
                </div>
                <div className='repair-info-detail-division-line'></div>
                <div className='repair-info-detail-bottom'>
                    <div className='goto-list-button-box' onClick={gotoListClickHandler}>
                        <div className='goto-list-button'>{'목록으로'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RepairInfoDetail;