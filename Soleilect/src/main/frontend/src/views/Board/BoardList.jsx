import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Board.css';
import FreeBoard from './FreeBoard';
import axios from 'axios';
import { ChartContext } from '../../context/ChartContext';
import moment from 'moment';

const BoardList = () => {
    const { list, setList } = useContext(ChartContext);
    const nav = useNavigate();

    useEffect(() => {
        let formData = new FormData();
        axios
            .get('/Sol/boardCon/list', formData)
            .then((res) => {
                setList(res.data.data)
                console.log(res.data.data);
                console.log(list);
                console.log(list.map((item) => item.b_title));
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    // state 탭 상태
    const [toggle, setToggle] = useState('notion-board');

    // event handler : 공지 탭 클릭 이벤트
    const notionTabonClickHandler = () => {
        setToggle('notion-board');
        console.log(toggle);
    }
    // event handler : 자유 게시판 탭 클릭 이벤트
    const freeTabonClickHandler = () => {
        setToggle('free-board');
    }
    // event handler : 꿀팁 메뉴얼 탭 클릭 이벤트
    const tipTabonClickHandler = () => {
        setToggle('tip-board');
    }

    return (
        <div className='board-container'>
            <div className='board-continer-box'>
                <div className='board-top-container'>
                    <div className={toggle === 'notion-board' ? 'board-tab-button-box-active' : 'board-tab-button-box'} onClick={notionTabonClickHandler}>
                        <div className='board-top-tap-button'>{'공지'}</div>
                    </div>
                    <div className={toggle === 'free-board' ? 'board-tab-button-box-active' : 'board-tab-button-box'} onClick={freeTabonClickHandler}>
                        <div className='board-top-tap-button'>{'자유'}</div>
                    </div>
                    <div className={toggle === 'tip-board' ? 'board-tab-button-box-active' : 'board-tab-button-box'} onClick={tipTabonClickHandler}>
                        <div className='board-top-tap-button'>{'꿀팁메뉴얼'}</div>
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

                    <table className='board-table'>
                        <thead >
                            <tr>
                                <th className='board-contant-th'>{''}</th>
                                <th className='board-contant-th'>{'제목'}</th>
                                <th className='board-contant-th'>{'작성자'}</th>
                                <th className='board-contant-th'>{'작성일'}</th>
                                <th className='board-contant-th'>{'조회수'}</th>
                            </tr>
                        </thead>
                        {/* 게시글 list */}
                        {list.map((item, index) => (
                            <tbody key={index}  onClick={() => {
                                // nav(`/Detail/${index}`);
                                nav(`/BoardDetail/${index}`);
                            }}>
                                <tr className='board-bottom-list'>
                                    <td className='board-contant-td'>
                                        <div className='board-content-title'>
                                            <div className='board-title'>{item.b_seq}</div>
                                        </div>
                                    </td>
                                    <td className='board-contant-td'>
                                        <div className='board-content-title'>
                                            <div className='board-title'>{item.b_title}</div>
                                        </div>
                                    </td>
                                    <td className='board-contant-td'>
                                        <div className='board-content-bottom'>
                                            <div className='board-bottom-name'>{item.user_nick}</div>
                                        </div>
                                    </td>
                                    <td className='board-contant-td'>
                                        <div className='board-content-bottom-date'>
                                            <div className='board-bottom-date'>{moment(item.created_at).format("YYYY-MM-DD")}</div>
                                        </div>
                                    </td>
                                    <td className='board-contant-td'>
                                        <div className='board-content-bottom-view'>
                                            <div className='board-bottom-view'>{item.b_views}</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BoardList