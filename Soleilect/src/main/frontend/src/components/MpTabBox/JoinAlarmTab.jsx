import React from 'react';
import './style.css';

const JoinAlarmTab = () => {

    return (
        <div className='tab-content-list'>
            <div className='tab-content-box'>
                {/* <div className='alarm-circle-icon-box'>
                    <div className='icon alarm-circle-icon'></div>
                </div> */}
                <div className='tab-image-box'>
                    <div className='tab-image'></div>
                </div>
                <div className='alarm-tab-text-content-box'>
                    <div className='tab-top-text-box'>
                        <div className='border-text-box'>
                            <div className='alarm-tab border-text'>{'모집량'}</div>
                        </div>
                        <div className='content-name'>{'모집게시글의 제목이 들어가는 곳'}</div>
                    </div>
                    <div className='tab-bottom-text-box'>
                        <div className='bottom-text'>{'2024.02.15-2024.03.15'}</div>
                    </div>
                </div>
                <div class='v-line'></div>
                <div className='alarm-tab-second-text-content-box'>
                    <div className='tab-top-second-text-box'>
                        <div className='second-content-name'>{'닉네임'}</div>
                        <div className='second-bottom-text'>{'2024.02.15'}</div>
                    </div>
                    <div className='second-inner-box'>
                        <div className='second-inner-box-left'>
                            <div className='second-inner-box-left-top'>
                                <div className='second-inner-box-text'>{'발전량'}</div>
                                <div className='second-inner-box-text-box'>
                                    <div className='second-inner-box-text'>{'발전소이름'}</div>
                                </div>
                            </div>
                            <div className='second-inner-box-left-bottom'>
                                <div className='second-inner-box-text'>{'발전소 위치'}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='alarm-delete-content-box'>
                        <div className='delete-button'>X</div>
                    </div>
                <div className='accept-join-button-box'>{'수락하기'}</div>

            </div>
        </div>
    );
};

export default JoinAlarmTab;