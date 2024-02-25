import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './PartyWrite.css';
import '../../App.css';
import axios from "axios";


const PartyWrite = () => {
    // state 제목 영역 요소 참조 상태
    const titleRef = useRef(null);

    const contentRef = useRef(null);

    const startRef = useRef(null);

    const endRef = useRef(null);

    const targetCntRef = useRef(null);

    const nowCntRef = useRef(null);

    const partLocRef = useRef(null);

    const userIdRef = useRef(null);

    const userNickRef = useRef(null);

    const partyViewsRef = useRef(null);

    const partyIsJoinRef = useRef(null);

    // state 게시물 상태 
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const [targetCnt, setTargetCnt] = useState(0);
    const [nowCnt, setNowCnt] = useState(0);
    const [partLoc, setPartyLoc] = useState("");
    const [userId, setUserId] = useState("");
    const [userNick, setUserNick] = useState("");
    const [partyViews, setPartyViews] = useState(0);
    const [partyIsJoin, setPartyIsJoin] = useState("모집중");

    const [resetBoard] = useState();

    // event handler : 제목 변경 이벤트 처리
    const onTitleChangeHandler = (e) => {
        const value = e.target.value;
        setTitle(value);

        if (!titleRef.current) return;
        titleRef.current.style.height = 'auto';
        titleRef.current.style.height = `${titleRef.current.scrollHeight}px`;
    }

    // event handler : 내용 변경 이벤트 처리
    const onContentChangeHandler = (e) => {
        const value = e.target.value;
        setContent(value);

        if (!contentRef.current) return;
        contentRef.current.style.height = 'auto';
        contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
    }

    // event handler : 시작일자 변경 이벤트 처리
    const onStartChangeHandler = (e) => {
        const value = e.target.value;
        setStart(value);
    }

    // event handler : 마감일자 변경 이벤트 처리
    const onEndChangeHandler = (e) => {
        const value = e.target.value;
        setEnd(value);
    }

    // event handler : 목표수치 변경 이벤트 처리
    const ontargetCntChangeHandler = (e) => {
        const value = e.target.value;
        setTargetCnt(value);
    }


    // event handler : 모집장소 변경 이벤트 처리
    const onpartLocChangeHandler = (e) => {
        const value = e.target.value;
        setPartyLoc(value);
    }

    // event handler : 모집 or 마감 변경 이벤트 처리
    const onpartyisjoinChangeHandler = (e) => {
        const value = e.target.value;
        setPartyIsJoin(value);
    }

    // effect 마운트 시 실행할 함수
    // useEffect(()=>{
    //     resetBoard();
    // },[]);

    const nav = useNavigate();

    // function -- submit ----------------------------- 
    const submitPost = () => {

        let formData = new FormData();
        formData.append("party_title", title)
        formData.append("party_content", content)
        formData.append("party_isJoin", partyIsJoin)
        formData.append("party_loc", partLoc)
        formData.append("start_at", start)
        formData.append("end_at", end)
        formData.append("party_views", partyViews)
        formData.append("target_cnt", targetCnt)
        formData.append("now_cnt", nowCnt)
        formData.append("user_id", sessionStorage.getItem("user_id"))
        formData.append("user_nick", sessionStorage.getItem("user_nick"))
        formData.append("party_isjoin", partyIsJoin)
        axios
            .post('/Sol/partyBoardCon/insert', formData)
            .then((response) => {
                console.log('게시글 작성 성공')
            })
            .catch((error) => {
                console.log(error)
            })
        nav("/PartyBoardList")
    }

    // event handler : 게시판 작성 등록하기 버튼
    const onPartyBoardsonClickHandler = () => {
        submitPost()
    }

    //  회원정보 상태 가져오기
    // useEffect(() => {
    //     let formData = new FormData();
    //     formData.append("user_id", sessionStorage.getItem("user_id"))
    //     formData.append("user_pw", sessionStorage.getItem("user_pw"))
    //     axios
    //         .post('/Sol/logCon/login', formData)
    //         .then((res) => {   
    //             setUserId(res.data.data[0].user_id)
    //             setUserNick(res.data.data[0].user_nick)
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })

    // }, [])

    // render 게시물 작성 화면 컴포넌트 렌더링 
    return (
        <div id='board-write-wrapper'>
            <div className='board-write-container'>
                <div className='board-write-box'>
                    <div className='board-write-top'>
                        <div><h2>게시판 글쓰기</h2></div>
                    </div>
                    <div className='board-check-top'>
                        <div className='board-write-check'>
                            <div className='board-write-check-box'>
                                <select name="" className="write-check-select" id='write-select-box'>
                                    <option value="" className="write-check-select">{'발전량 모집 게시판 '}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='board-write-top-box'>
                        <div className='board-write-title'>
                            <input name='party_title' ref={titleRef} className='board-write-title-input' type='text' placeholder='제목을 작성해주세요' onChange={onTitleChangeHandler} value={title} autoComplete="off"></input>
                        </div>
                    </div>
                    <div className='divider'></div>
                    <div className='board-write-content'>
                        <div className='board-wrtie-content-input'>
                            {/* date,progress,region */}
                            <div className='board-write-date'>
                                모집 기간 <input type='date' name='start_at' ref={startRef} data-placeholder="날짜 선택" onChange={onStartChangeHandler} className='board-write-date-calender'></input> {' ~ '}
                                <input type='date' name='end_at' ref={endRef} data-placeholder="날짜 선택" onChange={onEndChangeHandler} className='board-write-date-calender'></input>
                            </div>


                            <div className='board-write-input-fix'>
                                모집 목표 수치 :<input type='text' name='target_cnt' className='board-write-progress' ref={targetCntRef} onChange={ontargetCntChangeHandler} autoComplete="off"/>{' kw'}
                            </div>
                            <div className='board-write-input-fix-now'>
                                모집 현재 수치 :<input type='text' name='now_cnt' className='board-write-progress' ref={nowCntRef} value={nowCnt} placeholder='현재수치' autoComplete="off" readOnly/>{' kw'}
                            </div>
                            <div className='board-write-input-fix-loc'>
                                모집 장소 :<input type='text' name='party_loc' className='board-write-region' ref={partLocRef} onChange={onpartLocChangeHandler} autoComplete="off" placeholder=''/>
                            </div>
                            <div className='board-write-input-fix-isJoin'>
                                모집 상황 <select name="party_isJoin" className="write-check-isjoin-select" id='write-select-isjoin-box' onChange={onpartyisjoinChangeHandler} ref={partyIsJoinRef}>
                                    <option value="모집 중" className="write-check-isjoin-select">{'모집 중 '}</option>
                                    <option value="마감" className="write-check-select">{'마감 '}</option>
                                </select>
                            </div>
                            <input type='hidden' name='user_id' ref={userIdRef} placeholder='아이디' value={sessionStorage.getItem("user_id")} readOnly></input>
                            <input type='hidden' name='user_nick' ref={userNickRef} placeholder='닉네임' value={sessionStorage.getItem("user_nick")} readOnly></input>
                            <input type='hidden' name='party_views' ref={partyViewsRef} placeholder='조회수' value={partyViews} readOnly></input>
                        </div>
                        {/* content */}
                        <textarea name='party_content' ref={contentRef} className='party-board-write-content-textarea' placeholder='본문을 작성해주세요' onChange={onContentChangeHandler} value={content} rows={10}></textarea>
                        {/* 임시로 넣어 놓음 */}

                    </div>
                </div>

            </div>
            <div className='write-button-box'>
                    <div className='Write-button-regist' onClick={onPartyBoardsonClickHandler} >{'등록하기'}</div>
                    {/* <input type='submit' value='등록하기' className='Write-button' onClick={onPartyBoardsonClickHandler} ></input> */}
                </div>
        </div>
    )
}

export default PartyWrite