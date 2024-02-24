import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css';
import InputBox from '../InputBox';

const SignIn = () => {
    const nav = useNavigate();

    //          state: 아이디 요소 참조 상태 
    const idRef = useRef(null);
    //          state: 패스워드 요소 참조 상태 
    const passwordRef = useRef(null);

    //          state: 아이디 상태 
    const [id, setId] = useState('');
    //          state: 패스워드 상태 
    const [password, setPassword] = useState('');

    //          state: 패스워드 타입 상태 
    const [passwordType, setPasswordType] = useState('password');
    //          state: error 상태
    const [error, setError] = useState(false);

    //          state: 패스워드 버튼 숨김 아이콘 상태 
    const [passwordButtonIcon, setPasswordButtonIcon] = useState('eye-light-off-icon');

    const submitPost = () => {
        let formData = new FormData();
        formData.append("user_id", id)
        formData.append("user_pw", password)
        axios
            .post('/Sol/logCon/login', formData)
            .then((response) => {
                if (response.data.data[0] == null) {
                    setError(true)
                    return;
                } else {
                    sessionStorage.setItem("user_id", id);
                    sessionStorage.setItem("user_pw", password);
                    storageNick();
                    nav('/');
                }
                console.log(response.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }
    //  회원정보 상태 가져오기
    const storageNick = () => {
        let formData = new FormData();
        console.log('회원닉가져오기');
        formData.append("user_id", sessionStorage.getItem("user_id"))
        formData.append("user_pw", sessionStorage.getItem("user_pw"))
        axios
            .post('/Sol/logCon/login', formData)
            .then((res) => {
                console.log(res.data.data[0].user_nick);
                sessionStorage.setItem("user_nick", res.data.data[0].user_nick);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    //          event handler: 아이디 변경 이벤트 처리
    const onIdChangeHandler = (event) => {
        setError(false);
        const { value } = event.target;
        setId(value);
    }

    //          event handler: 패스워드 변경 이벤트 처리
    const onPasswordChangeHandler = (event) => {
        setError(false);
        const { value } = event.target;
        setPassword(value);
    }
    //          event handler: 로그인 버튼 클릭 이벤트 처리
    const onSignInButtonClickHandler = () => {
        // const requestBody: SignInRequestDto = { id, password };
        // signInRequest(requestBody).then(signInResponse);
        { submitPost() }

    }
    //          event handler: 회원가입 버튼 클릭 이벤트 처리
    const onSignUpLinkClickHandler = () => {
        nav('/SignUp');
    }
    //          event handler: 패스워드 버튼 클릭 이벤트 처리
    const onPasswordButtonClickHandler = () => {
        if (passwordType === 'text') {
            setPasswordType('password');
            setPasswordButtonIcon('eye-light-off-icon');
        } else {
            setPasswordType('text');
            setPasswordButtonIcon('eye-light-on-icon');

        }
    }
    //          event handler: 아이디 인풋 키다운 이벤트 처리
    const onIdKeyDownHandler = (e) => {
        if (e.key !== 'Enter') return;
        if (!passwordRef.current) return;
        passwordRef.current.focus();
    }
    //          event handler: 이메일 인풋 키다운 이벤트 처리
    const onPasswordKeyDownHandler = (e) => {
        if (e.key !== 'Enter') return;
        onSignInButtonClickHandler();
    }
    return (
        <div id='auth-wrapper'>
            <div className='auth-container'>
                <div className='auth-jumbotron-box'>
                    <div className='auth-jumbotron-contents'>
                        <div className='auth-logo-icon'></div>
                        <div className='auth-jumbotron-text-box'>
                            <div className='auth-jumbotron-text'>{'환영합니다.'}</div>
                            <div className='auth-jumbotron-text'>{'솔레일렛트'}</div>
                        </div>
                    </div>
                </div>
                <div className='auth-card'>
                    <div className='auth-card-box'>
                        <div className='auth-card-top'>
                            <div className='auth-card-title-box'>
                                <div className='auth-card-title'>{'로그인'}</div>
                            </div>
                            <InputBox ref={idRef} label='아이디' type='text' name='user_id' placeholder='아이디를 입력해주세요' value={id} onChange={onIdChangeHandler} error={error} onkeyDown={onIdKeyDownHandler} />
                            <InputBox ref={passwordRef} label='패스워드' name='user_pw' type={passwordType} placeholder='비밀번호를 입력해주세요.' error={error} value={password} onChange={onPasswordChangeHandler} icon={passwordButtonIcon} onButtonClick={onPasswordButtonClickHandler} onkeyDown={onPasswordKeyDownHandler} />
                        </div>
                        <div className='auth-card-bottom'>
                            {error &&
                                <div className='auth-sign-in-error-box'>
                                    <div className='auth-sign-in-error-message'>
                                        {'아이디 또는 비밀번호를 잘못 입력했습니다. \n입력하신 내용을 다시 확인해주세요.'}
                                    </div>
                                </div>
                            }
                            <div className='black-large-full-button' onClick={onSignInButtonClickHandler} type='submit'>{'로그인'}</div>
                            <div className='auth-description-box'>
                                <div className='auth-description'>{'신규 사용자이신가요? '}<span className='auth-description-link' onClick={onSignUpLinkClickHandler}>{'회원가입'}</span></div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn