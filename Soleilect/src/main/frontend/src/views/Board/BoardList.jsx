import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Board.css';

const BoardList = () => {
    const nav = useNavigate();
    return (
        <div className='board-container'>
            <div className='board-continer-box'>
                <div className='board-top-container'>
                    <div className='board-top-tap-box'>
                        <div className='board-top-tap'>{'자유'}</div>
                        <div className='board-top-tap'>{'꿀팁메뉴얼'}</div>
                    </div>
                    <div className='board-top-write-box'>
                        <div className='board-top-write-button' onClick={() => { nav('/BoardWrite') }} style={{ cursor: "pointer" }}>
                            {'게시글 작성'}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BoardList