import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { color } from 'highcharts';
import { useState } from 'react';
import axios from 'axios';
import { ChartContext } from '../../context/ChartContext';
import Comment from '../../components/CommentItem/Comment';
import moment from 'moment';
import PowerCheckModal from '../../components/Modal/PowerCheckModal';

const PartyBoardDetail = () => {
    const { list, setList } = useContext(ChartContext);
    let { num } = useParams();
    const nav = useNavigate();

    // state 년월일 시간 자르기
    const [timestamp, setTimeStamp] = useState();
    // state 모달창 상태
    const [modalOpen, setModalOpen] =  useState(false);

    //  조회수
    // const [chartViews, setChartViews] = useState(0);

    useEffect(() => {
        let formData = new FormData();
        axios
            .get('/Sol/partyBoardCon/list', formData)
            .then((res) => {
                setList(res.data.data)
                setTimeStamp(list[num].created_at);
            })
            .catch((error) => {
                console.log(error)
            })

        // 조회수
        // setChartViews((chartViews) => chartViews + 1);

    }, [])


    // state 삭제 버튼 상태
    const [button, setButton] = useState('');

    // event handler 게시글 삭제 클릭 이벤트
    const onPartyDeleteClickHandler = () => {
            setButton(true)
            console.log('클릭');
        }

    useEffect(()=>{
        if(button){
        let formData = new FormData();
        console.log(list[num].party_seq);
        formData.append("party_seq", list[num].party_seq)
        axios
            .post('/Sol/partyBoardCon/delete',formData)
            .then((res) => {
                setList(res.data.data)
                console.log(res.data.data);
                console.log('삭제 완료');
                // nav('/PartyBoardList')
            })
            .catch((error) => {
                console.log(error)
            })
        }
        
    },[button])


    // chart 부분
    let options = {};

    if (list && list[num]) {
        options = {
            colors: ["#F5F5F5", "#41A4C9"],
            chart: {
                renderTo: `subscribers-graph-${list[num].party_seq}`,
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
                text: Math.floor(list[num].now_cnt / list[num].target_cnt * 100) + '%',
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
                    data: [list[num].target_cnt - list[num].now_cnt, list[num].now_cnt],
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

    // event handler : 발전소 선택 클릭 이벤트 처리
    const onPowerCheckClickHandler = () => {
        console.log('클릭');
        return (
            setModalOpen(true)
        )
    }

    //        component : 게시물 상세 하단 컴포넌트   //
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
                {modalOpen && <PowerCheckModal setModalOpen={setModalOpen} setModalPage='add-plant'/>}
            </div>
        )
    }

    // event handler : 삭제 토글 클릭시 수정 삭제 버튼 생성

    // state 수정 삭제 토글 상태
    const [showEditDelete, setShowEditDelete] = useState(false);

    // component : 게시글 수정, 삭제 컴포넌트  
    const BoardEditDelete = () => {
        console.log('dkssud');
        return (
            <div className='party-board-edit-delete'>
                <div className='edit-icon-box'>{'수정하기'}<div className='edit-icon'></div>
                </div>
                <div className='delete-icon-box' onClick={onPartyDeleteClickHandler}>{'삭제하기'}<div className='delete-icon' ></div>
                </div>
            </div>
        )
    }

    //         render 게시물 상세 화면 컴포넌트 렌더링!!!  //
    return (
        list && list[num] ?
            <div id='board-detail-top'>
                <div className='board-detail-title'>
                    <div className='detail-top-sub-box'>
                        <div className='board-detail-write-info-box'>
                            <div className='board-detail-writer-profile-image'></div>
                            <div className='board-detail-writer-nickname'>{list[num].user_nick}</div>
                            <div className='board-detail-write-divider'>{'|'}</div>
                            <div className='detail-chart-date'>{moment(timestamp).format("YYYY-MM-DD")}</div>
                            <div className='detail-chart-recruit' style={{ color: list[num].party_isJoin == '모집중' ? '#35AF4B' : '#D1180B' }}>
                                {list[num].party_isJoin}
                            </div>
                            <div className='detail-chart-view'>{`조회수 `} {list[num].party_views}{'회'}</div>
                            {/* 'more-icon' 클릭 시 showEditDelete 상태를 이전 상태의 반대로 설정 */}
                            {list[num].user_id == sessionStorage.getItem('user_id') ? <div className='more-icon' onClick={() => setShowEditDelete(prev => !prev)}></div> : <></>}
                            {/* showEditDelete 상태에 따라 BoardEditDelete 컴포넌트 렌더링 */}
                            {showEditDelete && <BoardEditDelete />}
                        </div>
                    </div>
                    <div className='detail-chart-highchart'>
                        <HighchartsReact highcharts={Highcharts} options={options} />
                    </div>
                    <div className='board-detail-top-main'>

                        <div className='detail-chart-title'>{`[` + list[num].party_title + `]`}</div>
                        <div className='detail-chart-fix'>
                            <div className='detail-chart-start'>{'모집 기간  :  '}{list[num].start_at} {' ~ '} {list[num].end_at}</div>
                            <div className='detail-chart-cnt'>{'목표 수치 : '}{list[num].target_cnt}{'kw'}</div>
                            <div className='detail-chart-cnt'>{'모집량 : '}{list[num].now_cnt}{'kw'}</div>
                        </div>
                        <div className='detail-chart-content'>{list[num].party_content}</div>
                        <br />
                        <div className='divider'></div>
                    </div>
                    <Comment />
                    <BoardDetailBottom />
                </div>
            </div>
            //  데이터를 가져오는 동안에는 "Loading..."을 표시하고, 데이터가 준비되면 컴포넌트를 렌더링
            : <div>Loading...</div>
    )
}

export default PartyBoardDetail