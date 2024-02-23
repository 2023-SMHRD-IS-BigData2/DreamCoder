import React, { useEffect, useRef, useState } from 'react'
import './style.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const MessageListBox = () => {
    //      state: 유저 검색창 상태
    const [searchbox, setSearchbox] = useState(false);
    //      state: 유저 검색창 상태
    const [saveSearchNickList, setSaveSearchNickList] = useState([]);
    //      state: 검색한 유저 저장 상태
    const [saveSelectNickList, setSelectSearchNickList] = useState('');
    //      state: 쪽지방 리스트 상태
    const [msgGroupList, setMsgGroupList] = useState([]);
    //      state: 쪽지방 클릭상태
    const [activeRoom, setActiveRoom] = useState(null); // 활성화된 방의 인덱스를 상태로 관리

    const RoomClickEvenHandler = (index) => {
        setActiveRoom(index); // 클릭된 방의 인덱스를 상태로 설정
    };

    useEffect(() => {
        msgGroupListRender();
    }, []);
    const readMyMsgGroup = (res) => {
        setMsgGroupList(res);
    };
    //      참여중인 쪽지방 리스트
    const msgGroupListRender = () => {
        let formData = new FormData();
        formData.append("sender_id", sessionStorage.getItem("user_id"))
        axios
            .post('/Sol/chatsCon/groupList', formData)
            .then((response) => {
                console.log(response.data.data);
                readMyMsgGroup(response.data.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //        component: 검색 버튼 컴포넌트
    const SearchButton = () => {

        //      state: 검색 버튼 요소 참조 상태
        const searchButtonRef = useRef(null);
        //      state: 검색어 상태
        const [word, setWord] = useState('');
        //      state: 검색어 path variable 상태
        const { searchWord } = useParams();

        //      유저 닉네임 검색
        const searchUserNick = () => {
            let formData = new FormData();
            formData.append("search", word)
            axios
                .post('/Sol/userCon/search', formData)
                .then((response) => {
                    setSaveSearchNickList(response.data.data);
                })
                .catch((error) => {
                    console.log(error)
                })
        }

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
            { searchUserNick() }
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
    //          components: 유저검색창 컴포넌트
    const UserSearchBoxModal = () => {

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
        //          event handler: 검색한 유저 클릭시
        const SelectSearchNick = (event) => {
            const selectedNick = event.currentTarget.getAttribute('data-nick');
            const selectedNickId = event.currentTarget.getAttribute('data-id');
            console.log(selectedNick);
            console.log(selectedNickId);
            setSelectSearchNickList(selectedNick);
            sessionStorage.setItem("receiver", selectedNick);
            sessionStorage.setItem("receiver_id", selectedNickId);
            window.location.reload();
        }
        return (
            <div ref={modalRef} className='user-search-box'>
                {saveSearchNickList && saveSearchNickList.map((item, index) => (
                    <div key={item.user_nick} data-nick={item.user_nick} data-id={item.user_id} className='user-box-content' onClick={SelectSearchNick}>
                        <div className='user-search-icon-box'>
                            <div className='user-search-icon'></div>
                        </div>
                        <div className='user-search-nickname'>{item.user_nick}</div>
                    </div>
                ))}
            </div>
        );
    }

    const MessageRoom = ({ isActive, onClick, receiver_nick, created_at, chat_msg, chat_group_seq, index }) => {
        return (
            <div className='messageRoom-wrapper'>
                <div className={isActive ? 'messageRoom-container-active' : 'messageRoom-container'} onClick={() => onClick(index)}>
                    <div className='messageRoom-icon-box'>
                        <div className='messageRoom-icon'></div>
                    </div>
                    <div className='messageRoom-text-box'>
                        <div className='messageRoom-top-text'>
                            <div className='messageRoom-nickname'>{receiver_nick}</div>
                            <div className='messageRoom-date'>{created_at}</div>
                        </div>
                        <div className='messageRoom-bottom-text-box'>
                            <div className='messageRoom-bottom-text'>{chat_msg}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='messageListBox-container'>
            <div className='messageListBox-top'>
                <SearchButton />
                {searchbox && <UserSearchBoxModal />}
            </div>
            <div className='messageListBox-middle'>
                {msgGroupList && msgGroupList.map((item, index) => (
                    <MessageRoom
                        isActive={index === activeRoom}
                        chat_group_seq={item.chat_group_seq}
                        receiver_nick={item.receiver_nick}
                        created_at={moment(item.created_at).format("YYYY-MM-DD")}
                        chat_msg={item.chat_msg}
                        key={item.chat_group_seq}
                        onClick={RoomClickEvenHandler}
                        index={index}
                    />
                ))}
            </div>
            <div className='messageListBox-bottom'></div>
        </div>)
}
export default MessageListBox