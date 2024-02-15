import React, { useState } from 'react';
import './style.css';

const JoinedProjectTab = () => {
    //             state: 즐겨찾기 버튼 상태
    const [toggle, setToggle] = useState(0);
    //             event handler: 즐겨찾기 아이콘 클릭 이벤트 처리
    const FavoriteClickHandler = () => {

        if(toggle==0){
            setToggle(1);
        }else{
            setToggle(0);
        }
    }
    return (
        <div className='tab-content-list'>
            <div className='tab-content-box'>
                <div className='tab-image-box'>
                    <div className='tab-image'></div>
                </div>
                <div className='tab-text-content-box'>
                    <div className='tab-top-text-box'>
                        <div className='border-text-box'>
                            <div className='border-text'>{'모집량'}</div>
                        </div>
                        <div className='content-name'>{'모집게시글의 제목이 들어가는 곳'}</div>
                        <div className='content-date'>{'2024.02.15-2024.03.15'}</div>
                    </div>
                    <div className='tab-bottom-text-box'>
                        <div className='bottom-text'>{'모집게시글의 내용이 들어가는 곳입니다모집게시글의 내용이 들어가는 '}</div>
                    </div>
                </div>
                <div className='favorite-icon-box'>
                    <div className={toggle === 0 ?'icon star-icon':'icon-active star-icon'} onClick={FavoriteClickHandler}></div>
                </div>
            </div>
        </div>
    );
};

export default JoinedProjectTab;