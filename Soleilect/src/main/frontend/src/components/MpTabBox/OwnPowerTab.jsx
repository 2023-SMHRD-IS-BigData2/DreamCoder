import React from 'react';
import './style.css';

const OwnPowerTab = () => {

    return (
        <div className='tab-content-list'>
            <div className='tab-content-box'>
                <div className='tab-image-box'>
                    <div className='tab-image'></div>
                </div>
                <div className='tab-text-content-box owned'>
                    <div className='tab-top-text-box'>
                        <div className='border-text-box'>
                            <div className='border-text'>{'발전량'}</div>
                        </div>
                        <div className='content-name'>{'발전소 이름'}</div>
                    </div>
                    <div className='tab-bottom-text-box'>
                        <div className='bottom-text'>{'발전소위치가들어가는곳'}</div>
                    </div>
                </div>
                <div className='tab-content-edit-button-box'>
                    <div className='edit-button'>{'수정하기'}</div>
                </div>
            </div>
        </div>
    );
};

export default OwnPowerTab;