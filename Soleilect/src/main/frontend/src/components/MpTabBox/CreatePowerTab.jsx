import React, { useState } from 'react';
import './style.css';

const CreatePowerTab = () => {
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
                <div className='tab-image-box'>
                    <div className='tab-image'></div> {/*여기에 차트 들어가야함 */}
                </div>
                <div className='tab-text-content-box'>
                    <div className='tab-top-text-box'>
                        <div className='border-text-box'>
                            <div className='border-text'>{'설립'}</div>
                        </div>
                        <div className='content-name'>{'발전소설립게시글의 제목'}</div>
                        <div className='content-date create-tab'>{'2024.02.15-2024.03.15'}</div>
                    </div>
                    <div className='tab-bottom-text-box'>
                        <div className='border-text-box create-tab-border-box'>
                            <div className='border-text'>{'생산량/지역'}</div>
                        </div>
                        <div className='bottom-text create-tab-bottom'>{'설립게시글의 내용이 들어가는 곳입니다 설립게시글의 내용이 들어가는 '}</div>
                    </div>
                </div>
                <div className='favorite-icon-box'>
                    <div className={toggle === 0 ? 'icon star-icon create-tab' : 'icon-active star-icon create-tab'} onClick={FavoriteClickHandler}></div>
                </div>
            </div>
        </div>
    );
};

export default CreatePowerTab;