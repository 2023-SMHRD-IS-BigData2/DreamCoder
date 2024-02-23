import React from 'react';
import './loading.css'
import Spinner from '../../assets/image/Spinner.gif';

export const Loading = () => {
    return (
        <div className='background-loading'>
            <h2>잠시만 기다려주세요</h2>
            <img src={Spinner} alt="로딩" width='5%' />
        </div>
    );
};

export default Loading;
