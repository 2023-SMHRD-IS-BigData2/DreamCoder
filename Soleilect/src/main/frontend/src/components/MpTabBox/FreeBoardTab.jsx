import React, { useState } from 'react';
import './style.css';
import moment from 'moment';

const FreeBoardTab = (props) => {
    const { b_title, created_at, hd_code, b_content } = props;
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
                        <div className='content-name'>{b_title}</div>
                        <div className='content-date free-tab'>{moment(created_at).format("YYYY-MM-DD,dddd")}</div>
                    </div>
                    <div className='tab-bottom-text-box'>
                        <div className='border-text-box create-tab-border-box'>
                            {hd_code == 'f1' ?
                                <div className='border-text'>{'자유'}</div> :
                                <div className='border-text'>{'꿀팁'}</div>
                            }
                        </div>
                        <div className='bottom-text create-tab-bottom'>{b_content}</div>
                    </div>
                </div>
                {/* <div className='favorite-icon-box'>
                    <div className={toggle === 0 ? 'icon star-icon free-tab' : 'icon-active star-icon free-tab'} onClick={FavoriteClickHandler}></div>
                </div> */}
            </div>
        </div>
    );
};

export default FreeBoardTab;