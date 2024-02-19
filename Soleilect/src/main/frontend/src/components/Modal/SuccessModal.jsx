import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactConfetti from 'react-confetti';
import './style.css';

const SuccessModal = ({ setModalOpen }) => {
    const nav = useNavigate();
    const closeModal = () => {
        setModalOpen(false);
    };
    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef(null);

    //          event handler: 로그인 버튼 클릭 이벤트 처리 
    const onSignInButtonClickHandler = () => {
        nav('/SignIn');
    }
    return (
        <>
            <div className='Modal'>
                <div ref={modalRef} className='delete-container'>
                    <button className='close' onClick={closeModal}>
                        X
                    </button>
                    <div className='delete-modal-text'>{'환영합니다!'}</div>
                    <div className='delete-modal-text'>{'솔라일렛트'}</div>
                    <div className='delete-ownplant-button-box'>
                        <div className='delete-ownplant-button' onClick={onSignInButtonClickHandler}>{'로그인하기'}</div>
                    </div>
                </div>
                <ReactConfetti 
                    width={window.innerWidth}
                    height={window.innerHeight}
                    gravity={0.3}
                />
            </div>
        </>
    );

};

export default SuccessModal;