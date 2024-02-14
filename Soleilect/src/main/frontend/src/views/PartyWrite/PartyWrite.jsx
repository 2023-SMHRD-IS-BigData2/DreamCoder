import React, { useEffect, useRef, useState } from 'react'
import './PartyWrite.css';
import '../../App.css';

const PartyWrite = () => {
   // state 제목 영역 요소 참조 상태
   const titleRef = useRef(null);

   // state 본문 영역 요소 참조 상태
   const contentRef = useRef(null);

   // state 게시물 상태 
   const [title, setTitle] = useState();
   const [content, setContent] = useState();
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


   // effect 마운트 시 실행할 함수
   // useEffect(()=>{
   //     resetBoard();
   // },[]);

   // function -- submit --------------------- 
   // const submitPost = () => {
   //     let formData = new FormData();
   //     formData.append("",)
   //     formData.append("",)
   //     formData.append("",)
   //     formData.append("",)
   //     formData.append("",)
   //     formData.append("",)
   //     axios
   //         .post('/Sol/joinCon/join', formData)
   //         .then((response) => {
   //             console.log(response.data)
   //         })
   //         .catch((error) => {
   //             console.log(error)
   //         })
   //         nav('/ChartList')
   // }

   // event handler : 게시판 작성 등록하기 버튼
   // const onPartyBoardsonClickHandler = () => {
   //     {submitPost()}
   // }

   // render 게시물 작성 화면 컴포넌트 렌더링 
   return (
       <div id='board-write-wrapper'>
           <div className='board-write-container'>
               <div className='board-write-box'>
                   <div className='board-write-top'>
                       <div><h2>게시판 글쓰기</h2></div>
                       <div className='write-button-box'>
                           <div className='Write-button'>{'등록하기'}</div>
                       </div>
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
                           {/* <input className='board-write-title-input' type='text' placeholder='제목을 작성해주세요' value={title}></input> */}
                           <input ref={titleRef} className='board-write-title-input' type='text' placeholder='제목을 작성해주세요' onChange={onTitleChangeHandler} value={title}></input>
                       </div>
                   </div>
                   <div className='divider'></div>
                   <div className='board-write-content'>
                       <div className='board-wrtie-content-input'>
                           {/* date,progress,region */}
                           <input type='text' name='date' className='board-write-date' placeholder='모집기간 :' />
                           <input type='text' name='progress' className='board-write-progress' placeholder='모집률 :' />
                           <input type='text' name='region' className='board-write-region' placeholder='행정지역 : ' />
                       </div>
                       {/* content */}
                       <textarea ref={contentRef} className='board-write-content-textarea' placeholder='본문을 작성해주세요' onChange={onContentChangeHandler} value={content}></textarea>

                   </div>
               </div>
           </div>
       </div>
   )
}

export default PartyWrite