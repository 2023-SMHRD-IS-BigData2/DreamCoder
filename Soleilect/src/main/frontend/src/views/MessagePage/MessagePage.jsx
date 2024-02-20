import React from 'react'
import './style.css'
import MessageContentBox from './MessageContentBox'
import MessageListBox from './MessageListBox'

const MessagePage = () => {
    return(
        <div id='message-page-wrapper'>
            <div className='message-page-container'>
                <div className='message-page-left-box'>
                    <MessageContentBox/>
                </div>
                <div className='message-page-right-box'>
                    <MessageListBox/>
                </div>
            </div>
        </div>
    )
}
export default MessagePage