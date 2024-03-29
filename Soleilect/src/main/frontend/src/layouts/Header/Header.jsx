import React, { useState, ChangeEvent, useRef, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import './Header.css';
import '../../App.css';

const Header = () => {
  //  function : 네비게이트
  const navigate = useNavigate();
  //  state : 토글 상태
  const [toggle ,setToggle] = useState(localStorage.getItem('header-toggle') || '')

  // 로고이벤트 클릭 
  const onLogoClickHandler = () => {
    setToggle('');
    navigate('/');

  };
  const onSignUpButtonClickHandler = () => {
    setToggle('');
    navigate('/SignUp');

  };
  const onSignInButtonClickHandler = () => {
    setToggle('');
    navigate('/SignIn');

  };
  const onMypageButtonClickHandler = () => {
    setToggle('');
    navigate('/Mypage');
  }
  const onLogoutButtonClickHandler = () => {
    sessionStorage.clear();
    setIslogin(false);
    navigate('/');
    setToggle('');
  }
  const onMessagepageButtonClickHandler = () => {
    setToggle('');
    navigate('/MessagePage');
  }
  //          state: 로그인 상태
  const [isLogin, setIslogin] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("user_id") === null) {
     
    } else {
      setIslogin(true);
     
    }
  })

  //        component: 검색 버튼 컴포넌트                 //
  const SearchButton = () => {


    // state : 검색 버튼 요소 참조 상태
    const searchButtonRef = useRef(null);

    //  state : 검색 버튼 상태
    const [status, setStatus] = useState(false);

    //  state : 검색어 상태
    const [word, setWord] = useState('');

    // state : 검색어 path variavle 상태
    const { searchWord } = useParams();

    //  event handler : 검색어 변경  클릭 이벤트 처리 함수
    const onSearchWordChangeHandler = (e) => {
      const value = e.target.value;
      setWord(value);
      return;
    }

    //   event handler : 검색어 키처리 이벤트 처리 함수
    const onSearchWordKeyDownHandler = (e) => {
      if (e.key !== 'Enter') return;
      if (searchButtonRef.current) return;
      searchButtonRef.current?.click();
    }

    //   event handler : 검색 버튼 클릭 이벤트 처리 함수
    const onSearchButtonClickHandler = () => {
      if (!status) {
        setStatus(!status);
        return;
      }

      navigate(`/Search/:{word}`);
    };



    //  effect : 검색어 면경 될때마다 실행될 함수 //
    useEffect(() => {
      if (searchWord) {
        setWord(searchWord);
        setStatus(true);
      }
    }, [searchWord])



    if (!status)
      //-------------------- 클릭 false 상태
      return (
        <div className='icon-button' onClick={onSearchButtonClickHandler}>
          <div className='search-icon-box'></div>
        </div>
      )
    // -----------------------클릭 ture 상태
    return (
      <div className='header-search-input-box'>
        <input className='header-search-input' type='text' placeholder='검색어를 입력해주세요.'
          value={word} onChange={onSearchWordChangeHandler} onKeyDown={onSearchWordKeyDownHandler} />

        <div ref={searchButtonRef} className='icon-button' onClick={onSearchButtonClickHandler}>
          <div className='search-icon-box'>
          </div>
        </div>
      </div>
    );

  }

  // toggle 값이 변경될때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem('header-toggle',toggle)
  }, [toggle]);


  const onPartyBoardClickHandler = () => {
    setToggle('party-board')
  }
  const  onMapClickHandler = () => {
    setToggle('map')
  }
  const  onInfoClickHandler = () => {
    setToggle('info-board')
  }
  const  onFreeBoardClickHandler = () => {
    setToggle('free-board')
  }

  return (
    <div id='header-wrapper'>
      <div id="header">
        <div className='header-container'>

          <div className='header-left-box' >
            <div className='main-icon-box' onClick={onLogoClickHandler}>
              <div className='icon main-log-icon'></div>
            </div>

            <div className='header-text' onClick={onPartyBoardClickHandler}><Link to='/PartyBoardList' className={toggle === 'party-board' ? 'header-text-tab' : 'header-text'}>모집게시판</Link></div>
            <div className='header-text' onClick={onMapClickHandler}><Link to='/map' className={toggle === 'map' ? 'header-text-tab' : 'header-text'}>발전량지도</Link></div>
            <div className='header-text' onClick={onInfoClickHandler}><Link to='/InfoList' className={toggle === 'info-board' ? 'header-text-tab' : 'header-text'}>정보게시판</Link></div>
            <div className='header-text' onClick={onFreeBoardClickHandler}><Link to='/BoardList' className={toggle === 'free-board' ? 'header-text-tab' : 'header-text'}>자유게시판</Link></div>

          </div>


          <div className='header-right-box'>
            {!isLogin ?
              (<>
                <div className='black-button' onClick={onSignUpButtonClickHandler}>{'회원가입'}</div>
                <div className='black-button' onClick={onSignInButtonClickHandler}>{'로그인'}</div>
              </>)
              :
              (<>
                <div className='black-button-logout' onClick={onLogoutButtonClickHandler}>{'로그아웃'}</div>
                <div className='black-button' onClick={onMypageButtonClickHandler}>{'마이페이지'}</div>
                <div className='header-icon-box' onClick={onMessagepageButtonClickHandler}><div className='icon message-icon'></div></div>
              </>)
            }

          </div>

        </div>
      </div>
    </div>

  )
}

export default Header