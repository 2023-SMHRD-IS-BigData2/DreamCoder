import React, { useEffect, useState } from 'react'
import './Map.css';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import useInterval from './useInterval';
import axios from 'axios';

const Map = () => {

  // state plantDeep 연결 상태  
  const [plantList, setPlantList] = useState([]);
  // state highcharts options 상태
  const [options, setOptions] = useState(null);  

  // 백엔드에서 발전량 정보 가져오기
  useEffect(() => {
    let formData = new FormData();
    axios
      .get('/Sol/mapCon/sum', formData)
      .then((res) => {
        setPlantList(res.data.data)

        // 지도 여는 함수 실행
        mapMarkerInfoWindow(res.data.data);    
      })
      .catch((error) => {
        console.log(error)
      })
  }, []);

  // test 인포메이션 ---------------------------------------
  // state 발전소 이름
  const [locations, setLocations] = useState([]);
  const [loc, setLoc] = useState(locations[0]);
  const [locIndex, setLocIndex] = useState(0);

  useEffect(() => {
    if (plantList.length > 0) { // plantList에 값이 있다면
      setLocations([plantList[0].ippt_gen, plantList[1].ippt_gen, plantList[2].ippt_gen]); // locations를 갱신합니다.
    }
  }, [plantList]);

    useInterval(() => {
    const nextIndex = (locIndex + 1) % locations.length;

    setLoc(locations[nextIndex]);
    setLocIndex(nextIndex);
    // console.log(loc);
  }, 2000);

  // state 인포윈도우 content 상태
  // const [contents, setContents] = useState('');
  // useEffect(() => {
  //   // loc가 변경될 때마다 contents를 갱신합니다.
  //   if (loc !== null) {
  //     setContents("<div style='font-size: 18px; font-weight: bold; margin-bottom: 5px;'>광주광역시 동구</div>" +
  //     "<table style='border-spacing: 2px; border: 0px'><tbody><tr>" +

  //     "<td style='width: 80px; color:#767676; padding-right:12px font-size: 18px;'><div style='font-size: 15px;'>발전량<div/></td>" +
  //     "<td><span style='font-size: 15px; font-weight: bold;'>"+loc+"kw</span></td></tr>"+
  //     +"</tbody></table>"
  //     );
  //   }
  // }, [loc]); 

  // component 지도 열기 -------------------------------
  const mapMarkerInfoWindow = (plantList) => {

    const { sop } = window;
    const map = sop.map("map"); //map 생성
    
    const utmkXY = new sop.LatLng(36.24, 127.77); // 위도경도 -> utmk
    map.setView(sop.utmk(utmkXY.x, utmkXY.y), 2);// 지도 중심좌표로 뷰 설정

    map.dragging.disable(); // 지도 이동 불가
    map.scrollWheelZoom.disable(); // 지도 확대 불가
    
    // 마커
    var myIcon = sop.icon({
      iconUrl: 'https://i.ibb.co/D4FZbyp/marker.png',
      iconSize: [35, 35],
      iconAnchor: [22, 0],
      shadowAnchor: [5, 0],
      popupAnchor: [-3, -76]
    });
    const utmkXYm = new sop.LatLng(35.14627776, 126.9230903);
    const marker = sop.marker([utmkXYm.x, utmkXYm.y], { icon: myIcon });

    // 인포윈도우 좌표 찍기 위도경도 -> utmk
    // 인포윈도우 생성
    const infoWindow = sop.infoWindow();
    const contents = 
      "<div style='font-size: 18px; font-weight: bold; margin-bottom: 5px; text-align: center;'>"+plantList[0].dgen_ymd+"</div>" +
      "<div style='font-size: 18px; font-weight: bold; margin-bottom: 5px;'>"+plantList[0].ippt+"</div>" +
      "<table style='border-spacing: 2px; border: 0px'><tbody><tr>" +

      "<td style='width: 80px; color:#767676; padding-right:12px font-size: 18px;'><div style='font-size: 15px;'>발전량<div/></td>" +
      "<td><span style='font-size: 15px; font-weight: bold;'>"+Math.floor(plantList[0].ippt_gen)+"MWh</span></td></tr>" +

      "</tr></tbody></table>";

    infoWindow.setContent(contents);

    marker.on("mouseover", function (e) {
      infoWindow.setUTMK([utmkXYm.x, utmkXYm.y]);
      infoWindow.openOn(map);
    });
    marker.on("mouseout", function (e) {
      // infoWindow.close(map);
    });
    marker.addTo(map);
  }


  // highcharts를 그리기 전 콤마 생성
  Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
  });

  // plantList에 값이 있을 때 hightchart 옵션 생성----------------------------
  useEffect(() => {
    if (plantList.length > 0) {  
      setOptions({
        // 여기에 원래 options에 있던 내용을 그대로 복사해서 붙여넣으세요.
        // 단, series 부분에서 plantList를 이용해 data를 생성하도록 변경하세요.

          title: {
            text: '발전량 예측',
            align: 'center'
          }, 
          // 경고창 해제
          accessibility: {
            enabled: false
          },        
      
          yAxis: {
            title: {
              text: 'MWh',
            },
            labels : {
              format: '{value:,.0f}', 
            }
          },
      
          xAxis: {
            categories: [
              '21', '22', '23', '24', '25', '26', '27', '28', '01', '02', '03'
            ]
      
          },
          // 워터마크 해제
          credits: {
            enabled: false,
          },
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          },
      
          plotOptions: {
            series: {
              label: {
                connectorAllowed: false
              },
              pointStart: 0
            }
          },
      
          series: [
            {
            name: plantList[0].ippt,
            data: [plantList[0].ippt_gen, plantList[1].ippt_gen, plantList[2].ippt_gen, plantList[3].ippt_gen, plantList[4].ippt_gen,
            plantList[5].ippt_gen, plantList[6].ippt_gen, plantList[7].ippt_gen, plantList[8].ippt_gen, plantList[9].ippt_gen]
          },
           {
            name: plantList[10].ippt,
            data: [plantList[10].ippt_gen,plantList[11].ippt_gen,plantList[12].ippt_gen,plantList[13].ippt_gen,plantList[14].ippt_gen,
            plantList[15].ippt_gen,plantList[16].ippt_gen,plantList[17].ippt_gen,plantList[18].ippt_gen,plantList[19].ippt_gen]
          }
          // , {
          //   name: '대전광역시 서구',
          //   data: [15000, 30000, 35000, 60000, 55000, 90000,
          //     85000, 60000, 65000, 30000, 15000]
          // }, {
          //   name: '울산광역시 남구',
          //   data: [20000, 30000, 20000, 60000, 55000, 90000, 55000,
          //     60000, 40000, 30000, 15000]
          // }, {
          //   name: '인천광역시 서구',
          //   data: [25000, 50000, 55000, 100000, 95000, 150000,
          //     145000, 100000, 105000, 50000, 45000]
          // }
        ],     
          responsive: {
            rules: [{
              condition: {
                maxWidth: 400
              },
              chartOptions: {
                legend: {
                  layout: 'horizontal',
                  align: 'left',
                  verticalAlign: 'bottom'
                }
              }
            }]
          }
        
      });
    }
  }, [plantList]);  // plantList가 갱신될 때마다 이 훅을 실행


  return (
    <div className='map-container'>
      <div id="map" style={{ width: '100%', height: '853px' }} />
      <div className='map-info-container'>
        <div className='map-info-box'>
          <div className='map-info-content'>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map