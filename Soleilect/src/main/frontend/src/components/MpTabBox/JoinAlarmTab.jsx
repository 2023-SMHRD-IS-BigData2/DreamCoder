import React from 'react';
import './style.css';

const JoinAlarmTab = (props) => {
    const { target_cnt, party_title, start_at, end_at, party_content, now_cnt, index } = props;
    return (
        <div className='tab-content-list'>
            <div className='tab-content-box'>
                {/* <div className='alarm-circle-icon-box'>
                    <div className='icon alarm-circle-icon'></div>
                </div> */}
                <div className='tab-image-box'>
                    <div className='tab-image'></div> {/*여기에 차트 들어가야함 */}
                </div>
                <div className='alarm-tab-text-content-box'>
                    <div className='tab-top-text-box'>
                        <div className='border-text-box'>
                            <div className='alarm-tab border-text'>{target_cnt / 1000 + 'MW'}</div>
                        </div>
                        <div className='content-name'>{party_title}</div>
                    </div>
                    <div className='tab-bottom-text-box'>
                        <div className='bottom-text'>{start_at + '-' + end_at}</div>
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