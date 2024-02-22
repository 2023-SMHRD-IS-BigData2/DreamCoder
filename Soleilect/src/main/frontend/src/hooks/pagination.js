import { useState, useEffect } from 'react';

const usePagination = (perPage, data) => {
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const [totalData, setTotalData] = useState(data); // 전체 데이터
    const totalDataLength = totalData.length; // 전체 데이터의 길이

    const totalPageCount = Math.ceil(totalDataLength / perPage); // 총 페이지 수

    // 현재 페이지에 보여줄 데이터를 계산하는 함수
    const currentData = () => {
        const begin = (currentPage - 1) * perPage;
        const end = begin + perPage;
        return totalData.slice(begin, end);
    };

    // 다음 페이지로 이동하는 함수
    const nextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount));
    };

    // 이전 페이지로 이동하는 함수
    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    // 특정 페이지로 이동하는 함수
    const goToPage = (page) => {
        const pageNumber = Math.max(1, Math.min(page, totalPageCount));
        setCurrentPage(pageNumber);
    };

    // 데이터가 변경될 때마다 총 데이터 업데이트
    useEffect(() => {
        setTotalData(data);
    }, [data]);

    return {
        currentPage,
        currentData,
        totalPageCount,
        nextPage,
        prevPage,
        goToPage,
    };
};

export default usePagination;