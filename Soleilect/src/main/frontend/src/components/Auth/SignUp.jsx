import axios from 'axios';
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css';
import InputBox from '../InputBox';


const SignIn = () => {

  const nav = useNavigate();

  //          state: 아이디 요소 참조 상태 
  const idRef = useRef(null);
  //          state: 패스워드 요소 참조 상태 
  const passwordRef = useRef(null);
  //          state: 닉네임 요소 참조 상태 
  const nicknameRef = useRef(null);
  //  //          state: 핸드폰 번호 요소 참조 상태 
  //  const telNumberRef = useRef<HTMLInputElement | null>(null);
  //          state: 이름 요소 참조 상태 
  const nameRef = useRef(null);
  //          state: 사업자번호 요소 참조 상태 
  const bnumberRef = useRef(null);

  const [page, setPage] = useState('1');
  //          state: 아이디 상태 
  const [id, setId] = useState('');
  //          state: 패스워드 상태 
  const [password, setPassword] = useState('');
  //          state: 닉네임 상태 
  const [nickname, setNickname] = useState('');
  //          state: 이름 상태 
  const [name, setName] = useState('');
  //          state: 사업자번호 상태 
  const [bnumber, setBnumber] = useState('');

  //          state: 패스워드 타입 상태 
  const [passwordType, setPasswordType] = useState('password');
  //          state: 아이디 에러 상태 
  const [isIdError, setIdError] = useState(false);
  //          state: 패스워드 에러 상태 
  const [isPasswordError, setPasswordError] = useState(false);
  //          state: 닉네임 에러 상태 
  const [isNicknameError, setNicknameError] = useState(false);
  //          state: 이름 에러 상태 
  const [isNameError, setNameError] = useState(false);
  //          state: 사업자번호 에러 상태 
  const [isBnumberError, setBnumberError] = useState(false);

  //          state: 아이디 에러 메세지 상태 
  const [idErrorMessage, setIdErrorMessage] = useState('');
  //          state: 패스워드 에러 메세지 상태 
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');
  //          state: 닉네임 에러 메세지 상태 
  const [nicknameErrorMessage, setNicknameErrorMessage] = useState('');
  //          state: 이름 에러 메세지 상태 
  const [nameErrorMessage, setNameErrorMessage] = useState('');
  //          state: 사업자번호 에러 메세지 상태 
  const [bnumberErrorMessage, setBnumberErrorMessage] = useState('');

  //          state: 패스워드 버튼 숨김 아이콘 상태 
  const [passwordButtonIcon, setPasswordButtonIcon] = useState('eye-light-off-icon');

  const submitPost = (e) => {
    let formData = new FormData();
    formData.append("id", e.target.id.value)
    formData.append("pw", e.target.pw.value)
    formData.append("nickname", e.target.nickname.value)
    formData.append("name", e.target.name.value)
    formData.append("b_num", e.target.b_num.value)
    axios
      .post('/Sol/joinCon/join', formData)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
    nav('/')
  }

  //          event handler: 다음 버튼 클릭 이벤트 처리 
  const onNextButtonClickHandler = () => {
    const idPattern = /^[a-zA-Z0-9]*@([-.]?[a-zA-Z0-9])*\.[a-zA-Z]{2,4}$/;
    const isIdPattern = idPattern.test(id);
    if (!isIdPattern) {
      setIdError(true);
      setIdErrorMessage('아이디 주소 포맷이 맞지 않습니다.');
    }
    const isCheckedPassword = password.trim().length > 4;
    if (!isCheckedPassword) {
      setPasswordError(true);
      setPasswordErrorMessage('비밀번호는 5자 이상 입력해주세요.');
    }
    const hasNickname = nickname.trim().length !== 0;
    if (!hasNickname) {
      setNicknameError(true);
      setNicknameErrorMessage('닉네임을 입력해주세요');
    }
    if (!isIdPattern || !isCheckedPassword || !hasNickname) return;
    setPage('2');
  }
  //          event handler: 회원가입 버튼 클릭 이벤트 처리 
  const onSignUpButtonClickHandler = () => {
    const hasName = name.trim().length !== 0;
    if (!hasName) {
      setNameError(true);
      setNameErrorMessage('이름을 입력해주세요');
    }
    const bnumberPattern = /^[0-9]{10,10}$/;
    const isBnumberPattern = bnumberPattern.test(bnumber);
    if (!isBnumberPattern) {
      setBnumberError(true);
      setBnumberErrorMessage('10자리 숫자만 입력해주세요.');
    }

    if (!hasName || !isBnumberPattern) return;
    document.getElementById('header-sign-up-button').style.display = 'block';
    document.getElementById('header-sign-up-button').style.display = 'flex';
    nav('/Main');
  }
  //          event handler: 회원가입 버튼 클릭 이벤트 처리 
  const onSignInButtonClickHandler = () => {
    nav('/SignIn');
  }

  //          event handler: 아이디 변경 이벤트 처리 
  const onIdChangeHandler = (event) => {
    const { value } = event.target;
    setId(value);
    setIdError(false);
    setIdErrorMessage('');
  }
  //          event handler: 패스워드 변경 이벤트 처리 
  const onPasswordChangeHandler = (event) => {
    const { value } = event.target;
    setPassword(value);
    setPasswordError(false);
    setPasswordErrorMessage('');
  }
  //          event handler: 닉네임 변경 이벤트 처리 
  const onNicknameChangeHandler = (event) => {
    const { value } = event.target;
    setNickname(value);
    setNicknameError(false);
    setNicknameErrorMessage('');
  }
  //          event handler: 이름 변경 이벤트 처리 
  const onNameChangeHandler = (event) => {
    const { value } = event.target;
    setName(value);
    setNameError(false);
    setNameErrorMessage('');
  }
  //          event handler: 사업자번호 변경 이벤트 처리 
  const onBnumberChangeHandler = (event) => {
    const { value } = event.target;
    setBnumber(value);
    setBnumberError(false);
    setBnumberErrorMessage('');
  }
  //          event handler: 패스워드 버튼 클릭 이벤트 처리 
  const onPasswordButtonClickHandler = () => {
    if (passwordButtonIcon === 'eye-light-off-icon') {
      setPasswordButtonIcon('eye-light-on-icon');
      setPasswordType('text');
    } else {
      setPasswordButtonIcon('eye-light-off-icon');
      setPasswordType('password');
    }
  }
  //          event handler: 아이디 키 다운 이벤트 처리 
  const onIdKeyDownHandler = (event) => {
    if (event.key !== 'Enter') return;
    if (!passwordRef.current) return;
    passwordRef.current.focus();
  }
  //          event handler: 패스워드 키 다운 이벤트 처리 
  const onPasswordKeyDownHandler = (event) => {
    if (event.key !== 'Enter') return;
    if (!nicknameRef.current) return;
    nicknameRef.current.focus();
  }

  //          event handler: 닉네임 키 다운 이벤트 처리 
  const onNicknameKeyDownHandler = (event) => {
    if (event.key !== 'Enter') return;
    if (!nameRef.current) return;
    onNextButtonClickHandler(); // 이건 왜 적용이 안될까.. 
    nameRef.current.focus();
  }
  //          event handler: 이름 키 다운 이벤트 처리 
  const onNameKeyDownHandler = (event) => {
    if (event.key !== 'Enter') return;
    if (!bnumberRef.current) return;
    bnumberRef.current.focus();
  }
  //          event handler: 사업자번호 키 다운 이벤트 처리 
  const onBnumberKeyDownHandler = (event) => {
    if (event.key !== 'Enter') return;
    onSignUpButtonClickHandler();
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
                <div className='auth-card-title'>{'회원가입'}</div>
                <div className='auth-card-page'>{`${page}/2`}</div>
              </div>
              <form className='auth-form' onSubmit={submitPost}>
                {page === '1' && (
                  <>
                    <InputBox ref={idRef} label='아이디*' type='text' name='id' placeholder='아이디를 입력해주세요' onChange={onIdChangeHandler} error={isIdError} message={idErrorMessage} onkeyDown={onIdKeyDownHandler} />
                    <InputBox ref={passwordRef} label='비밀번호*' type={passwordType} name='pw' placeholder='비밀번호를 입력해주세요' onChange={onPasswordChangeHandler} icon={passwordButtonIcon} onButtonClick={onPasswordButtonClickHandler} error={isPasswordError} message={passwordErrorMessage} onkeyDown={onPasswordKeyDownHandler} />
                    <InputBox ref={nicknameRef} label='닉네임*' type='text' name='nickname' placeholder='닉네임을 입력해주세요' onChange={onNicknameChangeHandler} error={isNicknameError} message={nicknameErrorMessage} onkeyDown={onNicknameKeyDownHandler} />
                  </>
                )}
                {page === '2' && (
                  <>
                    <InputBox ref={nameRef} label='이름*' type='text' name='name' placeholder='이름을 입력해주세요' onChange={onNameChangeHandler} error={isNameError} message={nameErrorMessage} onkeyDown={onNameKeyDownHandler} />
                    <InputBox ref={bnumberRef} label='사업자번호*' type='text' name='b_num' placeholder='사업자번호를 입력해주세요' onChange={onBnumberChangeHandler} error={isBnumberError} message={bnumberErrorMessage} onkeyDown={onBnumberKeyDownHandler} />
                  </>
                )}
                <div className='auth-card-bottom'>
                  {page === '1' && (
                    <div className='black-large-full-button' onClick={onNextButtonClickHandler}>{'다음 단계'}</div>
                  )}
                  {page === '2' && (
                    <div className='black-large-full-button' onClick={onSignUpButtonClickHandler}>{'회원가입'}</div>
                  )}
                  <div className='auth-description-box'>
                    <div className='auth-description'>{'이미 회원이신가요? '}<span onClick={onSignInButtonClickHandler} className='auth-description-link'>{'로그인'}</span></div>
                  </div>
                </div>
              </form >
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SignIn