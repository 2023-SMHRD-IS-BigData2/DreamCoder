import React, { useState } from 'react';
import './style.css';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';

const JoinedProjectTab = (props) => {
    //          받아와야할 정보
    const { target_cnt, party_title, start_at, end_at, party_content, now_cnt, index, onclick } = props;
    //             state: 즐겨찾기 버튼 상태
    const [toggle, setToggle] = useState(0);
    //             event handler: 즐겨찾기 아이콘 클릭 이벤트 처리
    const FavoriteClickHandler = () => {

        if (toggle == 0) {
            setToggle(1);
        } else {
            setToggle(0);
        }
    }
    const options = {
        colors: ["#F5F5F5", "#1A74BD"],
        chart: {
            renderTo: `subscribers-graph-${index}`,
            type: 'pie',
            backgroundColor: null,
            height: 100 + `%`,
            // width : 100 + `%`,
            textalign: `center`,

            style: {
                fontSize: '90',
                fontWeight: '400',
                width: '120%',
                height: '120%',
            }
        },
        title: {
            verticalAlign: 'middle',
            text: Math.floor(now_cnt / target_cnt * 100) + '%',
            size: 20,
        },
        accessibility: {
            enabled: false
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
                size: '70%',
                innerSize: '70%',
                showInLegend: false,
                dataLabels: {
                    enabled: false
                }
            },
        ],
    };
    return (
        <div className='tab-content-list'>
            <div className='tab-content-box' onClick={onclick}>
                <div className='tab-image-box'>
                    <div className='tab-image'>
                        <div className='chart'>
                            <HighchartsReact highcharts={Highcharts} options={options} />
                        </div>
                    </div>
                </div>
                <div className='tab-text-content-box'>
                    <div className='tab-top-text-box'>
                        <div className='border-text-box'>
                            <div className='border-text'>{target_cnt / 1000 + 'MW'}</div>
                        </div>
                        <div className='content-name'>{party_title}</div>
                        <div className='content-date'>{start_at + '-' + end_at}</div>
                    </div>
                    <div className='tab-bottom-text-box'>
                        <div className='bottom-text'>{party_content}</div>
                    </div>
                </div>
                {/* <div className='favorite-icon-box'>
                    <div className={toggle === 0 ?'icon star-icon':'icon-active star-icon'} onClick={FavoriteClickHandler}></div>
                </div> */}
            </div>
        </div>
    );
};

export default JoinedProjectTab;