import React from 'react';

const Pagination = ({ currentPage, totalPages, onNextPage, onPrevPage, onGoToPage }) => {
    const startPage = Math.floor((currentPage - 1) / 10) * 10 + 1; // 페이지네이션 시작 페이지
    const endPage = Math.min(startPage + 9, totalPages); // 페이지네이션 끝 페이지

    return (
        <div className='pagination'>
            <button onClick={onPrevPage} disabled={currentPage === 1}>{'<'}</button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={onNextPage} disabled={currentPage === totalPages}>{'>'}</button>
            <div>
                {/* 페이지 번호를 표시하는 버튼들 */}
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((page) => (
                    <button key={page} onClick={() => onGoToPage(page)} className={currentPage === page ? 'active' : ''}>
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Pagination;