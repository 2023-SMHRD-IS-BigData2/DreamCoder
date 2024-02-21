import React, { useState } from 'react';
import './style.css';

const JoinedProjectTab = (props) => {
    //          받아와야할 정보
    const{target_cnt,party_title,start_at,end_at,party_content} = props;
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
                    <div className='tab-image'></div> {/*여기에 차트 들어가야함 */}
                </div>
                <div className='tab-text-content-box'>
                    <div className='tab-top-text-box'>
                        <div className='border-text-box'>
                            <div className='border-text'>{target_cnt/1000+'MW'}</div>
                        </div>
                        <div className='content-name'>{party_title}</div>
                        <div className='content-date'>{start_at+'-'+end_at}</div>
                    </div>
                    <div className='tab-bottom-text-box'>
                        <div className='bottom-text'>{party_content}</div>
                    </div>
                </div>
                {/* <div className='favorite-icon-box'>
                    <div className={toggle === 0 ?'icon star-icon':'icon-active star-icon'} onClick={FavoriteClickHandler}></div>
                </div> */}
            </div>
        </div>
    );
};

export default JoinedProjectTab;