import React from 'react'
import './style.css'

const MessageContentBox = () => {
    //              component: 쪽지 내용 컴포넌트
    const MessageContentCard = ({tab}) => {
      
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
                <div className='messageContentBox-nickname'>{'닉네임'}</div>
            </div>
            <div className='messageContentBox-middle'>
                <MessageContentCard tab='send' />
                <MessageContentCard tab='send' />
                <MessageContentCard tab='receive' />
                <MessageContentCard tab='receive' />
                <MessageContentCard tab='send' />
                <MessageContentCard tab='receive' />
                <MessageContentCard tab='send' />
                <MessageContentCard tab='send' />
                <MessageContentCard tab='send' />
            </div>
            <div className='messageContentBox-bottom'>
                <div className='messageContentBox-send-box'>
                    <div className='messageContentBox-input-box'>
                        <input className='messageContentBox-input' type='text' placeholder='메세지 입력'></input>
                        <div className='messageContentBox-input-button'>{'전송'}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MessageContentBox