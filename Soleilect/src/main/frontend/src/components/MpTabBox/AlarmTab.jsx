import React from 'react';
import './style.css';

const AlarmTab = () => {

    return (
        <div className='tab-content-list'>
            <div className='tab-content-box'>
                <div className='alarm-circle-icon-box'>
                    <div className='icon alarm-circle-icon'></div>
                </div>
                <div className='tab-image-box image-box-circle'>
                    <div className='tab-image'></div>
                </div>
                <div className='tab-text-content-box'>
                    <div className='tab-top-text-box'>
                        <div className='alarm-text'>{'닉네임'}</div>
                        <div className='alarm-text'>{'게시글 제목'}</div>
                        <div className='alarm-text'>{'2024.02.15'}</div>
                    </div>
                    <div className='tab-bottom-text-box'>
                        <div className='bottom-text alarm-bottom-text'>{'게시글의 알림 내용이 들어가는 곳입니다'}</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AlarmTab;