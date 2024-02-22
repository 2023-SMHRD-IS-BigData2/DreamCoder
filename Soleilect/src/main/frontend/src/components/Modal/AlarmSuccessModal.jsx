import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactConfetti from 'react-confetti';
import './style.css';

const AlarmSuccessModal = ({ setModalOpen, user_nick, toggle }) => {
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
            {toggle == 'agree' &&
                <div className='Modal'>
                    <div ref={modalRef} className='delete-container'>
                        <button className='close' onClick={closeModal}>
                            X
                        </button>
                        <div className='delete-modal-text'>{'환영합니다!'}</div>
                        <div className='delete-modal-text'>{user_nick + '님의'}</div>
                        <div className='delete-modal-text'>{'신청을 수락했습니다'}</div>
                        {/* <div className='delete-ownplant-button-box'>
                        <div className='delete-ownplant-button' onClick={onSignInButtonClickHandler}>{'로그인하기'}</div>
                    </div> */}
                    </div>
                </div>
            }
            {toggle == 'deny' &&
                <div className='Modal'>
                    <div ref={modalRef} className='delete-container'>
                        <button className='close' onClick={closeModal}>
                            X
                        </button>
                        <div className='delete-modal-text'>{user_nick + '님의'}</div>
                        <div className='delete-modal-text'>{'신청을'}</div>
                        <div className='delete-modal-text'>{'거절했습니다'}</div>
                        {/* <div className='delete-ownplant-button-box'>
                        <div className='delete-ownplant-button' onClick={onSignInButtonClickHandler}>{'로그인하기'}</div>
                    </div> */}
                    </div>
                </div>
            }
        </>
    );

};

export default AlarmSuccessModal;