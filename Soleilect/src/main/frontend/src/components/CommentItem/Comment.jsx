import React, { useState } from 'react';

const Comment = () => {
    //  State 댓글 목록 상태
    const [comments, setComments] = useState([]);

    // 새 댓글 추가
    const addComment = (comment) => {
        setComments([...comments, comment]);
    };

    // 해당 댓글에 대댓글 추가
    const addReply = (commentIndex, reply) => {
        const updatedComments = [...comments];
        updatedComments[commentIndex].replies.push(reply);
        setComments(updatedComments);
    };

    // 댓글 삭제
    const deleteComment = (commentIndex) => {
        const updatedComments = comments.filter((comment, index) => index !== commentIndex);
        setComments(updatedComments);
    };

    // 대댓글 삭제
    const deleteReply = (commentIndex, replyIndex) => {
        const updatedComments = [...comments];
        updatedComments[commentIndex].replies = updatedComments[commentIndex].replies.filter(
            (reply, index) => index !== replyIndex
        );
        setComments(updatedComments);
    };

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
                            <div className='divider-comment'></div>

                            <ul>
                                {comment.replies.map((reply, replyIndex) => (
                                    <li key={replyIndex}>
                                        <div className="comment-header">
                                            <div className='board-detail-writer-profile-image'></div>
                                            <div className='board-detail-writer-profile-conten'>
                                            <span className="comment-username">{reply.username}</span>
                                            <div className="comment-text"> {reply.text}</div>
                                            </div>
                                            <div onClick={() => deleteReply(commentIndex, replyIndex)} className='comment-text-delete'>{'삭제'}</div>
                                        </div>
                                        <div className='divider-comment-reply'></div>
                                    </li>
                                ))}
                            </ul>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const reply = {
                                        text: e.target.reply.value,
                                        profileImage: "대댓글 프로필 이미지 경로",
                                        username: "홍길동"
                                    };
                                    addReply(commentIndex, reply);
                                    e.target.reply.value = '';
                                }}
                            >
                                <div className='comment-reply-input'>
                                    <input type="text" name="reply" placeholder="대댓글 입력" />
                                    <button type="submit">대댓글 등록</button>
                                </div>

                            </form>
                        </li>
                    ))}

                </ul>
            </div>
            <div className='comment-new-box'>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const comment = {
                            text: e.target.comment.value,
                            replies: [],
                            profileImage: "댓글 프로필 이미지 경로",
                            username: "홍길동"
                        };
                        addComment(comment);
                        e.target.comment.value = '';
                    }}
                >
                    <input type="text" name="comment" placeholder="댓글 입력" />
                    <button type="submit">댓글 등록</button>


                </form>
            </div>
        </div>
    );
}

export default Comment