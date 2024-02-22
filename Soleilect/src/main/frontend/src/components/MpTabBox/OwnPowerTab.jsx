import React, { useState } from 'react';
import './style.css';
import OwnPowerModal from '../Modal/OwnPowerModal';

const OwnPowerTab = (props) => {
    const { pl_power, pl_name, pl_loc, pl_seq, pl_isJoin } = props;
    //          state: 모달창 상태 
    const [modalOpen, setModalOpen] = useState(false);
    //          state: 모달페이지 상태
    const [modalPage, setModalPage] = useState('');
    // //          event handler: 발전소 수정하기 버튼 클릭 이벤트 핸들러
    // const onOwnPowerModalClickHandler = () => {
    //     setModalPage('edit-plant');
    //     setModalOpen(true);
    // }


    //          event handler: 삭제하기 버튼 클릭 이벤트 핸들러
    const onOwnPowerModalDeleteClickHandler = () => {
        if(pl_isJoin == 0){
            setModalPage('delete-plant');
            setModalOpen(true)
        }else{
            alert('프로젝트에 참여중인 발전소입니다.')
        }

    }


    return (
        <>
            {pl_isJoin == 0 &&
                <div className='tab-content-list'>
                    <div className='tab-content-box'>
                        <div className='tab-image-box'>
                            <div className='icons solar-power-icon'></div>
                        </div>
                        <div className='tab-text-content-box owned'>
                            <div className='tab-top-text-box'>
                                <div className='border-text-box'>
                                    <div className='border-text'>{pl_power / 1000 + 'MW'}</div>
                                </div>
                                <div className='content-name'>{pl_name}</div>
                            </div>
                            <div className='tab-bottom-text-box'>
                                <div className='bottom-text'>{pl_loc}</div>
                            </div>
                        </div>
                        <div className='tab-content-button-list'>
                            <div className='tab-content-edit-button-box'>
                                <div className='edit-button' onClick={onOwnPowerModalDeleteClickHandler}>{'삭제하기'}</div>
                            </div>
                        </div>
                    </div>
                    {modalOpen && <OwnPowerModal pl_seq={pl_seq} pl_name={pl_name} setModalOpen={setModalOpen} setModalPage={modalPage} />}
                </div>
            }
            {pl_isJoin == 1 &&
                <div className='tab-content-list'>
                    <div className='tab-content-box-joined'>
                        <div className='tab-image-box'>
                            <div className='icons solar-power-icon'></div>
                        </div>
                        <div className='tab-text-content-box owned'>
                            <div className='tab-top-text-box'>
                                <div className='border-text-box'>
                                    <div className='border-text'>{pl_power / 1000 + 'MW'}</div>
                                </div>
                                <div className='content-name'>{pl_name}</div>
                                <div className='content-name-joined'>{'그룹 참여중'}</div>
                            </div>
                            <div className='tab-bottom-text-box'>
                                <div className='bottom-text'>{pl_loc}</div>
                            </div>
                        </div>
                        <div className='tab-content-button-list'>
                            <div className='tab-content-edit-button-box-joined'>
                                <div className='edit-button' onClick={onOwnPowerModalDeleteClickHandler}>{'삭제하기'}</div>
                            </div>
                        </div>
                    </div>
                    {modalOpen && <OwnPowerModal pl_seq={pl_seq} pl_name={pl_name} setModalOpen={setModalOpen} setModalPage={modalPage} />}
                </div>
            }
        </>
    );
};

export default OwnPowerTab;