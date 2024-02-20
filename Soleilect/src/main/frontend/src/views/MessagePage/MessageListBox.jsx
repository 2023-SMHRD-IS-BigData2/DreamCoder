import React, { useState } from 'react'
import './style.css'

const MessageListBox = () => {
    //          state: 쪽지방 클릭 상태 
    const RoomClickEvenHandler = () => {
       
    }
    const MessageRoom = ({ clicked, onClick }) => {
        return (
            <div className='messageRoom-wrapper'>
                <div className={clicked ? 'messageRoom-container-active' : 'messageRoom-container'}  onClick={onClick}>
                    <div className='messageRoom-icon-box'>
                        <div className='messageRoom-icon'></div>
                    </div>
                    <div className='messageRoom-text-box'>
                        <div className='messageRoom-top-text'>
                            <div className='messageRoom-nickname'>{'닉네임'}</div>
                            <div className='messageRoom-date'>{'Jan 21'}</div>
                        </div>
                        <div className='messageRoom-bottom-text-box'>
                            <div className='messageRoom-bottom-text'>{'마지막쪽지내용마지막쪽지내용마지막쪽지내용마지막쪽지내용'}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className='messageListBox-container'>
            <div className='messageListBox-top'></div>
            <div className='messageListBox-middle'>
                <MessageRoom onClick={RoomClickEvenHandler} />
                <MessageRoom onClick={RoomClickEvenHandler} />
                <MessageRoom onClick={RoomClickEvenHandler} />
            </div>
            <div className='messageListBox-bottom'></div>
        </div>
    )
}
export default MessageListBox