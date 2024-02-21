import React from 'react'
import './style.css'
import MessageContentBox from './MessageContentBox'
import MessageListBox from './MessageListBox'

const MessagePage = () => {
    return(
        <div id='message-page-wrapper'>
            <div className='message-page-container'>
                <div className='message-page-left-box'>
                    <MessageListBox/>
                </div>
                <div className='message-page-right-box'>
                    <MessageContentBox/>
                </div>
            </div>
        </div>
    )
}
export default MessagePage