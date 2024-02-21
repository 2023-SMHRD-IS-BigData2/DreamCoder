import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import { ChartContext } from '../../context/ChartContext';
import usePagination from '../../hooks/pagination.js'; // pagination 훅 불러오기
import Pagination from '../../components/Pagination/Pagination.jsx';

const InfoList = () => {
    const nav = useNavigate();
    const { list, setList } = useContext(ChartContext);

    const [toggle, setToggle] = useState('repair-info');

    // 페이지네이션 훅 호출
    const { currentPage, currentData, totalPageCount, nextPage, prevPage, goToPage } = usePagination(8, list); // 한 페이지당 8개의 항목 설정

    useEffect(() => {
        let formData = new FormData();
        axios
            .get('/Sol/ascenterCon/list', formData)
            .then((res) => {
                setList(res.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [list]);

    const repairTabClickHandler = () => {
        setToggle('repair-info');
    };

    const newsTabClickHandler = () => {
        setToggle('news-info');
    };

    return (
        <div id='repair-info-wrapper'>
            <div className='repair-info-container'>
                <div className='repair-info-top-box'>
                    <div
                        className={toggle === 'repair-info' ? 'info-tab-button-box-active' : 'info-tab-button-box'}
                        onClick={repairTabClickHandler}
                    >
                        <div className='info-tab-button'>{'수리업체 정보'}</div>
                    </div>
                    <div
                        className={toggle === 'news-info' ? 'info-tab-button-box-active' : 'info-tab-button-box'}
                        onClick={newsTabClickHandler}
                    >
                        <div className='info-tab-button'>{'시사이슈 정보'}</div>
                    </div>
                </div>
                <div className='repair-info-middle-box'>
                    {toggle == 'repair-info' && (
                        <div className='board-content-container'>
                            <div className='board-contant-container-box'>
                                <div className='board-contant-top'>{'정보게시판'}</div>
                                <table className='board-table'>
                                    <thead>
                                        <tr>
                                            <th className='board-contant-th'>{''}</th>
                                            <th className='board-contant-th'>{'업체명'}</th>
                                            <th className='board-contant-th'>{'지역'}</th>
                                            <th className='board-contant-th'>{'전화번호'}</th>
                                        </tr>
                                    </thead>
                                  
                                        {currentData().map((item, index) => (
                                            <tbody key={(currentPage - 1) * 8 + index} className={index % 2 === 0 ? 'even' : 'odd'}>
                                                <tr className='board-bottom-list'>
                                                    <td className='board-contant-td'>
                                                        <div className='board-content-title'>
                                                            <div className='board-title'>{(currentPage - 1) * 8 + index + 1}</div>
                                                        </div>
                                                    </td>
                                                    <td className='board-contant-td'>
                                                        <div className='board-content-title'>
                                                            <div className='board-title'>{item.company_name}</div>
                                                        </div>
                                                    </td>
                                                    <td className='board-contant-td'>
                                                        <div className='board-content-bottom'>
                                                            <div className='board-bottom-name'>{item.as_region}</div>
                                                        </div>
                                                    </td>
                                                    <td className='board-contant-td'>
                                                        <div className='board-content-bottom-date'>
                                                            <div className='board-bottom-date'>{item.company_tel}</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        ))}
                                  
                                </table>
                            </div>
                        </div>
                    )}
                </div>
                <div className='repair-info-bottom-box'>
                    <div className='info-list-pagination-box'>
                        {/* 페이지네이션 컴포넌트 */}
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPageCount}
                            onNextPage={nextPage}
                            onPrevPage={prevPage}
                            onGoToPage={goToPage}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoList;