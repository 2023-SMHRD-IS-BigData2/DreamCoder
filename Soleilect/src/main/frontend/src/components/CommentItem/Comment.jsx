import React, { useEffect, useState } from 'react';

const Comment = (props) => {
    //  State 댓글 목록 상태
    const [comments, setComments] = useState([]);

    const {party_seq, user_id, user_nick} = props;

    // 댓글 삭제
    const deleteComment = (commentIndex) => {
        const updatedComments = comments.filter((comment, index) => index !== commentIndex);
        setComments(updatedComments);
    };

    useEffect(()=>{

    },[party_seq])

    return (
        <div className="comment-container">
            <h2>댓글</h2>
            <div className='comment-box'>
                <ul className="comment-list"> 
                    {comments.map((comment, commentIndex) => (
                        
                        <li key={commentIndex}>
                            <div className="comment-header">
                                <div className='board-detail-writer-profile-image'></div>
                                <div className='board-detail-writer-profile-conten'>
                                    <span className="comment-username">{comment.username}</span>
                                    <div className="comment-text">{comment.text}</div>
                                </div>
                                <div onClick={() => deleteComment(commentIndex)} className='comment-text-delete' >{'삭제'}</div>
                            </div>
                            <div className='comment-bottom-box'>
                            <div className='comment-bottom-date'>{'2024-02-16'}</div>
                            {/* <div className='comment-text-write-reply'>{'답글쓰기'}</div> */}
                            </div>
                            <div className='divider-comment'></div>

                        </li>
                    ))}

                </ul>
            </div>
            <div className='comment-new-box'>
                <form>
                    <input type="text" name="comment" placeholder="댓글 입력" />
                    <button type="submit">댓글 등록</button>
                </form>
            </div>
        </div>
    );
}

export default Comment