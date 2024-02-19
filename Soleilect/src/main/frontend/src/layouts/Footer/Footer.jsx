import React from 'react'
import { useLocation } from "react-router-dom";
import './style.css'

//             component: 푸터 레이아웃
const Footer = () => {
    const locationNow = useLocation();
    if (locationNow.pathname === '/SignUp') return null;
    if (locationNow.pathname === '/SignIn') return null;
    if (locationNow.pathname === '/map') return null;
    if (locationNow.pathname === '/Mypage') return null;
    //              event handler: 인스타 아이콘 버튼 클릭 이벤트 처리
    const onInstaIconButtonClickHandler = () => {
        window.open('https://www.instagram.com');
    }

    //              event handler: 네이버 아이콘 버튼 클릭 이벤트 처리
    const onNaverBlogIconButtonClickHandler = () => {
        window.open('https://section.blog.naver.com/');
    }

    //             render: 푸터 레이아웃 렌더링
    return (
        <div id='footer'>
            <div className='footer-division-line'></div>
            <div className='footer-container'>
                <div className='footer-top'>
                    <div className='footer-logo-box'>
                        <div className='icon-box'>
                            <div className='icon main-log-icon'></div>
                        </div>
                        <div className='footer-logo-text'>{'솔레일렛트'}</div>
                    </div>
                    <div className='footer-link-box'>
                        <div className='footer-copyright-link'>{'Copyright 2024. Soleilect Inc. all rights reserved.'}</div>
                        <div className='icon-button' onClick={onInstaIconButtonClickHandler}>
                            <div className='icon insta-icon'></div>
                        </div>
                        <div className='icon-button' onClick={onNaverBlogIconButtonClickHandler}>
                            <div className='icon naver-blog-icon'></div>
                        </div>
                    </div>
                </div>
                <div className='footer-bottom'>
                    <div className='footer-name'>{`대표 장서영 | 사업자 번호 000-00-00000`}</div>
                    <div className='footer-name'>{`주소 광주광역시 동구 예술길 31-15 4층`}</div>
                    <div className='footer-name'>{`전화 0000-0000 | 고객문의 aaa@aaaaa.com`}</div>
                </div>
            </div>
        </div>
    )
}
export default Footer