import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom';

const MessageListBox = () => {
    //      state: 유저 검색창 상태
    const [searchbox, setSearchbox] = useState(false);

    //          components: 유저검색창 컴포넌트
    const UserSearchBoxModal = () => {
        const closeModal = () => {
            setSearchbox(false);
        };
        // 모달 외부 클릭시 끄기 처리
        // Modal 창을 useRef로 취득
        const modalRef = useRef(null);
        useEffect(() => {
            // 이벤트 핸들러 함수
            const handler = (event) => {
                // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
                if (modalRef.current && !modalRef.current.contains(event.target)) {
                    setSearchbox(false);
                }
            };

            // 이벤트 핸들러 등록
            document.addEventListener('mousedown', handler);

            return () => {
                // 이벤트 핸들러 해제
                document.removeEventListener('mousedown', handler);
            };
        }, [setSearchbox]);
        return (
            <div ref={modalRef} className='user-search-box'>
                <div className='user-box-content'>
                    <div className='user-search-icon-box'>
                        <div className='user-search-icon'></div>
                    </div>
                    <div className='user-search-nickname'>{'검색어가포함된닉'}</div>
                </div>
                <div className='user-box-content'>
                    <div className='user-search-icon-box'>
                        <div className='user-search-icon'></div>
                    </div>
                    <div className='user-search-nickname'>{'검색어가포함된닉'}</div>
                </div>
                <div className='user-box-content'>
                    <div className='user-search-icon-box'>
                        <div className='user-search-icon'></div>
                    </div>
                    <div className='user-search-nickname'>{'검색어가포함된닉'}</div>
                </div>
                <div className='user-box-content'>
                    <div className='user-search-icon-box'>
                        <div className='user-search-icon'></div>
                    </div>
                    <div className='user-search-nickname'>{'검색어가포함된닉'}</div>
                </div>
            </div>
        );
    }

    //        component: 검색 버튼 컴포넌트
    const SearchButton = () => {

        //      state: 검색 버튼 요소 참조 상태
        const searchButtonRef = useRef(null);
        //      state: 검색어 상태
        const [word, setWord] = useState('');
        //      state: 검색어 path variable 상태
        const { searchWord } = useParams();


        //        event handler: 검색어 변경 이벤트 처리 함수
        const onSearchWordChangeHandler = (event) => {
            const value = event.target.value;
            setWord(value);
        };
        //        event handler: 검색어 키 이벤트 처리 함수
        const onSearchWordKeyDownHandler = (event) => {
            if (event.key !== 'Enter') return;
            if (!searchButtonRef.current) return;
            searchButtonRef.current?.click();
        };

        //        effect: 검색어 path variable 변경 될때마가 실행될 함수
        useEffect(() => {
            if (searchWord) {
                setWord(searchWord);
            }
        }, [searchWord]);

        //        event handler: 검색버튼클릭 이벤트
        const searchUser = () => {
            setSearchbox(true);
        }

        return (
            <div className='header-search-input-box'>
                <input className='header-search-input' type='text' placeholder='닉네임을 입력해주세요.' value={word} onChange={onSearchWordChangeHandler} onKeyDown={onSearchWordKeyDownHandler} />
                <div ref={searchButtonRef} className='icon-button' onClick={searchUser}>
                    <div className='icon search-light-icon'></div>
                </div>
            </div>
        );
    };
    //          state: 쪽지방 클릭 상태 
    const RoomClickEvenHandler = () => {

    }
    const MessageRoom = ({ clicked, onClick }) => {
        return (
            <div className='messageRoom-wrapper'>
                <div className={clicked ? 'messageRoom-container-active' : 'messageRoom-container'} onClick={onClick}>
                    <div className='messageRoom-icon-box'>
                        <div className='messageRoom-icon'></div>
                    </div>
                    <div className='messageRoom-text-box'>
                        <div className='messageRoom-top-text'>
                            <div className='messageRoom-nickname'>{'닉네임'}</div>
                            <div className='messageRoom-date'>{'Jan 21'}</div>
                        </div>
                        <div className='messageRoom-bottom-text-box'>
                            <div className='messageRoom-bottom-text'>{'마지막쪽지내용마지막쪽지내용마지막쪽지내용마지막쪽지내용'}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='messageListBox-container'>
            <div className='messageListBox-top'>
                <SearchButton />
                {searchbox && <UserSearchBoxModal />}
            </div>
            <div className='messageListBox-middle'>
                <MessageRoom onClick={RoomClickEvenHandler} />
                <MessageRoom onClick={RoomClickEvenHandler} />
                <MessageRoom onClick={RoomClickEvenHandler} />
            </div>
            <div className='messageListBox-bottom'></div>
        </div>
    )
}
export default MessageListBox