import React, { useEffect, useRef, useState } from 'react'
import '../PartyWrite/PartyWrite.css';
import '../../App.css';

const BoardWrite = () => {
  // state 제목 영역 요소 참조 상태
  const titleRef = useRef(null);

  // state 본문 영역 요소 참조 상태
  const contentRef = useRef(null);

  // state 이미지 입력 요소 참조 상태
  const imageInputRef = useRef(null);

  // state 게시물 상태 
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [boardImageFileList, setBoardImageFileList] = useState([]);
  const [resetBoard] = useState();

  // state : 게시물 이미지 미리보기 url 상태
  const [imageUrls, setImageUrls] = useState([]);

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
                      {/* 이미지 첨부 아이콘 */}
                      <div className='icon-button-image' onClick={onImageUploadButtonClickHandler}>
                          <div className='image-box-light-icon'></div>
                      </div>
                  </div>
                  <div className='board-write-top-box'>
                      <input type='file' ref={imageInputRef} accept="image/*" style={{ display: 'none' }} onChange={onImageChangeHandler} />
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