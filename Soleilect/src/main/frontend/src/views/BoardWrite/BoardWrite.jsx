import React, { useEffect, useRef, useState } from 'react'
import './BoardWrite.css';
import '../../App.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BoardWrite = () => {
    // state 제목 요소 참조 상태
    const titleRef = useRef(null);
    // state 내용 요소 참조 상태
    const contentRef = useRef(null);
    // state 조회수 요소 참조 상태
    const viewsRef = useRef(null);
    // state 말머리 코드 요소 참조 상태
    const headCodeRef = useRef(null);
    // state 말머리 이름 요소 참조 상태
    const headNameRef = useRef(null);
    // state 유저아이디 요소 참조 상태
    const userIdRef = useRef(null);
    // state 유저닉네임 요소 참조 상태
    const userNickRef = useRef(null);

    // state 이미지 입력 요소 참조 상태
    const imageInputRef = useRef(null);

    // state 게시물 상태 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [views, setViews] = useState(0);
    const [headCode, setHeadCode] = useState("f1");
    const [headName, setHeadName] = useState("자유게시판");
    const [userId, setUserId] = useState("");
    const [userNick, setUserNick] = useState("");

    // state 회원정보  상태
    const [user, setUser] = useState("");

    // state 사진 업로드 상태
    const [boardImageFileList, setBoardImageFileList] = useState([]);
    const [resetBoard] = useState();

    // state : 게시물 이미지 미리보기 url 상태
    const [imageUrls, setImageUrls] = useState([]);

    // event handler : 제목 변경 이벤트 처리
    const onBoardTitleChangeHandler = (e) => {
        const value = e.target.value;
        setTitle(value);

        if (!titleRef.current) return;
        titleRef.current.style.height = 'auto';
        titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }

    // event handler : 내용 변경 이벤트 처리
    const onBoardContentChangeHandler = (e) => {
        const value = e.target.value;
        setContent(value);

        if (!contentRef.current) return;
        contentRef.current.style.height = 'auto';
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }

    // event handler : 말머리 이름 변경 이벤트 처리
    const oncategorionChangeHandler = (e) => {
        const value = e.target.value;
        setHeadName(value);
        headName == '자유게시판' ? setHeadCode('f1') : setHeadCode('h1')
    }

    // event handler : 이미지 변경 이벤트 처리
    const onImageChangeHandler = (e) => {
        if (!e.target.files || !e.target.files.length) return;
        // files 파일를 가져옴
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        const newImageUrls = imageUrls?.map(item => item);

        // 미리 보는 이미지
        console.log('이미지 url' + imageUrl);
        console.log('imageUrls' + imageUrls);

        newImageUrls.push(imageUrl);
        setImageUrls(newImageUrls);

        // 백엔드 업로드 
        const newboardImageFileList = boardImageFileList.map(item => item);
        newboardImageFileList.push(file);
        setBoardImageFileList(newboardImageFileList);

        if (!imageInputRef.current) return;
        imageInputRef.current.value = '';
    }

    // event handler : 이미지ㅣ 업로드 버튼 클릭 이벤트 처리
    const onImageUploadButtonClickHandler = () => {
        if (!imageInputRef.current) return;
        imageInputRef.current.click();
    }

    // event handler : 이미지 삭제 이벤트 처리
    const onImageRemoveHandler = (index) => {
        const newImageUrls = imageUrls.filter((_, i) => i !== index);
        setImageUrls(newImageUrls);

        const newBoardImageFileList = boardImageFileList.filter((_, i) => i !== index);
        setBoardImageFileList(newBoardImageFileList);
    }


    // effect 마운트 시 실행할 함수
    // useEffect(()=>{
    //     resetBoard();
    // },[]);

    const nav = useNavigate();

    //   function -- submit ------------------------------
    const submitPost = () => {

        let formData = new FormData();
        formData.append("b_title",title)
        formData.append("b_content",content)
        formData.append("hd_code",headCode)
        formData.append("hd_name",headName)
        formData.append("user_id",userId)
        formData.append("user_nick",userNick)
        formData.append("b_views",views)
        axios
            .post('/Sol/boardCon/insert', formData)
            .then((response) => {
                console.log('일반 게시글 작성 성공')
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
        nav("/BoardList")
    }

    useEffect(() => {
        let formData = new FormData();
        formData.append("user_id", sessionStorage.getItem("user_id"))
        formData.append("user_pw", sessionStorage.getItem("user_pw"))
        axios
            .post('/Sol/logCon/login', formData)
            .then((res) => {
                setUser(res.data)
                setUserId(res.data.user_id)
                setUserNick(res.data.user_nick)
            })
            .catch((error) => {
                console.log(error)
            })

    }, [])

    // event handler : 일반 게시판 등록하기 버튼
    const onBoardonClickHandler = () => {
        submitPost()
    }



    // render 게시물 작성 화면 컴포넌트 렌더링 
    return (
        <div id='board-write-wrapper'>
            <div className='board-write-container'>
                <div className='board-write-box'>
                    <div className='board-write-top'>
                        <div><h2>게시판 글쓰기</h2></div>
                        <div className='write-button-box'>
                            <div className='Write-button' onClick={onBoardonClickHandler}>{'등록하기'}</div>
                        </div>
                    </div>
                    <div className='board-check-top'>
                        <div className='board-write-check'>
                            <div className='board-write-check-box'>
                                <select name="hd_name" className="write-check-select" id='write-select-box' onChange={oncategorionChangeHandler} ref={headNameRef}>
                                    <option value="자유게시판" className="write-check-select">{'자유 게시판 '}</option>
                                    <option value="꿀팁 메뉴얼" className="write-check-select">{'꿀팁 메뉴얼'}</option>
                                </select>
                                <input name='hd_code' type="hidden" ref={headCodeRef} value={headCode} />
                            </div>
                        </div>
                        {/* 이미지 첨부 아이콘 */}
                        <div className='icon-button-image' onClick={onImageUploadButtonClickHandler}>
                            <div className='image-box-light-icon'></div>
                        </div>
                    </div>
                    <div className='board-write-top-box'>
                        <input type='file' ref={imageInputRef} accept="image/*" style={{ display: 'none' }} onChange={onImageChangeHandler} />
                        <div className='board-write-title'>
                            <input ref={titleRef} name='b_title' className='board-write-title-input' type='text' placeholder='제목을 작성해주세요' onChange={onBoardTitleChangeHandler} value={title}></input>
                        </div>
                    </div>

                    <div className='divider'></div>
                    <div className='board-write-content'>
                        <div className='board-wrtie-content-input'>
                        </div>
                        {/* content */}
                        <textarea name='b_content' ref={contentRef} className='board-write-content-textarea' placeholder='본문을 작성해주세요' onChange={onBoardContentChangeHandler} value={content}></textarea>

                        {/* 아이디, 닉네임, 조회수 */}
                        <input name='user_id' type="hidden" ref={userIdRef} value={userId} />
                        <input name='user_nick' type="hidden" ref={userNickRef} value={userNick}/>
                        <input name="b_views" type="hidden" ref={viewsRef} value={views}/>
                    </div>
                    {/* 이미지 미리보기 */}
                    <div className='board-write-images-box'>
                        {imageUrls?.map((imageUrl, index) =>
                            <div className='board-write-image-box'>
                                <img className='board-write-img' src={imageUrl} />
                                <div className='icon-button image-close' onClick={() => onImageRemoveHandler(index)}>
                                    <div className='close-icon'></div>
                                </div>
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoardWrite