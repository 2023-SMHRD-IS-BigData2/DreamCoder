import React, { useRef, useState } from 'react'
import './style.css'
import axios from 'axios';
import moment from 'moment';

const MessageContentBox = ({ chatGroupSeq, saveSelectNickList, saveSelectMsg }) => {
    //          state: 메세지내용 상태
    const [chatMsg, setChatMsg] = useState('');
    //          state: 메세지내용 요소 참조 상태 
    const chatMsgRef = useRef(null);

    //          메세지 전송 함수
    const submitMessage = () => {
        console.log(chatMsg, sessionStorage.getItem("receiver"), sessionStorage.getItem("user_nick"));
        let formData = new FormData();
        formData.append("chat_msg", chatMsg)
        formData.append("receiver_nick", sessionStorage.getItem("receiver"))
        formData.append("receiver_id", sessionStorage.getItem("receiver_id"))
        formData.append("sender_nick", sessionStorage.getItem("user_nick"))
        formData.append("sender_id", sessionStorage.getItem("user_id"))
        axios
            .post('/Sol/chatsCon/insert', formData)
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
            .catch((error) => {
                console.log(error)
            })
    }
    //          event handler: 메세지 변경 이벤트 처리
    const onMsgChangeHandler = (event) => {
        const { value } = event.target;
        setChatMsg(value);
    }
    //          event handler: 전송 클릭시 발생 이벤트
    const submitMessageButton = () => {
        { submitMessage() }
    }
    //          event handler: 메세지 전송 키다운 이벤트 처리
    const onSubmitMessageKeyDownHandler = (e) => {
        if (e.key !== 'Enter') return;
        submitMessageButton();
    }
    //              component: 쪽지 내용 컴포넌트
    const MessageContentCard = () => {

        return (
            <div className='messageContentCard-wrapper'>
                {saveSelectMsg && saveSelectMsg.map((item, index) => (
                    <div key={index} className='messageContentCard-container'>
                        <div className='messageContentCard-top-box'>
                            {item.sender_nick==sessionStorage.getItem("user_nick") &&
                                <div className='messageContentCard-title-send'>{'보낸 쪽지'}</div>
                            }
                            {item.sender_nick!==sessionStorage.getItem("user_nick") &&
                                <div className='messageContentCard-title-receive'>{'받은 쪽지'}</div>
                            }
                            <div className='messageContentCard-date'>{moment(item.created_at).format("YYYY-MM-DD")}</div>
                        </div>
                        <div className='messageContentCard-bottom-box'>
                            <div className='messageContentCard-content'>{item.chat_msg}</div>
                        </div>
                        <div className='division-line'></div>
                    </div>
                ))}
            </div>

        );
    }
    return (
        <div className='messageContentBox-container'>
            <div className='messageContentBox-top'>
                <div className='messageContentBox-icon-box'>
                    <div className='messageContentBox-icon'></div>
                </div>
                <div className='messageContentBox-nickname'>{sessionStorage.getItem("receiver")}</div>
            </div>
            <div className='messageContentBox-middle'>
                <MessageContentCard />
            </div>
            <div className='messageContentBox-bottom'>
                <div className='messageContentBox-send-box'>
                    <div className='messageContentBox-input-box'>
                        <input className='messageContentBox-input' ref={chatMsgRef} value={chatMsg} onChange={onMsgChangeHandler} onKeyDown={onSubmitMessageKeyDownHandler} type='text' placeholder='메세지 입력'></input>
                        <div className='messageContentBox-input-button' onClick={submitMessageButton}>{'전송'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MessageContentBox