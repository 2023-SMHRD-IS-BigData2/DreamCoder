import React, { useEffect, useRef, useState } from 'react'
import './mypage.css';
import axios from 'axios';
import OwnPowerTab from '../MpTabBox/OwnPowerTab';
import JoinedProjectTab from '../MpTabBox/JoinedProjectTab';
import CreatePowerTab from '../MpTabBox/CreatePowerTab';
import FreeBoardTab from '../MpTabBox/FreeBoardTab';
import AlarmTab from '../MpTabBox/AlarmTab';
import OwnPowerModal from '../Modal/OwnPowerModal';
import JoinAlarmTab from '../MpTabBox/JoinAlarmTab';
import { useNavigate } from 'react-router-dom';



export default function Mypage() {
    const nav = useNavigate();
    const [list, setList] = useState([]);
    const [secList, setSecList] = useState([]);
    const [ownPList, setOwnPList] = useState([]);
    const [alarmList, setAlarmList] = useState([]);
    //          state: 화면 상태 
    const [view, setView] = useState(localStorage.getItem('view') || 'edit-profile');
    //          state: 버튼 상태 
    const [toggle, setToggle] = useState(localStorage.getItem('toggle') || 1);
    //          state: 모달창 상태 
    const [modalOpen, setModalOpen] = useState(false);

    // view 값이 변경될 때마다 localStorage에 저장
    useEffect(() => {
        localStorage.setItem('view', view);
        localStorage.setItem('toggle', toggle);
    }, [view, toggle]);
    // 페이지가 로드될 때 localStorage에서 toggle 상태를 가져와서 초기화
    useEffect(() => {
        const storedToggle = localStorage.getItem('toggle');
        if (storedToggle) {
            setToggle(parseInt(storedToggle));
        }
    }, []);
    useEffect(() => {
        if (view == 'my-post') {
            myPostList();
            myFreePostList();
        } if (view == 'my-power') {
            readMyPlantList();
        }
    }, []);
    //          마이페이지 작성한 게시물 불러오기
    const myPostList = () => {
        let formData = new FormData();
        formData.append("user_id", sessionStorage.getItem("user_id"))
        axios
            .post('/Sol/myPageCon/myPost', formData)
            .then((res) => {
                readMyRecruitment(res);
            })
            .catch((error) => {
                console.log(error)
            })
    };

    const readMyRecruitment = (res) => {
        const data = res.data.data[0].recruitment;
        setList(data);
    };

    const myFreePostList = () => {
        let formData = new FormData();
        formData.append("user_id", sessionStorage.getItem("user_id"))
        axios
            .post('/Sol/myPageCon/myPost', formData)
            .then((res) => {
                readMyFree(res);
            })
            .catch((error) => {
                console.log(error)
            })
    };

    const readMyFree = (res) => {
        const data = res.data.data[1].free;
        setSecList(data);
    };
    //          마이페이지 보유발전소 불러오기
    const readMyPlantList = () => {
        let formData = new FormData();
        formData.append("user_id", sessionStorage.getItem("user_id"))
        axios
            .post('/Sol/myPageCon/plantList', formData)
            .then((response) => {
                setOwnPList(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })

    };
    //              알림내역 가입신청자 불러오기
    useEffect(() => {
        if (view !== 'alarm-list') return;
        myPostAcceptUserList()
    }, [view]);
    const readMyAlarm = (res) => {
        const data = res.data.data[0];
        setAlarmList(data);
    };
    const myPostAcceptUserList = () => {
        let formData = new FormData();
        formData.append("user_nick", sessionStorage.getItem("user_nick"))
        axios
            .post('/Sol/myPageCon/myGroupAccept', formData)
            .then((res) => {
                readMyAlarm(res);
            })
            .catch((error) => {
                console.log(error)
            })
    };


    //          event handler: 환경설정 버튼 클릭 이벤트 처리
    const onEditProfileClickHandler = () => {
        setView('edit-profile');
        setToggle(1);
    }
    //          event handler: 알림내역 버튼 클릭 이벤트 처리
    const onAlarmListClickHandler = () => {
        setView('alarm-list');
        setToggle(2);
        { myPostList() }
    }
    //          event handler: 나의 발전소 클릭 이벤트 처리
    const onMyPowerClickHandler = () => {
        setView('my-power');
        setToggle(3);
        { readMyPlantList() };
    }
    //          event handler: 작성한 게시물 클릭 이벤트 처리
    const onMyPostCardClickHandler = () => {
        setView('my-post');
        setToggle(4);
        { myPostList() }
        { myFreePostList() }
    }
    //          event handler: 즐겨찾기 클릭 이벤트 처리
    const onFavoritesCardClickHandler = () => {
        setView('favorites');
        setToggle(5);
    }

    //              component: 환경설정 컴포넌트
    const EditProfileCard = () => {
        //          state: 패스워드 요소 참조 상태 
        const passwordRef = useRef(null);
        //          state: 재패스워드 요소 참조 상태 
        const passwordSecRef = useRef(null);
        //          state: 재재패스워드 요소 참조 상태 
        const passwordThrdRef = useRef(null);
        //          state: 닉네임 요소 참조 상태 
        const nicknameRef = useRef(null);

        //          state: 패스워드 상태 
        const [password, setPassword] = useState('');
        //          state: 재패스워드 상태 
        const [passwordSec, setPasswordSec] = useState('');
        //          state: 재재패스워드 상태 
        const [passwordThrd, setPasswordThrd] = useState('');
        //          state: 닉네임 상태 
        const [nickname, setNickname] = useState(sessionStorage.getItem("user_nick"));
        //          event handler: 닉네임 변경 이벤트 처리 
        const onNicknameChangeHandler = (event) => {
            const { value } = event.target;
            setNickname(value);
        }
        //          event handler: 패스워드 변경 이벤트 처리 
        const onPasswordChangeHandler = (event) => {
            const { value } = event.target;
            setPassword(value);
        }
        //          event handler: 재패스워드 변경 이벤트 처리 
        const onPasswordSecChangeHandler = (event) => {
            const { value } = event.target;
            setPasswordSec(value);
        }
        //          event handler: 재재패스워드 변경 이벤트 처리 
        const onPasswordThrdChangeHandler = (event) => {
            const { value } = event.target;
            setPasswordThrd(value);
        }
        const submitPost = () => {
            let formData = new FormData();
            formData.append("user_id", sessionStorage.getItem("user_id"))
            if (password == '') {
                formData.append("user_pw", sessionStorage.getItem("user_pw"))
            } else {
                formData.append("user_pw", passwordThrd)
                sessionStorage.setItem("user_pw", passwordThrd)
            }
            if (nickname == sessionStorage.getItem("user_nick")) {
                formData.append("user_nick", sessionStorage.getItem("user_nick"))
            } else {
                formData.append("user_nick", nickname)
            }
            axios
                .post('/Sol/myPageCon/userUpdate', formData)
                .then((response) => {
                    sessionStorage.setItem("user_nick", nickname)
                    alert('수정 완료');
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        const nickCheckPost = () => {
            let formData = new FormData();
            formData.append("nick", nickname)
            axios
                .post('/Sol/joinCon/nickCheck', formData)
                .then((response) => {
                    if (response.data.reMsg == '실패') {
                        alert('중복되는 닉네임입니다.');
                    } else {
                        alert('사용 가능한 닉네임입니다.')
                    }
                })
                .catch((error) => {
                    console.log(error)
                })

        };
        //         event handler: 닉네임 중복체크 버튼 클릭 이벤트 처리
        const onNicknameCheckButtonClickHandler = () => {
            { nickCheckPost() }
        }
        //          event handler: 수정하기 버튼 클릭 이벤트 처리 
        const onChangeButtonClickHandler = () => {
            const nowPassword = sessionStorage.getItem("user_pw");
            if (password === '' || password === nowPassword) { // password가 비어 있거나 nowPassword와 일치하는 경우
                if (passwordSec !== passwordThrd) {
                    alert('재입력한 비밀번호가 일치하지않습니다.');
                    return;
                }
                // submitPost 함수를 호출하는 중괄호는 제거하고, submitPost를 바로 호출합니다.
                submitPost();
            } else {
                alert('현재 비밀번호가 일치하지 않습니다.');
                return;
            }
        }

        return (
            <div className='mypage-right-box'>
                <div className='mypage-right-top'>
                    <div className='mypage-right-icon-box'>
                        <div className='icon set-icon'></div>
                    </div>
                    <div className='mypage-right-title'>{'환경설정'}</div>
                </div>
                <div className='mypage-right-bottom vanila'>
                    <div className='mypage-right-list'>
                        <div className='mypage-right-first-list'>
                            <div className='id-check-button-box' onClick={onNicknameCheckButtonClickHandler}>{'중복체크'}</div>
                            {/* <div className='mypage-box edit-profile-image-box-card'>
                                <div className='edit-box-profile-image-box'>
                                    <div className='mypage-profile-image'></div>
                                </div>

                                <div className='edit-profile-image-button-box'>
                                    <div className='edit-profile-image-button'>{'사진 변경'}</div>
                                </div>
                            </div> */}
                            <div className='mypage-box edit-nickname-box-card'>
                                <div className='card-top'>
                                    <div className='edit-title'>{'닉네임 수정'}</div>
                                </div>
                                <div className='card-bottom'>
                                    <input ref={nicknameRef} value={nickname} onChange={onNicknameChangeHandler} className='edit-box edit-nickname-box' type="text" placeholder={'닉네임 입력'}></input>
                                </div>
                            </div>
                        </div>
                        <div className='mypage-box edit-password-box-card'>
                            <div className='card-top'>
                                <div className='edit-title'>{'비밀번호 변경'}</div>
                            </div>
                            <div className='card-bottom'>
                                <input ref={passwordRef} value={password} onChange={onPasswordChangeHandler} className='edit-box edit-password-box' type="password" placeholder={'현재 비밀번호'} />
                                <input ref={passwordSecRef} value={passwordSec} onChange={onPasswordSecChangeHandler} className='edit-box edit-password-box' type="text" placeholder={'새 비밀번호'} />
                                <input ref={passwordThrdRef} value={passwordThrd} onChange={onPasswordThrdChangeHandler} className='edit-box edit-password-box' type="password" placeholder={'새 비밀번호 재입력'} />
                            </div>
                        </div>
                        <div className='mypage-box edit-alarm-box-card'>
                            <div className='card-top'>
                                <div className='edit-title'>{'알림 설정'}</div>
                            </div>
                            <div className='card-bottom'>
                                <div className="wrapper">
                                    <input type="checkbox" id="switch" />
                                    <label htmlFor="switch" className="switch_label">
                                        <span className="onf_btn"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='mypage-set-save-button-box' onClick={onChangeButtonClickHandler}>
                            <div className='mypage-set-save-button'>{'수정하기'}</div>
                        </div>
                    </div>
                    <div className='leave-link'>{'탈퇴하기'}</div>
                </div>
            </div>
        );
    }
    //              component: 알림내역 컴포넌트
    const AlarmListCard = () => {

        return (
            <div className='mypage-right-box'>
                <div className='mypage-right-top'>
                    <div className='mypage-right-icon-box'>
                        <div className='icon alarm-icon'></div>
                    </div>
                    <div className='mypage-right-title'>{'알림 내역'}</div>
                </div>
                <div className='mypage-right-bottom scroll'>
                    <div className='tap-contents-list'>
                        {/* <AlarmTab /> */}
                        {alarmList && alarmList.map((item, index) => (
                            <JoinAlarmTab key={item.pl_seq} pl_seq={item.pl_seq} list_seq={item.list_seq} party_title={item.party_title} index={index} user_nick={item.user_nick} pl_power={item.pl_power} party_seq={item.party_seq} pl_name={item.pl_name} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
    //              component: 나의 발전소 컴포넌트
    const MyPowerCard = () => {
        //          state: 화면 상태 
        const [view, setView] = useState('own-power');
        //          state: 탭 상태 
        const [toggle, setToggle] = useState(1);

        //          event handler: 첫번째 탭 클릭 이벤트 처리
        const onfirstTabClickHandler = () => {
            setToggle(1);
            setView('own-power')
            { readMyPlantList() }
        }
        //          event handler: 두번째 탭 클릭 이벤트 처리
        const onsecondTabClickHandler = () => {
            setToggle(2);
            setView('joined-project')
        }
        //          event handler: 발전소 등록 클릭 이벤트 처리
        const onOwnPowerModalClickHandler = () => {
            setModalOpen(true);
        }
        //              component: 보유 발전소 탭 컴포넌트
        const OwnPowerCard = () => {
            return (
                // tab 안의 내용은 따로빼서 작성
                <div className='tap-contents-list'>
                    {ownPList && ownPList.map((item, index) => (
                        <OwnPowerTab key={item.pl_seq} pl_seq={item.pl_seq} pl_power={item.pl_power} pl_name={item.pl_name} pl_loc={item.pl_loc} pl_isJoin={item.pl_isJoin} />
                    ))}

                    <div className='ownPower-add-button-box' onClick={onOwnPowerModalClickHandler}>
                        <div className='ownPower-add-button' >{'발전소 등록'}</div>
                    </div>
                    {modalOpen && <OwnPowerModal setModalOpen={setModalOpen} setModalPage='add-plant' />}
                </div>

            );
        }
        //              component: 참여한 프로젝트 탭 컴포넌트
        const JoinedProjectCard = () => {
            const [mGList, setMGList] = useState([]);
            useEffect(() => {
                myGroupList();
            }, []);
            const myGroupList = () => {
                let formData = new FormData();
                formData.append("user_nick", sessionStorage.getItem("user_nick"))
                axios
                    .post('/Sol/myPageCon/myGroup', formData)
                    .then((res) => {
                        setMGList(res.data.data);
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            };
            return (
                <div className='tap-contents-list'>
                    {mGList && mGList.map((item, index) => (
                        <JoinedProjectTab onclick={() => {
                            nav(`/detail/${parseInt(item.party_seq)}`);
                        }}key={item.party_seq} target_cnt={item.target_cnt} party_title={item.party_title} start_at={item.start_at} end_at={item.end_at} party_content={item.party_content} now_cnt={item.now_cnt} index={index} />
                    ))}
                </div>
            );
        }

        return (
            <div className='mypage-right-box'>
                <div className='mypage-right-top'>
                    <div className='mypage-right-icon-box'>
                        <div className='icon sun-icon'></div>
                    </div>
                    <div className='mypage-right-title'>{'나의 발전소'}</div>
                    <div className="mypage-right-top-tab">
                        <div className={toggle === 1 ? 'mypage-right-top-tab-box-active' : 'mypage-right-top-tab-box'} onClick={onfirstTabClickHandler}>{'보유 발전소'}</div>
                        <div className={toggle === 2 ? 'mypage-right-top-tab-box-active' : 'mypage-right-top-tab-box'} onClick={onsecondTabClickHandler}>{'참여중인 프로젝트'}</div>
                    </div>
                </div>
                <div className='mypage-right-bottom scroll'>
                    {view == 'own-power' && <OwnPowerCard />}
                    {view == 'joined-project' && <JoinedProjectCard />}
                </div>
            </div>
        );
    }
    //              component: 작성한 게시물 컴포넌트
    const MyPostCard = () => {
        //          state: 화면 상태 
        const [views, setViews] = useState('join-board');
        //          state: 탭 상태 
        const [toggle, setToggle] = useState(1);

        //          event handler: 첫번째 탭 클릭 이벤트 처리
        const onfirstTabClickHandler = () => {
            setToggle(1);
            setViews('join-board')
        }
        //          event handler: 두번째 탭 클릭 이벤트 처리
        const onsecondTabClickHandler = () => {
            setToggle(2);
            setViews('free-board')
        }
        //              component: 자유게시판 탭 컴포넌트
        const FreeBoardCard = () => {
            return (
                <div className='tap-contents-list'>
                    {secList && secList.map((item, index) => (
                        <FreeBoardTab onclick={()=>{ nav(`/BoardDetail/${item.b_seq}`);}} key={index} b_title={item.b_title} created_at={item.created_at} hd_code={item.hd_code} b_content={item.b_content} />
                    ))}
                </div>
            );
        }
        //              component: 모집게시판 탭 컴포넌트
        const JoinBoardCard = () => {
            return (
                <div className='tap-contents-list'>
                    {list && list.map((item, index) => (
                        <JoinedProjectTab onclick={() => {
                            nav(`/detail/${item.party_seq}`);
                        }}key={item.party_seq} target_cnt={item.target_cnt} party_title={item.party_title} start_at={item.start_at} end_at={item.end_at} party_content={item.party_content} now_cnt={item.now_cnt} index={index} />
                    ))}
                </div>
            );
        }
        return (
            <div className='mypage-right-box'>
                <div className='mypage-right-top'>
                    <div className='mypage-right-icon-box'>
                        <div className='icon board-icon'></div>
                    </div>
                    <div className='mypage-right-title'>{'작성한 게시물'}</div>
                    <div className="mypage-right-top-tab">
                        <div className={toggle === 1 ? 'mypage-right-top-tab-box-active' : 'mypage-right-top-tab-box'} onClick={onfirstTabClickHandler}>{'모집게시판'}</div>
                        <div className={toggle === 2 ? 'mypage-right-top-tab-box-active' : 'mypage-right-top-tab-box'} onClick={onsecondTabClickHandler}>{'자유게시판'}</div>
                    </div>
                </div>
                <div className='mypage-right-bottom scroll'>
                    <div className='tap-contents-list'>
                        {views == 'join-board' && <JoinBoardCard />}
                        {views == 'free-board' && <FreeBoardCard />}
                    </div>
                </div>
            </div>
        );
    }
    //              component: 즐겨찾기 컴포넌트
    const FavoritesCard = () => {

        return (
            <div className='mypage-right-box'>
                <div className='mypage-right-top'>
                    <div className='mypage-right-icon-box'>
                        <div className='icon star-icon'></div>
                    </div>
                    <div className='mypage-right-title'>{'즐겨찾기'}</div>
                </div>
                <div className='mypage-right-bottom'>

                </div>
            </div>
        );
    }
    return (
        <div id='body'>
            <div id='mypage-wrapper'>
                <div className='mypage-container'>
                    <div className='mypage-left-box'>
                        <div className='mypage-profile-box'>
                            <div className='mypage-profile-image-box'>
                                <div className='mypage-profile-image'></div>
                            </div>
                            <div className='mypage-profile-name'>{sessionStorage.getItem("user_nick")}</div>
                        </div>
                        <div className='mypage-left-list'>
                            {/* 클릭이벤트 발생해서 컴포넌트 넘어가면 className 변경시키고 css에 따로 추가하기 */}
                            <div className={toggle === 1 ? 'mypage-comp-button-active' : 'mypage-comp-button'} onClick={onEditProfileClickHandler}>
                                {toggle == 1 && <div className='mypage-icon-bar'></div>}
                                <div className='mypage-icon-box'>
                                    <div className='icon set-icon'></div>
                                </div>
                                <div className='mypage-comp-button-text'>{'환경설정'}</div>
                            </div>
                            <div className={toggle === 2 ? 'mypage-comp-button-active' : 'mypage-comp-button'} onClick={onAlarmListClickHandler}>
                                {toggle == 2 && <div className='mypage-icon-bar'></div>}
                                <div className='mypage-icon-box'>
                                    <div className='icon alarm-icon'></div>
                                </div>
                                <div className='mypage-comp-button-text'>{'알림내역'}</div>
                            </div>
                            <div className={toggle === 3 ? 'mypage-comp-button-active' : 'mypage-comp-button'} onClick={onMyPowerClickHandler}>
                                {toggle == 3 && <div className='mypage-icon-bar'></div>}
                                <div className='mypage-icon-box'>
                                    <div className='icon sun-icon'></div>
                                </div>
                                <div className='mypage-comp-button-text'>{'나의 발전소'}</div>
                            </div>
                            <div className={toggle === 4 ? 'mypage-comp-button-active' : 'mypage-comp-button'} onClick={onMyPostCardClickHandler}>
                                {toggle == 4 && <div className='mypage-icon-bar'></div>}
                                <div className='mypage-icon-box'>
                                    <div className='icon board-icon'></div>
                                </div>
                                <div className='mypage-comp-button-text'> {'작성한 게시물'}</div>
                            </div>
                            {/* <div className={toggle === 5 ? 'mypage-comp-button-active' : 'mypage-comp-button'} onClick={onFavoritesCardClickHandler}>
                                {toggle == 5 && <div className='mypage-icon-bar'></div>}
                                <div className='mypage-icon-box'>
                                    <div className='icon star-icon'></div>
                                </div>
                                <div className='mypage-comp-button-text'> {'즐겨찾기'}</div>
                            </div> */}
                        </div>
                    </div>
                    {view == 'edit-profile' && <EditProfileCard />}
                    {view == 'alarm-list' && <AlarmListCard />}
                    {view == 'my-power' && <MyPowerCard />}
                    {view == 'my-post' && <MyPostCard />}
                    {/* {view == 'favorites' && <FavoritesCard />} */}
                </div>
            </div>
        </div>

    )
}
