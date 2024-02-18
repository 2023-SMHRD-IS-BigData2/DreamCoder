import { useEffect, useState } from "react";

const usePagination = (countPerpage) => {
    //             state: 전체 객체 리스트 상태
    const [totalList, setTotalList] = useState([]);
    //             state: 보여줄 객체 리스트 상태
    const [viewList, setViewList] = useState([]);
    //             state: 현재 페이지 번호 상태
    const [currentPage, setCurrentPage] = useState(1);
    //             state: 전체 페이지 번호 리스트 상태
    const [totalPageList, setTotalPageList] = useState([1]);
    //             state: 보여줄 페이지 번호 리스트 상태
    const [viewPageList, setViewPageList] = useState([1]);
    //             state: 현재 섹션 상태
    const [currentSection, setCurrentSection] = useState(1);
    //             state: 전체 섹션 상태
    const [totalSection, setTotalSection] = useState(1);

    //             function: 보여줄 객체 리스트 추출 함수
    const setView = () => {
        const FIRST_INDEX = countPerpage * (currentPage - 1);
        const LAST_INDEX = totalList.length > countPerpage * currentPage ? countPerpage * currentPage : totalList.length;
        const viewList = totalList.slice(FIRST_INDEX, LAST_INDEX);
        setViewList(viewList);
    };

    //             function: 보여줄 페이지 리스트 추출 함수
    const setViewPage = () => {
        const FIRST_INDEX = 5 * (currentSection - 1);
        const LAST_INDEX = totalPageList.length > 5 * currentSection ? 5 * currentSection : totalPageList.length;
        const setViewPageList = totalPageList.slice(FIRST_INDEX, LAST_INDEX);
        setViewPageList(viewPageList);
    };

    //             effect: total List가 변경될 때마다 실행할 작업
    useEffect(() => {
        const totalPage = Math.ceil(totalList.length / countPerpage);
        const totalPageList = [];
        for (let page = 1; page <= totalPage; page++) totalPageList.push(page);
        setTotalPageList(totalPageList);
        setTotalSection(totalSection);
        
        const totalSection = Math.ceil(totalList.length / (countPerpage * 10));
        setCurrentPage(1);
        setCurrentSection(1);
        
        setView();
        setViewPage();

    }, [totalList])
    //             effect: current page가 변경될 때마다 실행할 작업
    useEffect(setView,[currentPage]);
    //             effect: current section이 변경될 때마다 실행할 작업
    useEffect(setViewPage,[currentPage]);
    return {
        currentPage,
        setCurrentPage,
        currentSection,
        setCurrentSection,
        viewList,
        viewPageList,
        totalSection,
        setTotalList
    };

};
export default usePagination;