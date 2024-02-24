import React, { useEffect, useState } from 'react'
import './style.css'
import MessageContentBox from './MessageContentBox'
import MessageListBox from './MessageListBox'
import axios from 'axios'

const MessagePage = () => {
    //      state: 쪽지방 시퀀스 상태
    const [chatGroupSeq, setChatGroupSeq] = useState('');
    //      state: 검색한 유저 저장 상태
    const [saveSelectNickList, setSelectSearchNickList] = useState('');
    //          메세지 내용 불러오기 함수
    useEffect(() => {
        showMessage();
    }, [chatGroupSeq]);

    const showMessage = () => {
        let formData = new FormData();
        formData.append("receiver_nick", sessionStorage.getItem("receiver"))
        formData.append("sender_nick", sessionStorage.getItem("user_nick"))
        formData.append("chat_group_seq",chatGroupSeq)
        axios
            .post('/Sol/chatsCon/msgList', formData)
            .then((response) => {
                console.log(response.data);
                // window.location.reload();
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div id='message-page-wrapper'>
            <div className='message-page-container'>
                <div className='message-page-left-box'>
                    <MessageListBox showMessage={showMessage} setChatGroupSeq={setChatGroupSeq} setSelectSearchNickList={setSelectSearchNickList} />
                </div>
                <div className='message-page-right-box'>
                    <MessageContentBox chatGroupSeq={chatGroupSeq} saveSelectNickList={saveSelectNickList} />
                </div>
            </div>
        </div>
    )
}
export default MessagePage