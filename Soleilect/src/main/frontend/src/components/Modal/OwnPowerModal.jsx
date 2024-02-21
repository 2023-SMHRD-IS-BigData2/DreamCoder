import React, { useEffect, forwardRef, useRef, useState } from 'react';
import './style.css';
import InputBox from '../InputBox';
import { Address, useDaumPostcodePopup } from 'react-daum-postcode';
import axios from 'axios';

const OwnPowerModal = forwardRef((props, ref) => {
    const { pl_name,pl_seq,setModalOpen, setModalPage } = props;
    const closeModal = () => {
        setModalOpen(false);
    };
    // 모달 외부 클릭시 끄기 처리
    // Modal 창을 useRef로 취득
    const modalRef = useRef(null);
    //          state: 페이지 상태 
    const modalPagestate = setModalPage;
    //           발전소 등록하기
    const submitMyPlant = () => {
        let formData = new FormData();
        formData.append("user_id", sessionStorage.getItem("user_id"))
        formData.append("pl_name", plName)
        formData.append("pl_loc", pladdress)
        formData.append("bs_num", bnumber)
        formData.append("pl_power", generation)
        axios
          .post('/Sol/myPageCon/plantInsert', formData)
          .then((response) => {
            // console.log(response.data)
            alert('발전소 등록완료')
            setModalOpen(false)
          })
          .catch((error) => {
            console.log(error)
          })
    
      };

      const deleteMyPlant = () => {
        let formData = new FormData();
        formData.append("pl_seq", pl_seq)

        axios
          .post('/Sol/myPageCon/plantDelete', formData)
          .then((response) => {
            alert('발전소 삭제완료')
            setModalOpen(false)
          })
          .catch((error) => {
            console.log(error)
          })
    
      };

    // useEffect(() => {
    //     // 이벤트 핸들러 함수
    //     const handler = (event) => {
    //         // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
    //         if (modalRef.current && !modalRef.current.contains(event.target)) {
    //             setModalOpen(false);
    //         }
    //     };

    //     // 이벤트 핸들러 등록
    //     document.addEventListener('mousedown', handler);

    //     return () => {
    //         // 이벤트 핸들러 해제
    //         document.removeEventListener('mousedown', handler);
    //     };
    // }, [setModalOpen]);


    //          state: 발전소 이름 요소 참조 상태 
    const plNameRef = useRef(null);
    //          state: 발전소 주소 요소 참조 상태 
    const pladdressRef = useRef(null);
    //          state: 발전량 요소 참조 상태 
    const generationRef = useRef(null);
    //          state: 사업자번호 요소 참조 상태 
    const bnumberRef = useRef(null);


    //          state: 페이지 상태 
    const [page, setPage] = useState('1');
    //          state: 발전소 이름 상태 
    const [plName, setPlName] = useState('');
    //          state: 발전소 주소 상태 
    const [pladdress, setPlAddress] = useState('');
    //          state: 발전량 상태 
    const [generation, setGeneration] = useState('');
    //          state: 사업자번호 상태 
    const [bnumber, setBnumber] = useState('');

    //          state: 발전소 이름 에러 상태 
    const [isPlNameError, setPlNameError] = useState(false);
    //          state: 발전소 주소 에러 상태 
    const [isPlAddressError, setPlAddressError] = useState(false);
    //          state: 발전량 에러 상태 
    const [isGenerationError, setGenerationError] = useState(false);
    //          state: 사업자번호 에러 상태 
    const [isBnumberError, setBnumberError] = useState(false);

    //          state: 발전소 이름 에러 메세지 상태 
    const [plNameErrorMessage, setPlNameErrorMessage] = useState('');
    //          state: 발전소 주소 에러 메세지 상태 
    const [plAddressErrorMessage, setPlAddressErrorMessage] = useState('');
    //          state: 발전량 에러 메세지 상태 
    const [generationErrorMessage, setGenerationErrorMessage] = useState('');
    //          state: 사업자번호 에러 메세지 상태 
    const [bnumberErrorMessage, setBnumberErrorMessage] = useState('');

    //          state: 주소입력 아이콘 상태 
    const [addressButtonIcon, setAddressButtonIcon] = useState('expand-right-light-icon');

    //          function: 다음 주소 검색 팝업 오픈 함수
    const open = useDaumPostcodePopup();

    //          event handler: 다음 버튼 클릭 이벤트 처리 
    const onNextButtonClickHandler = () => {
        const hasPlName = plName.trim().length !== 0;
        if (!hasPlName) {
            setPlNameError(true);
            setPlNameErrorMessage('발전소 이름을 입력해주세요')
        }
        const hasPlAddress = pladdress.trim().length !== 0;
        if (!hasPlAddress) {
            setPlAddressError(true);
            setPlAddressErrorMessage('주소를 입력해주세요')
        }
        if (!hasPlName || !hasPlAddress) {
            setPage('1');
            return;
        }
        setPage('2');
    }
    //          event handler: 등록하기 버튼 클릭 이벤트 처리 
    const onsubmitPlantButtonClickHandler = () => {
        const generationPattern = /[0-9]/
        const isGenertationPattern = generationPattern.test(generation);
        if (!isGenertationPattern) {
            setGenerationError(true);
            setGenerationErrorMessage('숫자만 입력해주세요.')
        }
        const bnumberPattern = /[0-9]{10}$/
        const isBnumberPattern = bnumberPattern.test(bnumber);
        if (!isBnumberPattern) {
            setBnumberError(true);
            setBnumberErrorMessage('사업자 번호 형태가 맞지 않습니다.');
        }
        if (!isGenertationPattern || !isBnumberPattern) return;
        {submitMyPlant()};
    }

    //          event handler: 발전소 이름 변경 이벤트 처리 
    const onPlNameChangeHandler = (event) => {
        const { value } = event.target;
        setPlName(value);
        setPlNameError(false);
        setPlNameErrorMessage('');
    }
    //          event handler: 발전소 주소 변경 이벤트 처리 
    const onPlAddressChangeHandler = (event) => {
        const { value } = event.target;
        setPlAddress(value);
        setPlAddressError(false);
        setPlAddressErrorMessage('');
    }
    //          event handler: 발전량 변경 이벤트 처리 
    const onGenerationChangeHandler = (event) => {
        const { value } = event.target;
        setGeneration(value);
        setGenerationError(false);
        setGenerationErrorMessage('');
    }
    //          event handler: 사업자번호 변경 이벤트 처리 
    const onBnumberChangeHandler = (event) => {
        const { value } = event.target;
        setBnumber(value);
        setBnumberError(false);
        setBnumberErrorMessage('');
    }
    //          event handler: 주소 버튼 클릭 이벤트 처리
    const onAddressButtonClickHandler = () => {
        open({ onComplete });
    }


    //          event handler: 발전소 이름 키 다운 이벤트 처리 
    const onPlNameKeyDownHandler = (event) => {
        if (event.key !== 'Enter') return;
        if (!pladdressRef.current) return;
        onAddressButtonClickHandler();
        pladdressRef.current.focus();
    }
    //          event handler: 발전소 주소 키 다운 이벤트 처리 
    const onPlAddressKeyDownHandler = (event) => {
        if (event.key !== 'Enter') return;
        onNextButtonClickHandler();
    }
    //          event handler: 발전량 키 다운 이벤트 처리 
    const onGenerationKeyDownHandler = (event) => {
        if (event.key !== 'Enter') return;
        if (!bnumberRef.current) return;
        bnumberRef.current.focus();
    }
    //          event handler: 사업자번호 키 다운 이벤트 처리 
    const onBnumberKeyDownHandler = (event) => {
        if (event.key !== 'Enter') return;
        onsubmitPlantButtonClickHandler();
    }
    //          event handler: 다음 주소 검색 완료 이벤트 처리
    const onComplete = (data) => {
        const { address } = data;
        setPlAddress(address);
        setPlAddressError(false);
        setPlAddressErrorMessage('');

    }
    //              event handler: 보유 발전소 삭제하기 버튼 클릭 이벤트
    const deletOwnPlantClickHandler = () => {
        {deleteMyPlant()}
    }

    return (
        <>
            {modalPagestate === 'add-plant' && (
                <div className='Modal'>
                    <div ref={modalRef} className='container'>
                        <div className='auth-card-box'>
                            <div className='auth-card-top'>
                                <div className='auth-card-title-box'>
                                    <div className='auth-card-title'>{'발전소 등록'}</div>
                                    <div className='auth-card-page'>{`${page}/2`}</div>
                                    <button className='close' onClick={closeModal}>
                                        X
                                    </button>
                                </div>
                                {page === '1' && (
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
                                )}
                            </div>
                            <div className='auth-card-bottom'>
                                {page === '1' && (
                                    <div className='black-large-full-button' onClick={onNextButtonClickHandler}>{'다음 단계'}</div>
                                )}
                                {page === '2' && (
                                    <div className='black-large-full-button' onClick={onsubmitPlantButtonClickHandler} type='submit'>{'등록하기'}</div>
                                )}
                                <div className='auth-description-box'>
                                    <div className='auth-description'></div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            )}
            {/* {modalPagestate === 'edit-plant' && (
                <div className='Modal'>
                    <div ref={modalRef} className='container'>
                        <div className='auth-card-box'>
                            <div className='auth-card-top'>
                                <div className='auth-card-title-box'>
                                    <div className='auth-card-title'>{'발전소 수정'}</div>
                                    <div className='auth-card-page'>{`${page}/2`}</div>
                                    <button className='close' onClick={closeModal}>
                                        X
                                    </button>
                                </div>
                                {page === '1' && (
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
                                )}
                            </div>
                            <div className='auth-card-bottom'>
                                {page === '1' && (
                                    <div className='black-large-full-button' onClick={onNextButtonClickHandler}>{'다음 단계'}</div>
                                )}
                                {page === '2' && (
                                    <div className='black-large-full-button' onClick={onsubmitPlantButtonClickHandler} type='submit'>{'수정하기'}</div>
                                )}
                                <div className='auth-description-box'>
                                    <div className='auth-description'></div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
            )} */}
            {modalPagestate === 'delete-plant' && (
                <div className='Modal'>
                    <div ref={modalRef} className='delete-container'>
                        <button className='close' onClick={closeModal}>
                            X
                        </button>
                        <div className='delete-modal-text'>{pl_name}</div>
                        <div className='delete-modal-text'>발전소 정보를 삭제하시겠습니까?</div>
                        <div className='delete-ownplant-button-box'>
                            <div className='delete-ownplant-button' onClick={deletOwnPlantClickHandler}>{'삭제하기'}</div>
                        </div>
                    </div>
                </div>
            )}
        </>


    );

});

export default OwnPowerModal;