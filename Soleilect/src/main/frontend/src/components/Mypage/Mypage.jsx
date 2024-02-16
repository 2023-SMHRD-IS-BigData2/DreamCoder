import React, { useState } from 'react';
import './mypage.css';
import OwnPowerTab from '../MpTabBox/OwnPowerTab';
import JoinedProjectTab from '../MpTabBox/JoinedProjectTab';
import CreatePowerTab from '../MpTabBox/CreatePowerTab';
import FreeBoardTab from '../MpTabBox/FreeBoardTab';
import AlarmTab from '../MpTabBox/AlarmTab';
import OwnPowerModal from '../Modal/OwnPowerModal';

export default function Mypage() {
    //          state: 화면 상태 
    const [view, setView] = useState('edit-profile');
    //          state: 버튼 상태 
    const [toggle, setToggle] = useState(1);
    //          state: 모달창 상태 
    const [modalOpen, setModalOpen] = useState(false);
    //          event handler: 환경설정 버튼 클릭 이벤트 처리
    const onEditProfileClickHandler = () => {
        setView('edit-profile');
        setToggle(1);
    }
    //          event handler: 알림내역 버튼 클릭 이벤트 처리
    const onAlarmListClickHandler = () => {
        setView('alarm-list');
        setToggle(2);
    }
    //          event handler: 나의 발전소 클릭 이벤트 처리
    const onMyPowerClickHandler = () => {
        setView('my-power');
        setToggle(3);
    }
    //          event handler: 작성한 게시물 클릭 이벤트 처리
    const onMyPostCardClickHandler = () => {
        setView('my-post');
        setToggle(4);
    }
    //          event handler: 즐겨찾기 클릭 이벤트 처리
    const onFavoritesCardClickHandler = () => {
        setView('favorites');
        setToggle(5);
    }

    //              component: 환경설정 컴포넌트
    const EditProfileCard = () => {

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
                            <div className='mypage-box edit-profile-image-box-card'>
                                <div className='edit-box-profile-image-box'>
                                    <div className='mypage-profile-image'></div>
                                </div>

                                <div className='edit-profile-image-button-box'>
                                    <div className='edit-profile-image-button'>{'사진 변경'}</div>
                                </div>
                            </div>
                            <div className='mypage-box edit-nickname-box-card'>
                                <div className='card-top'>
                                    <div className='edit-title'>{'닉네임 수정'}</div>
                                </div>
                                <div className='card-bottom'>
                                    <input className='edit-box edit-nickname-box' type="text" placeholder={'닉네임'}></input>
                                </div>
                            </div>
                        </div>
                        <div className='mypage-box edit-password-box-card'>
                            <div className='card-top'>
                                <div className='edit-title'>{'비밀번호 변경'}</div>
                            </div>
                            <div className='card-bottom'>
                                <input className='edit-box edit-password-box' type="text" placeholder={'현재 비밀번호'} />
                                <input className='edit-box edit-password-box' type="text" placeholder={'새 비밀번호'} />
                                <input className='edit-box edit-password-box' type="text" placeholder={'새 비밀번호 재입력'} />
                            </div>
                        </div>
                        <div className='mypage-box edit-alarm-box-card'>
                            <div className='card-top'>
                                <div className='edit-title'>{'알림 설정'}</div>
                            </div>
                            <div className='card-bottom'>
                                <div class="wrapper">
                                    <input type="checkbox" id="switch" />
                                    <label for="switch" class="switch_label">
                                        <span class="onf_btn"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='mypage-set-save-button-box'>
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
                <div className='mypage-right-bottom'>
                    <AlarmTab />
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
        }
        //          event handler: 두번째 탭 클릭 이벤트 처리
        const onsecondTabClickHandler = () => {
            setToggle(2);
            setView('joined-project')
        }
        //          event handler: 발전소 등록 클릭 이벤트 처리
        const onOwnPowerModalClickHandler = () => {
            return (
                setModalOpen(true)
            );
        }
        //              component: 보유 발전소 탭 컴포넌트
        const OwnPowerCard = () => {
            return (
                // tab 안의 내용은 따로빼서 작성
                <div className='tap-contents-list'>
                    <OwnPowerTab />
                    <OwnPowerTab />
                    <div className='ownPower-add-button-box' onClick={onOwnPowerModalClickHandler}>
                        <div className='ownPower-add-button' >{'발전소 등록'}</div>
                    </div>
                    {modalOpen && <OwnPowerModal setModalOpen={setModalOpen}/>}
                </div>

            );
        }
        //              component: 참여한 프로젝트 탭 컴포넌트
        const JoinedProjectCard = () => {
            return (
                <div className='tap-contents-list'>
                    <JoinedProjectTab />
                    <JoinedProjectTab />
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

        return (
            <div className='mypage-right-box'>
                <div className='mypage-right-top'>
                    <div className='mypage-right-icon-box'>
                        <div className='icon board-icon'></div>
                    </div>
                    <div className='mypage-right-title'>{'작성한 게시물'}</div>
                </div>
                <div className='mypage-right-bottom scroll'>
                    <div className='tap-contents-list'>
                        <JoinedProjectTab />
                        <CreatePowerTab />
                        <FreeBoardTab />
                        <CreatePowerTab />
                        <FreeBoardTab />
                        <FreeBoardTab />
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
                            <div className='mypage-profile-name'>{'닉네임'}</div>
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
                            <div className={toggle === 5 ? 'mypage-comp-button-active' : 'mypage-comp-button'} onClick={onFavoritesCardClickHandler}>
                                {toggle == 5 && <div className='mypage-icon-bar'></div>}
                                <div className='mypage-icon-box'>
                                    <div className='icon star-icon'></div>
                                </div>
                                <div className='mypage-comp-button-text'> {'즐겨찾기'}</div>
                            </div>
                        </div>
                    </div>
                    {view == 'edit-profile' && <EditProfileCard />}
                    {view == 'alarm-list' && <AlarmListCard />}
                    {view == 'my-power' && <MyPowerCard />}
                    {view == 'my-post' && <MyPostCard />}
                    {view == 'favorites' && <FavoritesCard />}
                </div>
            </div>
        </div>

    )
}

