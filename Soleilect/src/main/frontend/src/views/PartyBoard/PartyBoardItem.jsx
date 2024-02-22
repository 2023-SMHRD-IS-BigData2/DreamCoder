import React from 'react'
import { useNavigate } from 'react-router-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import axios from 'axios';

const PartyBoardItem = (props) => {
    const {party_seq,end_at, target_cnt, now_cnt, user_nick, party_title, party_isJoin, party_views} = props;
    const nav = useNavigate();
    const options = {
        colors: ["#F5F5F5", "#1A74BD"],
        chart: {
            renderTo: `subscribers-graph-${party_seq}`,
            type: 'pie',
            backgroundColor: null,
            height: 50 + `%`,
            // width : 100 + `%`,
            textalign: `center`,

            style: {
                fontSize: '30',
                fontWeight: '400',
                width: '100%',
                height: '100%'
            }
        },
        title: {
            verticalAlign: 'middle',
            text: Math.floor(now_cnt/target_cnt*100) + '%',
            size: 20,
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
                data: [target_cnt - now_cnt, now_cnt],
                size: '80%',
                innerSize: '70%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            },
        ],
    };

    const onPartyViewsUpClickHandler = () => {
        nav(`/detail/${party_seq}`);
        // {partyview()}
    }
     // function 모집 게시판 조회수 실행 함수 한번만 실행 되게!!
    // const partyview = () => {
    //     let formData = new FormData();
    //     console.log('조회수');
    //     formData.append("party_seq", party_seq)
    //     console.log(party_seq);
    //     axios
    //         .post('/Sol/partyBoardCon/views', formData)
    //         .then((res) => {
    //             // setList(res.data.data)
    //             console.log('조회수 상승!');
    //         })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }


    return (

        <div
            className='item-container'
            onClick={onPartyViewsUpClickHandler}
        >
            <div className='board-top-date'>
                <div className='board-top-end-date'>{'마감일'} {end_at}</div>
            </div>
            <div className='Chart-item-box'>
                <div className='chart'>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </div>
            <div className='chart-content'>
                    <div className='board-list-item-top'>
                        <div className='board-list-item--nickname'>{user_nick}</div>
                    </div>
                    <div className='board-list-item-middle'>
                        <div className='board-list-item-title' >{party_title}</div>
                    </div>
                    <div className='board-list-item-bottom'>
                        <div className='board-list-item-recruit' style={{color: party_isJoin =='모집중' ? '#35AF4B' : '#D1180B'}}>{party_isJoin}</div>
                        <div className='board-list-item-counts'>{`조회수 `}{party_views}</div>
                    </div>
                </div>
        </div>

    );
}

export default PartyBoardItem