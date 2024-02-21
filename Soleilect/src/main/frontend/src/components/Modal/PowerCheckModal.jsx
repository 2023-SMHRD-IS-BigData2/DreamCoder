import React, { useEffect, forwardRef, useRef, useState, useContext } from 'react';
import './style.css';
import axios from 'axios';
import { ChartContext } from '../../context/ChartContext';


const PowerCheckModal = forwardRef((props, ref) => {
    const { list, setList } = useContext(ChartContext);
    const { setModalOpen ,modalOpen } = props;
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

    // state 신청완료 버튼 상태
    const [button, setButton] = useState('');

    // event handler 발전소 선택 클릭 이벤트
    const onPowerCheckClickHandler = () => {
        setButton(true)
        console.log('클릭');
    }


    // useEffect(() => {
    //     if (button) {
    //         let formData = new FormData();
    //         console.log();
    //         formData.append("party_seq", list[num].party_seq)
    //         axios
    //             .post('/Sol/partyBoardCon/delete', formData)
    //             .then((res) => {
    //                 setList(res.data.data)
    //                 console.log(res.data.data);
    //                 console.log('삭제 완료');
    //                 // nav('/PartyBoardList')
    //             })
    //             .catch((error) => {
    //                 console.log(error)
    //             })
    //     }

    // }, [button])

    return (
        <div className='Modal'>
            <div ref={modalRef} className='container'>
                <div className='auth-card-box'>
                    <div className='auth-card-top'>
                        <div className='auth-card-title-box'>
                            <div className='auth-card-title'>{'발전소 선택'}</div>
                            <button className='close' onClick={closeModal}>
                                X
                            </button>
                        </div>
                        <div className='p_tab-content-list'>
                            <div className='p_tab-content-box'>
                                <div className='p_tab-image-box'>
                                    <div className='p_tab-image'></div>
                                </div>
                                <div className='p_tab-text-content-box p_owned'>
                                    <div className='p_tab-top-text-box'>
                                        <div className='p_border-text-box'>
                                            <div className='p_border-text'>{'발전량'}</div>
                                        </div>
                                        <div className='p_content-name'>{'발전소 이름'}</div>
                                    </div>
                                    <div className='p_tab-bottom-text-box'>
                                        <div className='p_bottom-text'>{'발전소위치가들어가는곳'}</div>
                                    </div>
                                </div>
                                <div className='p_tab-content-button-list'>
                                    <div className='p_tab-content-edit-button-box'>
                                        {/* <div className='edit-button' onClick={onOwnPowerModalDeleteClickHandler}>{'선택하기'}</div> */}
                                        <div className='p_edit-button' onClick={onPowerCheckClickHandler} >{'선택하기'}</div>
                                    </div>
                                </div>
                            </div>
                            {/* {modalOpen && <OwnPowerModal setModalOpen={setModalOpen} setModalPage={modalPage} />} */}
                        </div>
                        {/* {page === '1' && (
                                    <>
                                        <InputBox ref={plNameRef} label='발전소 이름*' type='text' name='user_id' placeholder='발전소 이름을 입력해주세요' onChange={onPlNameChangeHandler} error={isPlNameError} message={plNameErrorMessage} onkeyDown={onPlNameKeyDownHandler} />
                                        <InputBox ref={pladdressRef} label='발전소 주소*' type='text' name='user_id' placeholder='발전소 주소를 입력해주세요' value={pladdress} onChange={onPlAddressChangeHandler} icon={addressButtonIcon} onButtonClick={onAddressButtonClickHandler} error={isPlAddressError} message={plAddressErrorMessage} onkeyDown={onPlAddressKeyDownHandler} />
                                    </>
                                )}
                                {page === '2' && (
                                    <>
                                        <InputBox ref={generationRef} label='발전량(kw)*' type='text' name='user_id' placeholder='발전량을 입력해주세요' onChange={onGenerationChangeHandler} error={isGenerationError} message={generationErrorMessage} onkeyDown={onGenerationKeyDownHandler} />
                                        <InputBox ref={bnumberRef} label='사업자 번호*' type='text' name='user_id' placeholder='사업자 번호를 입력해주세요' onChange={onBnumberChangeHandler} error={isBnumberError} message={bnumberErrorMessage} onkeyDown={onBnumberKeyDownHandler} />
                                    </>
                                )} */}
                    </div>
                    <div className='auth-card-bottom'>
                        {/* {page === '1' && (
                                    <div className='black-large-full-button' onClick={onNextButtonClickHandler}>{'다음 단계'}</div>
                                )}
                                {page === '2' && (
                                    <div className='black-large-full-button' onClick={onsubmitPlantButtonClickHandler} type='submit'>{'등록하기'}</div>
                                )} */}
                        <div className='auth-description-box'>
                            <div className='auth-description'></div>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
});

export default PowerCheckModal