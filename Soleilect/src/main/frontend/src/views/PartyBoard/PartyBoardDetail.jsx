import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import HighchartsReact from 'highcharts-react-official';
import Highcharts, { color } from 'highcharts';
import { useState } from 'react';
import axios from 'axios';
import { ChartContext } from '../../context/ChartContext';
import Comment from '../../components/CommentItem/Comment';
import moment from 'moment';

const PartyBoardDetail = () => {
    const { list, setList } = useContext(ChartContext);
    let { num } = useParams();

    const [timestamp,setTimeStamp] = useState();

    //  조회수
    // const [chartViews, setChartViews] = useState(0);

    useEffect(() => {
        let formData = new FormData();
        axios
            .get('/Sol/partyBoardCon/list', formData)
            .then((res) => {
                setList(res.data)
                setTimeStamp(list[num].created_at);
            })
            .catch((error) => {
                console.log(error)
            })

        // 조회수
        // setChartViews((chartViews) => chartViews + 1);

    }, [])

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
                text: Math.floor(list[num].now_cnt/list[num].target_cnt*100)  + '%',
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
                    data: [list[num].target_cnt -list[num].now_cnt, list[num].now_cnt],
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
    
    //        component : 게시물 상세 하단 컴포넌트   //
    const BoardDetailBottom = () => {

        // state 관심 버튼
        // const [liked, setLiked] = useState(false);

        // function onClick 찜 상태 반전 시키기
        // const handleLike = () => {
        //     setLiked(!liked);
        // }
        //         render : 게시물 하단 컴포넌트 렌더링 //
        return (
            <div id='board-detail-bottom'>
                {/* <div className='board-detail-comment-box'></div> */}
                <div className='board-detail-button-box'>
                    {/* <div className='icon-button'>
                        <div className='icon favorite-fill-icon' onClick={handleLike}>
                            {liked ? <div className='icon board-detail-liked'></div> : <div className='icon board-detail-unliked'></div>}
                        </div>
                    </div> */}
                    <div className='board-detail-box btnFloat'>
                        <div className='board-detail-button'>
                            {'참여하기'}</div>
                    </div>
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
                            <div className='detail-chart-recruit' style={{color: list[num].party_isJoin =='모집중' ? '#35AF4B' : '#D1180B'}}>
                                {list[num].party_isJoin}
                                </div>
                            <div className='detail-chart-view'>{`조회수 `} {list[num].party_views}{'회'}</div>
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
                        <br/>
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