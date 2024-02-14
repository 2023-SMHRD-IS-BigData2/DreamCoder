import React from 'react'
import { useNavigate } from 'react-router-dom';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const PartyBoardItem = ({ item, index }) => {
    const nav = useNavigate();
    const options = {
        colors: ["#F5F5F5", "#41A4C9"],
        chart: {
            renderTo: `subscribers-graph-${index}`,
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
            text: item.party_progress + '%',
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
                data: [100 - item.party_progress, item.party_progress],
                size: '80%',
                innerSize: '75%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            },
        ],
    };

    return (

        <div
            className='item-container'
            onClick={() => {
                nav(`/detail/${index}`);
            }}
        >
            <div className='board-top-date'>
                <div className='board-top-end-date'>{item.party_recruit} {item.end_at}</div>
            </div>
            <div className='Chart-item-box'>
                <div className='chart'>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
            </div>
            <div className='chart-content'>
                    <div className='board-list-item-top'>
                        <div className='board-list-item--nickname'>{item.user_id}</div>
                    </div>
                    <div className='board-list-item-middle'>
                        <div className='board-list-item-title'>{item.party_title}</div>
                    </div>
                    <div className='board-list-item-bottom'>
                        <div className='board-list-item-recruit'>{item.party_recruit}</div>
                        <div className='board-list-item-counts'>{`조회수 `}{item.party_views}</div>
                    </div>
                </div>
        </div>

    );
}

export default PartyBoardItem