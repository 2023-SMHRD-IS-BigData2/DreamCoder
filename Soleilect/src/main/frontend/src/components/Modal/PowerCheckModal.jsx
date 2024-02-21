import React, { useEffect, forwardRef, useRef, useState, useContext } from 'react';
import './style.css';
import axios from 'axios';
import { ChartContext } from '../../context/ChartContext';


const PowerCheckModal = forwardRef((props, ref) => {
    const { list, setList } = useContext(ChartContext);
    const { setModalOpen, modalOpen } = props;
    const closeModal = () => {
        setModalOpen(false);
    };
    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef(null);
    //          state: 페이지 상태 



    // ------- 나의 발전소 가져오기
    useEffect(() => {
        let formData = new FormData();
        console.log(sessionStorage.getItem('user_id'));
        formData.append("user_id", sessionStorage.getItem('user_id'))
        axios
            .post('/Sol/myPageCon/plantList', formData)
            .then((res) => {
                setList(res.data.data)
                console.log(res.data.data);
                console.log('나의 발전소 출력 완료');
                // nav('/PartyBoardList')
            })
            .catch((error) => {
                console.log(error)
            })
    }, [modalOpen])

    const deleteMyPlant = () => {
        let formData = new FormaData();
    }

    // event handler : 모집 게시글 삭제하기 버튼 클릭
    const ondeletePartyBoardClickHandler = () => {
        {deletePartyBoard()}
    }


    return (
        <div className='Modal'>
            <div ref={modalRef} className='delete-container'>
                <button className='close' onClick={closeModal}>
                    X
                </button>
                <div className='delete-modal-text'>{pl_name}</div>
                <div className='delete-modal-text'> 게시글을 삭제하시겠습니까?</div>
                <div className='delete-ownplant-button-box'>
                    <div className='delete-ownplant-button' onClick={ondeletePartyBoardClickHandler}>{'삭제하기'}</div>
                </div>
            </div>
        </div>
    )
});

export default PowerCheckModal