import React, { useState } from 'react';
import './style.css';

const FreeBoardTab = () => {
    //             state: 즐겨찾기 버튼 상태
    const [toggle, setToggle] = useState(0);
    //             event handler: 즐겨찾기 아이콘 클릭 이벤트 처리
    const FavoriteClickHandler = () => {

        if (toggle == 0) {
            setToggle(1);
        } else {
            setToggle(0);
        }
    }
    return (
        <div className='tab-content-list'>
            <div className='tab-content-box'>
                <div className='tab-text-content-box'>
                    <div className='tab-top-text-box'>
                        <div className='border-text-box'>
                            <div className='border-text'>{'자유게시판'}</div>
                        </div>
                        <div className='content-name'>{'자유게시글의 제목입니다아아아아아아아'}</div>
                        <div className='content-date free-tab'>{'2024.02.15-2024.03.15'}</div>
                    </div>
                    <div className='tab-bottom-text-box'>
                        <div className='border-text-box create-tab-border-box'>
                            <div className='border-text'>{'정보'}</div>
                        </div>
                        <div className='bottom-text create-tab-bottom'>{'자유게시글의 내용이 들어가는 곳입니다 설립게시글의 내용이 들어가는 '}</div>
                    </div>
                </div>
                <div className='favorite-icon-box'>
                    <div className={toggle === 0 ? 'icon star-icon free-tab' : 'icon-active star-icon free-tab'} onClick={FavoriteClickHandler}></div>
                </div>
            </div>
        </div>
    );
};

export default FreeBoardTab;