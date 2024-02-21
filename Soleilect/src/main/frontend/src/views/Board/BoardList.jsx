import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Board.css';
import axios from 'axios';
import { ChartContext } from '../../context/ChartContext';
import moment from 'moment';
import Pagination from '../../components/Pagination/Pagination';
import usePagination from '../../hooks/pagination';

const BoardList = () => {
    const { list, setList } = useContext(ChartContext);
    const nav = useNavigate();

    // state 탭 상태
    const [toggle, setToggle] = useState('all-board');
    // state 말머리 코드 상태
    const [toggleCode, setToggleCode] = useState('');
    // state 말머리 전체 클릭 상태
    const [toggleHeadCode, setToggleHeadCode] = useState(true);
    // state 말머리 이름 상태 
    const [headName, setHeadName] = useState('전체 게시판')

    // 페이지네이션 훅 호출
    const { currentPage, currentData, totalPageCount, nextPage, prevPage, goToPage } = usePagination(8, list); 
    // 한 페이지당 8개의 항목 설정

    useEffect(() => {
        if(toggleCode=='')return;
        let formData = new FormData();
        formData.append('hd_code', toggleCode)
        axios
            .post('/Sol/boardCon/filter', formData)
            .then((res) => {
                setList(res.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [toggleCode])


    useEffect(() => {

        let formData = new FormData();
        axios
            .get('/Sol/boardCon/list', formData)
            .then((res) => {
                setList(res.data.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [toggleHeadCode])

    
    // event handler : 전체 탭 클릭 이벤트
    const allTabonClickHandler = () => {

        setToggle('all-board');
        setToggleCode('')
        setToggleHeadCode(!toggleHeadCode);
        setHeadName('전체 게시판')
    }

    // event handler : 공지 탭 클릭 이벤트
    const notionTabonClickHandler = () => {
        setToggle('notion-board');
        setToggleCode('n1');
        setHeadName('공지')
     
    }
    // event handler : 자유 게시판 탭 클릭 이벤트
    const freeTabonClickHandler = () => {
        setToggle('free-board');
        setToggleCode('f1');
        setHeadName('자유게시판')
       
    }
    // event handler : 꿀팁 메뉴얼 탭 클릭 이벤트
    const tipTabonClickHandler = () => {
        setToggle('tip-board');
        setToggleCode('h1');
        setHeadName('꿀팁 메뉴얼')
    }


    return (
        <div className='board-container'>
            <div className='board-continer-box'>
                <div className='board-top-container'>
                    <div className={toggle === 'all-board' ? 'board-tab-button-box-active' : 'board-tab-button-box'} onClick={allTabonClickHandler}>
                        <div className='board-top-tap-button'>{'전체'}</div>
                    </div>
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
                    <div className='board-contant-top'>{headName}</div>

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
                        {list && currentData() && currentData().map((item, index) => (
                            <tbody key={(currentPage - 1) * 8 + index} className={index % 2 === 0 ? 'even' : 'odd'}
                                onClick={() => {
                                    nav(`/BoardDetail/${index}`);
                                }}>
                                <tr className='board-bottom-list'>
                                    <td className='board-contant-td'>
                                        <div className='board-content-title'>
                                            <div className='board-title'>{index + 1}</div>
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
            <br></br>
            <div className='repair-info-bottom-box'>
                    <div className='info-list-pagination-box'>
                        {/* 페이지네이션 컴포넌트 */}
                        {/* <Pagination
                            currentPage={currentPage}
                            totalPages={totalPageCount}
                            onNextPage={nextPage}
                            onPrevPage={prevPage}
                            onGoToPage={goToPage}
                        /> */}
                    </div>
                </div>
        </div>
    )
}

export default BoardList