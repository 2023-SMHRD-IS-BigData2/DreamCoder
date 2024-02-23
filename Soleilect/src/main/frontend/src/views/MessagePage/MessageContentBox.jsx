import React, { useRef, useState } from 'react'
import './style.css'
import axios from 'axios';

const MessageContentBox = () => {
    //          state: 메세지내용 상태
    const [chatMsg, setChatMsg] = useState('');
    //          state: 메세지내용 요소 참조 상태 
    const chatMsgRef = useRef(null);

    const submitMessage = () => {
        console.log(chatMsg, sessionStorage.getItem("receiver"), sessionStorage.getItem("user_nick"));
        let formData = new FormData();
        formData.append("chat_msg", chatMsg)
        formData.append("receiver_nick", sessionStorage.getItem("receiver"))
        formData.append("sender_nick", sessionStorage.getItem("user_nick"))
        axios
            .get('/Sol/chatsCon/insert', formData)
            .then((response) => {
                console.log(response);
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
    const MessageContentCard = ({ tab }) => {

        return (

            <div className='messageContentCard-wrapper'>
                <div className='messageContentCard-container'>
                    <div className='messageContentCard-top-box'>
                        {tab === 'send' &&
                            <div className='messageContentCard-title-send'>{'보낸 쪽지'}</div>
                        }
                        {tab === 'receive' &&
                            <div className='messageContentCard-title-receive'>{'받은 쪽지'}</div>
                        }
                        <div className='messageContentCard-date'>{'24/02/20 09:55'}</div>
                    </div>
                    <div className='messageContentCard-bottom-box'>
                        <div className='messageContentCard-content'>{'쪽지내용이들어갑니당쪽지내용이들어갑니당'}</div>
                    </div>
                    <div className='division-line'></div>
                </div>
            </div>
        );
    }
    return (
        <div className='messageContentBox-container'>
            <div className='messageContentBox-top'>
                <div className='messageContentBox-icon-box'>
                    <div className='messageContentBox-icon'></div>
                </div>
                <div className='messageContentBox-nickname'>{(sessionStorage.getItem("receiver"))}</div>
            </div>
            <div className='messageContentBox-middle'>
                {/* <MessageContentCard tab='send' />
                <MessageContentCard tab='receive' /> */}
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