import React, { useState } from 'react';
import './style.css';
import OwnPowerModal from '../Modal/OwnPowerModal';

const OwnPowerTab = () => {
    //          state: 모달창 상태 
    const [modalOpen, setModalOpen] = useState(false);
    //          state: 모달페이지 상태
    const [modalPage, setModalPage] = useState('');
    //          event handler: 발전소 수정하기 버튼 클릭 이벤트 핸들러
    const onOwnPowerModalClickHandler = () => {
        setModalPage('edit-plant');
        setModalOpen(true);
    }
    //          event handler: 삭제하기 버튼 클릭 이벤트 핸들러
    const onOwnPowerModalDeleteClickHandler = () => {
        setModalPage('delete-plant');
        setModalOpen(true)

    }


    return (
        <div className='tab-content-list'>
            <div className='tab-content-box'>
                <div className='tab-image-box'>
                    <div className='tab-image'></div>
                </div>
                <div className='tab-text-content-box owned'>
                    <div className='tab-top-text-box'>
                        <div className='border-text-box'>
                            <div className='border-text'>{'발전량'}</div>
                        </div>
                        <div className='content-name'>{'발전소 이름'}</div>
                    </div>
                    <div className='tab-bottom-text-box'>
                        <div className='bottom-text'>{'발전소위치가들어가는곳'}</div>
                    </div>
                </div>
                <div className='tab-content-button-list'>
                    <div className='delete-content-box' onClick={onOwnPowerModalDeleteClickHandler}>
                        <div className='delete-button'>X</div>
                    </div>
                    <div className='tab-content-edit-button-box'>
                        <div className='edit-button' onClick={onOwnPowerModalClickHandler}>{'수정하기'}</div>
                    </div>
                </div>
            </div>
            {modalOpen && <OwnPowerModal setModalOpen={setModalOpen} setModalPage={modalPage} />}
        </div>
    );
};

export default OwnPowerTab;