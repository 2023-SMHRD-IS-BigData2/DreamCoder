import React, { useContext, useEffect, useRef } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { color } from 'highcharts';
import { useState } from 'react';
import axios from 'axios';
import { ChartContext } from '../../context/ChartContext';
import Comment from '../../components/CommentItem/Comment';
import moment from 'moment';

const PartyBoardDetail = () => {
    const { list, setList } = useContext(ChartContext);

    // 모집 게시판 party_seq 받아옴
    const location = useLocation();
    const number = location.state.party_seq;
    console.log(number);

    // let { num } = useParams();
    const nav = useNavigate();

    // state 년월일 시간 자르기
    const [timestamp, setTimeStamp] = useState();
    // state 모달창 상태
    const [modalOpen, setModalOpen] = useState(false);
    // state 발전소 목록
    const [powerPlantList, setPowerPlantList] = useState([]);
    // state 발전소 신청 상태
    const [powerButton, setPowerButton] = useState(false);
    // state 수정 삭제 토글 상태  다시 누르면 사라지게
    const [showEditDelete, setShowEditDelete] = useState(false);
    // state : 모달 열기를 위한 상태 선언
    const [isModalOpen, setIsModalOpen] = useState(false);

    // state : 조회수
    const [chartViews, setChartViews] = useState(0);

    // state : 조회수  axios 실행 상태
    const [checkViews, setCheckViews] = useState(false);

    //  state 를 추가
    const [hasViewed, setHasViewed] = useState(false);

    // 모집 게시글 정보 가져오기 ---------------------

    useEffect(() => {
        let formData = new FormData();
        console.log(number);
        formData.append("party_seq", number);
        axios
            .post('/Sol/partyBoardCon/detail', formData)
            .then((res) => {
                setList(res.data.data)
                console.log(list[0].user_nick);
                setTimeStamp(list[0].created_at);
                setChartViews(list[0].party_views + 1);
                setChartViews(true)

                // 아직 partyview()가 실행되지 않았다면 실행
                if (!hasViewed) {
                    // partyview();
                    setHasViewed(true);  
                    // partyview()가 실행되었음을 표시
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    // function 모집 게시판 조회수 실행 함수 한번만 실행 되게!!
    const partyview = () => {
        let formData = new FormData();
        console.log('조회수');
        formData.append("party_seq", list[0].party_seq)
        console.log(list[0].party_views);
        axios
            .post('/Sol/partyBoardCon/views', formData)
            .then((res) => {
                setList(res.data.data)
                console.log('조회수 상승!');
            })
            .catch((error) => {
                console.log(error)
            })
    }

    // highcharts 옵션 부분 ---------------------------------
    let options = {};

    if (list && list[0]) {
        options = {
            colors: ["#F5F5F5", "#1A74BD"],
            chart: {
                renderTo: `subscribers-graph-${list[0].party_seq}`,
                type: 'pie',
                backgroundColor: null,
                style: {
                    fontSize: '50',
                    fontWeight: '400',
                    width: 100 + `%`,
                    height: 70 + `%`,
                }
            },
            title: {
                verticalAlign: 'middle',
                text: Math.floor(list[0].now_cnt / list[0].target_cnt * 100) + '%',
                size: 40,
            },
            // 워터마크 해제
            credits: {
                enabled: false,
            },
            // 범례 해제
            legend: {
                enabled: false,
            },
            tooltip: {
                enabled: false,
            },
            series: [
                {
                    data: [list[0].target_cnt - list[0].now_cnt, list[0].now_cnt],
                    // data: [1,2],
                    size: '80%',
                    innerSize: '75%',
                    showInLegend: false,
                    dataLabels: {
                        enabled: false
                    }
                },
            ],
        };
    }


    //        component : 게시물 상세 하단 참여하기 컴포넌트  --------------------- //
    const BoardDetailBottom = () => {

        //         render : 게시물 하단 컴포넌트 렌더링 //
        return (
            <div id='board-detail-bottom'>
                <div className='board-detail-button-box'>
                    <div className='board-detail-box btnFloat' onClick={onPowerCheckClickHandler}>
                        <div className='board-detail-button'>
                            {'참여하기'}</div>
                    </div>
                </div>
                {modalOpen && <PartyPowerCheck setModalOpen={setModalOpen} modalOpen={modalOpen} setModalPage='add-plant' />}
            </div>
        )
    }

    // component : 게시글 수정, 삭제 컴포넌트  
    const BoardEditDelete = () => {
        return (
            <div className='party-board-edit-delete'>
                <div className='edit-icon-box'>{'수정하기'}<div className='edit-icon'></div>
                </div>
                <div className='delete-icon-box' onClick={onPartyDeleteClickHandler}>{'삭제하기'}<div className='delete-icon' ></div>
                </div>
            </div>
        )
    }

    const closeModal = () => {
        setModalOpen(false);
    };

    const modalRef = useRef(null);

    // event handler  삭제 버튼 클릭 핸들러 -------------------
    const onPartyDeleteClickHandler = () => {
        console.log('삭제버튼 클릭');
        // 모달 열기 상태 변경
        setIsModalOpen(true);
    }

    // event handler 모달 안의 삭제하기 버튼 클릭 핸들러 ------------------
    const ondeletePartyBoardClickHandler = () => {
        let formData = new FormData();
        formData.append("party_seq", list[0].party_seq)
        console.log(list[0].party_seq);
        axios
            .post('/Sol/partyBoardCon/delete', formData)
            .then((res) => {
                setList(res.data.data)
                console.log(res.data);
                alert('삭제 성공!')
                nav('/PartyBoardList')
                // window.location.reload()
            })
            .catch((error) => {
                console.log(error)
            })
        // 모달 닫기 상태 변경
        setIsModalOpen(false);
    }

    // 삭제 확인 모달 컴포넌트 ---------------------------------
    const Modal = () => {
        return (
            <div className='p_Modal'>
                <div ref={modalRef} className='delete-container'>
                    <button className='close' onClick={() => setIsModalOpen(false)}>
                        X
                    </button>
                    <div className='delete-modal-text'>{'['}{list[0].party_title}{']'}</div>
                    <div className='delete-modal-text'> 게시글을 삭제하시겠습니까?</div>
                    <div className='delete-ownplant-button-box'>
                        <div className='delete-ownplant-button' onClick={ondeletePartyBoardClickHandler}>{'삭제하기'}</div>
                    </div>
                </div>
            </div>
        );
    };


    // event handler : 발전소 선택 클릭 이벤트 처리---------
    const onPowerCheckClickHandler = () => {
        return (
            setModalOpen(true)
        )
    }
    // 나의 발전소 가져오기
    // ------- 나의 발전소 가져오기 ------------------
    useEffect(() => {
        if (modalOpen) {
            let formData = new FormData();
            formData.append("user_id", sessionStorage.getItem('user_id'));
            axios
                .post('/Sol/myPageCon/plantList', formData)
                .then((res) => {
                    setPowerPlantList(res.data.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [modalOpen]);


    const PartyPowerCheck = (props) => {
        const { setModalOpen, modalOpen } = props;
        const closeModal = () => {
            setModalOpen(false);
        };

        // 모달 외부 클릭시 끄기 처리
        // Modal 창을 useRef로 취득
        const modalRef = useRef(null);

        // state 선택한 발전소 정보 클릭시 데이터 넘어가는 상태
        const [selectedPower, setSelectedPower] = useState(null);

        // event handler 나의 발전소 선택하기 클릭 이벤트
        const onPowerIsJoinClickHandler = (power) => {
            console.log('선택하기 클릭', power);
            powerChecksend(power);
        }

        // 발전소 신청 정보 보내기 --------------------------------------
        const powerChecksend = (selectedPower) => {
            if (selectedPower) {
                console.log(selectedPower.pl_loc, '이거');
                let formData = new FormData();
                formData.append("party_seq", list[0].party_seq);
                formData.append("party_title", list[0].party_title);
                formData.append("pl_name", selectedPower.pl_name);
                formData.append("pl_power", selectedPower.pl_power);
                formData.append("pl_seq", selectedPower.pl_seq);
                formData.append("user_nick", sessionStorage.getItem('user_nick'));
                axios
                    .post('/Sol/partyApplyCon/apply', formData)
                    .then((res) => {
                        setList(res.data.data);
                        alert('신청 성공!')
                        nav('/PartyBoardList')

                    })
                    .catch((error) => {
                        console.log(error);
                    });
                setPowerButton(false);
            } else {
                console.log("selectedPower is null");
            }
        };


    //     //          state: 페이지 상태  모달 창  render -----------  
        return (
            <div className='p_Modal'>
                <div ref={modalRef} className='p_container'>
                    <div className='auth-card-box'>
                        <div className='auth-card-top'>
                            <div className='auth-card-title-box'>
                                <div className='auth-card-title'>{'발전소 선택'}</div>
                                <button className='close' onClick={closeModal}>
                                    X
                                </button>
                            </div>
                            {powerPlantList && powerPlantList.map((power, index) => (
                                <div className='p_tab-content-list' key={index}>

                                    <div className='p_tab-content-box'>
                                        <div className='p_tab-image-box'>
                                            <div className='p_tab-image'></div>
                                        </div>
                                        <div className='p_tab-text-content-box p_owned'>
                                            <div className='p_tab-top-text-box'>
                                                <div className='p_border-text-box'>
                                                    <div className='p_border-text'>{power.pl_power}kw</div>
                                                </div>
                                                <div className='p_content-name'>{power.pl_name}</div>
                                            </div>
                                            <div className='p_tab-bottom-text-box'>
                                                <div className='p_bottom-text'>{power.pl_loc}</div>
                                            </div>
                                        </div>
                                        <div className='p_tab-content-button-list'>
                                            <div className='p_tab-content-edit-button-box'>
                                                <div className='p_edit-button' onClick={() => onPowerIsJoinClickHandler(power)} >{'선택하기'}</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* {modalOpen && <OwnPowerModal setModalOpen={setModalOpen} setModalPage={modalPage} />} */}
                                </div>
                            ))}
                        </div>
                        <div className='auth-card-bottom'>
                            <div className='auth-description-box'>
                                <div className='auth-description'></div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        )
    }


    //         render 게시물 상세 화면 컴포넌트 렌더링!!!  //
    return (
        list && list[0] ?
            <div id='board-detail-top'>
                <div className='board-detail-title'>
                    <div className='detail-top-sub-box'>
                        <div className='board-detail-write-info-box'>
                            <div className='board-detail-writer-profile-image'></div>
                            <div className='board-detail-writer-nickname'>{list[0].user_nick}</div>
                            <div className='board-detail-write-divider'>{'|'}</div>
                            <div className='detail-chart-date'>{moment(timestamp).format("YYYY-MM-DD")}</div>
                            <div className='detail-chart-recruit' style={{ color: list[0].party_isJoin == '모집중' ? '#35AF4B' : '#D1180B' }}>
                                {list[0].party_isJoin}
                            </div>
                            <div className='detail-chart-view'>{`조회수 `} {chartViews}{'회'}</div>
                            {/* 'more-icon' 클릭 시 showEditDelete 상태를 이전 상태의 반대로 설정 */}
                            {list[0].user_id == sessionStorage.getItem('user_id') ? <div className='more-icon' onClick={() => setShowEditDelete(prev => !prev)}></div> : <></>}
                            {/* showEditDelete 상태에 따라 BoardEditDelete 컴포넌트 렌더링 */}
                            {showEditDelete && <BoardEditDelete />}
                        </div>
                    </div>
                    <div className='detail-chart-highchart'>
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    </div>
                    <div className='board-detail-top-main'>

                        <div className='detail-chart-title'>{`[` + list[0].party_title + `]`}</div>
                        <div className='detail-chart-fix'>
                            <div className='detail-chart-start'>{'모집 기간  :  '}{list[0].start_at} {' ~ '} {list[0].end_at}</div>
                            <div className='detail-chart-cnt'>{'목표 수치 : '}{list[0].target_cnt}{'kw'}</div>
                            <div className='detail-chart-cnt'>{'모집량 : '}{list[0].now_cnt}{'kw'}</div>
                        </div>
                        <div className='detail-chart-content'>{list[0].party_content}</div>
                        <br />
                        <div className='divider'></div>
                    </div>
                    <Comment />
                    <BoardDetailBottom />
                </div>
                {/* 삭제 확인 모달 */}
                {isModalOpen && <Modal />}
            </div>

            //  데이터를 가져오는 동안에는 "Loading..."을 표시하고, 데이터가 준비되면 컴포넌트를 렌더링
            : <div>Loading...</div>
    )
}

export default PartyBoardDetail