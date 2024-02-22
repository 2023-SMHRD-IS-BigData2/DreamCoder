import axios from 'axios';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { ChartContext } from '../../context/ChartContext';

const Comment = (props) => {
    //  State 댓글 목록 상태
    const [comments, setComments] = useState([]);

    const {party_seq, user_id, user_nick} = props;

    // state 댓글 상태 
    const [p_cmt_ref,set_p_cmt_ref] = useState(1);
    const [p_cmt_ref_level,set_p_cmt_ref_level] = useState(1);
    const [p_cmt_parent,set_p_cmt_parent] = useState(1);
    const [p_cmt_content,set_p_cmt_content] = useState("");

    // 내용 요소 참조 상태
    const contentRef = useRef(null);

    // event handler : 댓글 content 변경 이벤트 처리
    const onCommentContentChangeHandler = (e) => {
        const value = e.target.value;
        set_p_cmt_content(value);
        console.log(p_cmt_content);
    }

    // 댓글 삭제
    // const deleteComment = (commentIndex) => {
    //     const updatedComments = comments.filter((comment, index) => index !== commentIndex);
    //     setComments(updatedComments);
    // };

    // useEffect(()=>{
    //     let formData = new FormData();
    //     console.log(party_seq);
    //     formData.append("party_seq",party_seq)
    // axios
    // .post('/Sol/partyCommentCon/list',formData)
    // .then((res)=>{
    //     setComments(res.data.data)
    //     console.log(res);
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
    // },[])

    // event handler  : 댓글 등록 클릭 이벤트-------------------------------
    const onCommentsSubmitClickHandler = () => {
        console.log('실행');
        {commentsSubmit()}
        
    }
    // function : 댓글 등록 백엔드 연결
    const commentsSubmit = () => {
        let formaData =  new FormData();
        formaData.append("party_seq",party_seq)
        formaData.append("p_cmt_ref",1)
        formaData.append("p_cmt_ref_level",1)
        formaData.append("p_cmt_content",p_cmt_content)
        formaData.append("p_cmt_parent",1)
        formaData.append("user_id",user_id)
        formaData.append("user_nick",user_nick)
        axios
        .post('/Sol/partyCommentCon/insert',formaData)
        .then((res)=>{
            setComments(res.data.data)
            console.log(res.data.data);
            console.log('댓글등록 성공');
        })

    }

    // event handler  : 댓글 삭제 클릭 이벤트-------------------------------
    const onCommentsDeleteClickHandler = () => {
        {commentsDelete()}
    }
    // function : 댓글 삭제 백엔드 연결
    const commentsDelete = () => {
        let formaData =  new FormData();
        formaData.append("p_cmt_seq")
        axios
        .post('/Sol/partyCommentCon/delete',formaData)
        .then((res)=>{
            setComments(res.data.data)
            console.log(res.data.data);
            console.log('댓글삭제 성공');
        })
    }

    return (
        <div className="comment-container">
            <h2>댓글</h2>
            <div className='comment-box'>
                <ul className="comment-list"> 
                    
                        
                        {/* <li key={commentIndex}> */}
                            <div className="comment-header">
                                <div className='board-detail-writer-profile-image'></div>
                                <div className='board-detail-writer-profile-conten'>
                                    {/* <span className="comment-username">{comment.username}</span> */}
                                    {/* <div className="comment-text">{comment.text}</div> */}
                                </div>
                                {/* <div onClick={() => onCommentsDeleteClickHandler(commentIndex)} className='comment-text-delete' >{'삭제'}</div> */}
                            </div>
                            <div className='comment-bottom-box'>
                            <div className='comment-bottom-date'>{'2024-02-16'}</div>
                            {/* <div className='comment-text-write-reply'>{'답글쓰기'}</div> */}
                            </div>
                            <div className='divider-comment'></div>

                        {/* </li> */}
                    

                </ul>
            </div>
            <div className='comment-new-box'>
                <form>
                    <input type="text" name="p_cmt_content" placeholder="댓글 입력" onChange={onCommentContentChangeHandler} ref={contentRef} value={p_cmt_content}/>
                    <button type="submit" onClick={onCommentsSubmitClickHandler} >댓글 등록</button>
                </form>
            </div>
        </div>
    );
}

export default Comment