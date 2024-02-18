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
                        <div className='board-top-tap-free'>{'공지'}</div>
                    </div>
                    <div className='board-top-tap-box'>
                        <div className='board-top-tap-free'>{'자유'}</div>
                    </div>
                    <div className='board-top-tap-box'>
                        <div className='board-top-tap-manual'>{'꿀팁메뉴얼'}</div>
                    </div>
                    <div className='board-top-write-box'>
                        <div className='board-top-write-button' onClick={() => { nav('/BoardWrite') }} style={{ cursor: "pointer" }}>
                            {'게시글 작성'}
                        </div>
                    </div>
                </div>
            </div>

            <div className='board-content-container'>
                <div className='board-contant-container-box'>
                    <div className='board-contant-top'>{'자유게시판'}</div>
                    
                    <table>
                        <thead className='board-contant-thead'>
                            <tr>
                                <th>{'제목'}</th>
                                <th>{'작성자'}</th>
                                <th>{'작성일'}</th>
                                <th>{'조회수'}</th>
                            </tr>
                        </thead>
                        {/* 게시글 list */}

                        <tbody>                        
                            <tr className='board-bottom-list'>                          
                                <td>
                                    <div className='board-content-title'>
                                        <div className='board-title'>{'1년에 수리업체 몇번 정도 부르세요?'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom'>
                                        <div className='board-bottom-name'>{'홍길동'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom-date'>
                                        <div className='board-bottom-date'>{'2024-01-21'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom-view'>
                                        <div className='board-bottom-view'>{'52'}</div>
                                    </div>
                                </td>                            
                            </tr>  

                            <tr className='board-bottom-list'>                           
                                <td>
                                    <div className='board-content-title'>
                                        <div className='board-title'>{'1년에 수리업체 몇번 정도 부르세요?'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom'>
                                        <div className='board-bottom-name'>{'홍길동'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom-date'>
                                        <div className='board-bottom-date'>{'2024-01-21'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom-view'>
                                        <div className='board-bottom-view'>{'52'}</div>
                                    </div>
                                </td>                            
                            </tr>  

                            <tr className='board-bottom-list'>                           
                                <td>
                                    <div className='board-content-title'>
                                        <div className='board-title'>{'1년에 수리업체 몇번 정도 부르세요?'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom'>
                                        <div className='board-bottom-name'>{'홍길동'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom-date'>
                                        <div className='board-bottom-date'>{'2024-01-21'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom-view'>
                                        <div className='board-bottom-view'>{'52'}</div>
                                    </div>
                                </td>                            
                            </tr>

                            <tr className='board-bottom-list'>                           
                                <td>
                                    <div className='board-content-title'>
                                        <div className='board-title'>{'1년에 수리업체 몇번 정도 부르세요?'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom'>
                                        <div className='board-bottom-name'>{'홍길동'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom-date'>
                                        <div className='board-bottom-date'>{'2024-01-21'}</div>
                                    </div>
                                </td>
                                <td>
                                    <div className='board-content-bottom-view'>
                                        <div className='board-bottom-view'>{'52'}</div>
                                    </div>
                                </td>                            
                            </tr>  


                        </tbody>                      
                    </table>

                
                </div>
            </div>
        </div>
    )
}

export default BoardList