import axios from 'axios';
import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css';
import RepairInfobox from './RepairInfobox.jsx';
import usePagination from '../../hooks/pagination.js';
import Pagination from '../../components/Pagination/Pagination.jsx';


const InfoList = () => {
    const nav = useNavigate();
    //          state: 페이지네이션 관련 상태
    // const {
    //     currentPage,
    //     setCurrentPage,
    //     currentSection,
    //     setCurrentSection,
    //     viewList,
    //     viewPageList,
    //     totalSection,
    //     setTotalList
    // } = usePagination(6);

    //          state: 탭 클릭 상태
    const [toggle, setToggle] = useState('repair-info');

    //              event handler: 수리업체 정보 탭 클릭 이벤트
    const repairTabClickHandler = () => {
        setToggle('repair-info');
    }
    //              event handler: 시사이슈 정보 탭 클릭 이벤트
    const newsTabClickHandler = () => {
        setToggle('news-info');
    }

    return (
        <div id='repair-info-wrapper'>
            <div className='repair-info-container'>
                <div className='repair-info-top-box'>
                    <div className={toggle === 'repair-info' ? 'info-tab-button-box-active' : 'info-tab-button-box'} onClick={repairTabClickHandler}>
                        <div className='info-tab-button'>{'수리업체 정보'}</div>
                    </div>
                    <div className={toggle === 'news-info' ? 'info-tab-button-box-active' : 'info-tab-button-box'} onClick={newsTabClickHandler}>
                        <div className='info-tab-button'>{'시사이슈 정보'}</div>
                    </div>
                </div>
                <div className='repair-info-middle-box'>
                    {toggle === 'repair-info' &&
                        <>
                            <div className='repair-info-list'>
                                <RepairInfobox />
                                <RepairInfobox />
                                <RepairInfobox />
                            </div>
                            <div className='repair-info-list'>
                                <RepairInfobox />
                                <RepairInfobox />
                                <RepairInfobox />
                            </div>
                        </>
                    }
                </div>
                <div className='repair-info-bottom-box'>
                    <div className='info-list-pagination-box'>
                        <Pagination/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoList