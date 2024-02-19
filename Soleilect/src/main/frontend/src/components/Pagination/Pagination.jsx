import React from 'react'
import './style.css'

//          component: 페이지네이션 컴포넌트
export default function Pagination(props) {
    //              state: Properties
    const { currentPage, currentSection, viewPageList, totalSection } = props;
    const { setCurrentpage, setCurrentSection } = props;
    

    //             event handler: 페이지 클릭 이벤트 처리
    const onPageClickHandler = (page) => {
        // setCurrentpage(page);
    }
    //             event handler: 이전 클릭 이벤트 처리
    const onPreviousClickHandler = () => {
        // if(currentSection === 1)return;
        // setCurrentpage((currentPage - 1) * 5);
        // setCurrentSection(currentSection - 1);
    }
    //             event handler: 다음 클릭 이벤트 처리
    const onNextClickHandler = () => {
        // if(currentSection === totalSection) return;
        // setCurrentpage(currentPage * 5 + 1);
        // setCurrentSection(currentSection + 1);
    }

    //             render: 페이지네이션 컴포넌트 렌더링
    return (
        <div id='pagination-wrapper'>
        <div className='pagination-change-link-box'>
            <div className='icon-box-small'>
                <div className='icon expand-left-icon'></div>
            </div>
            <div className='pagination-change-link-text' onClick={onPreviousClickHandler}>{'이전'}</div>
        </div>
        <div className='pagination-divider'>{'\|'}</div>
{/* 
        {viewPageList.map(page =>
            page === currentPage ?
                <div key={page} className='pagination-text-active'>{page}</div>
                :
                <div key={page} className='pagination-text' onClick={() => onPageClickHandler(page)}>{page}</div>
        )} */}
        <div className='pagination-text-active'>{'1'}</div>
        <div className='pagination-text' onClick={() => onPageClickHandler('2')}>{'2'}</div>
        <div className='pagination-text' onClick={() => onPageClickHandler('3')}>{'3'}</div>
        <div className='pagination-text' onClick={() => onPageClickHandler('3')}>{'4'}</div>
        <div className='pagination-text' onClick={() => onPageClickHandler('3')}>{'5'}</div>

        <div className='pagination-divider'>{'\|'}</div>
        <div className='pagination-change-link-box'>
            <div className='pagination-change-link-text' onClick={onNextClickHandler}>{'다음'}</div>
            <div className='icon-box-small'>
                <div className='icon expand-right-icon'></div>
            </div>
        </div>
    </div>
    )
}