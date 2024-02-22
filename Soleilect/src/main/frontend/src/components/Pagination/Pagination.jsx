import React from 'react';
import './style.css';

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage, onGoToPage }) => {
    const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1; // 페이지네이션 시작 페이지
    const endPage = Math.min(startPage + 9, totalPages); // 페이지네이션 끝 페이지

    return (
        <div id='pagination-wrapper'>
            <div className='pagination-change-link-box'>
                <div className='icon-box-small'>
                    <div className='icon expand-left-icon'></div>
                </div>
                <div className='pagination-change-link-text' onClick={onPrevPage} disabled={currentPage === 1}>{'이전'}</div>
            </div>
            <div className='pagination-divider'>{'\|'}</div>

            {/* 페이지 번호를 표시하는 버튼들 */}
            {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
                <div className={currentPage === page ? 'pagination-text-active' : 'pagination-text'} key={page} onClick={() => onGoToPage(page)}>
                    {page}
                </div>
            ))}

            <div className='pagination-divider'>{'\|'}</div>
            <div className='pagination-change-link-text' onClick={onNextPage} disabled={currentPage === totalPages}>{'다음'}</div>
            <div className='pagination-change-link-box'>
                <div className='icon-box-small'>
                    <div className='icon expand-right-icon'></div>
                </div>
            </div>
        </div>
    );
};

export default Pagination;