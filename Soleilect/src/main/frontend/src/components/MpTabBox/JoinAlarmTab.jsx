import React, { useState } from 'react';
import './style.css';
import AlarmSuccessModal from '../Modal/AlarmSuccessModal';
import axios from 'axios';

const JoinAlarmTab = (props) => {
    const { target_cnt, party_title, start_at, end_at, party_content, now_cnt, index, user_nick, pl_power, pl_name,list_seq,pl_seq,party_seq } = props;
    //          state: 모달창 상태 
    const [modalOpen, setModalOpen] = useState(false);
    const [toggle, setToggle] = useState('');
    const partyAccept = () => {
        let formData = new FormData();
        formData.append("list_seq",list_seq)
        formData.append("pl_seq",pl_seq)
        axios
            .post('/Sol/partyApplyCon/accept', formData)
            .then((res) => {
            })
            .catch((error) => {
                console.log(error)
            })
    };
    const partyDeny = () => {
        let formData = new FormData();
        formData.append("list_seq",list_seq)
        axios
            .post('/Sol/partyApplyCon/refuse', formData)
            .then((res) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error)
            })
    };
    const plusPartyPower = () => {
        let formData = new FormData();
        formData.append("party_seq",party_seq)
        formData.append("now_cnt",pl_power)
        axios
            .post('/Sol/partyApplyCon/pbUpdate', formData)
            .then((res) => {
                window.location.reload();
            })
            .catch((error) => {
                console.log(error)
            })
    };
    const onJoinAlarmAgree = () => {
        partyAccept();
        plusPartyPower();
        setToggle('agree');
        setModalOpen(true);
    }
    const onJoinAlarmDeny = () => {
        partyDeny();
        setToggle('deny');
        setModalOpen(true);
    }
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
                        {/* <div className='border-text-box'>
                            <div className='alarm-tab border-text'>{target_cnt / 1000 + 'MW'}</div>
                        </div> */}
                        <div className='content-name'>{party_title}</div>
                    </div>
                    {/* <div className='tab-bottom-text-box'>
                        <div className='bottom-text'>{start_at + '-' + end_at}</div>
                    </div> */}
                </div>
                <div className='v-line'></div>
                <div className='alarm-tab-second-text-content-box'>
                    <div className='tab-top-second-text-box'>
                        <div className='second-content-name'>{user_nick}</div>
                        {/* <div className='second-bottom-text'>{'2024.02.15'}</div> */}
                    </div>
                    <div className='second-inner-box'>
                        <div className='second-inner-box-left'>
                            <div className='second-inner-box-left-top'>
                                <div className='second-inner-box-text'>{pl_power}</div>
                                <div className='second-inner-box-text-box'>
                                    <div className='second-inner-box-text'>{pl_name}</div>
                                </div>
                            </div>
                            <div className='second-inner-box-left-bottom'>
                                {/* <div className='second-inner-box-text'>{'발전소 위치'}</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='alarm-delete-content-box'>
                    <div className='delete-button' onClick={onJoinAlarmDeny}>X</div>
                </div>
                <div className='accept-join-button-box' onClick={onJoinAlarmAgree}>{'수락하기'}</div>
                {modalOpen && <AlarmSuccessModal toggle={toggle} setModalOpen={setModalOpen} user_nick={user_nick} />}
                {modalOpen && <AlarmSuccessModal toggle={toggle} setModalOpen={setModalOpen} user_nick={user_nick} />}
            </div>
        </div>
    );
};

export default JoinAlarmTab;