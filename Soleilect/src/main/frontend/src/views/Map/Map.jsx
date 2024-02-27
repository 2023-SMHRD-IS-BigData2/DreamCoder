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
        console.log(res.data.data);
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

  // useInterval(() => {
  //   const nextIndex = (locIndex + 1) % locations.length;

  //   setLoc(locations[nextIndex]);
  //   setLocIndex(nextIndex);
  //   console.log(loc);
  // }, 2000);


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

    // 85G1 - 광양항세방태양광 34.911494 / 127.679291
    // 85M1 - 두산엔진MG태양광 35.214112 / 128.631138
    // 85S5 - 구미태양광 36.134421 / 128.448690
    // 987A - 영흠태양광 #3 37.240875 /  126.4372226
    // 9978 - 예천태양광 36.752973 / 128.426090
    // C005 - 경상대태양광 35.158898 / 128.090460

    // 85G1 - 광양항세방태양광
    const utmkXYm = new sop.LatLng(34.911494, 127.679291);
    const marker1 = sop.marker([utmkXYm.x, utmkXYm.y], { icon: myIcon });
    // 85M1 - 두산엔진MG태양광 
    const utmkXYm2 = new sop.LatLng(35.214112, 128.631138);
    const marker2 = sop.marker([utmkXYm2.x, utmkXYm2.y], { icon: myIcon });
    // 85S5 - 구미태양광
    const utmkXYm3 = new sop.LatLng(36.134421, 128.448690);
    const marker3 = sop.marker([utmkXYm3.x, utmkXYm3.y], { icon: myIcon });
    // 987A - 영흠태양광
    const utmkXYm4 = new sop.LatLng(37.240875, 126.4372226);
    const marker4 = sop.marker([utmkXYm4.x, utmkXYm4.y], { icon: myIcon });
    // 9978 - 예천태양광
    const utmkXYm5 = new sop.LatLng(36.752973, 128.426090);
    const marker5 = sop.marker([utmkXYm5.x, utmkXYm5.y], { icon: myIcon });
    // C005 - 경상대태양광
    const utmkXYm6 = new sop.LatLng(35.158898, 128.090460);
    const marker6 = sop.marker([utmkXYm6.x, utmkXYm6.y], { icon: myIcon });
    
    // 85G1 - 광양항세방태양광 34.911494 / 127.679291
    // 85M1 - 두산엔진MG태양광 35.214112 / 128.631138
    // 85S5 - 구미태양광 36.134421 / 128.448690
    // 987A - 영흠태양광 #3 37.240875 /  126.4372226
    // 9978 - 예천태양광 36.752973 / 128.426090
    // C005 - 경상대태양광 35.158898 / 128.090460

    // -----------------------------광양항세방태양광 --------------------------
    const contents1 =
      "<div style='font-size: 18px; font-weight: bolder; margin-bottom: 5px; text-align: center;'>" + plantList[7].dgen_ymd + "</div>" +
      "<div style='font-size: 15px;  margin-bottom: 5px;  font-weight: bold; color : rgb(51, 51, 51);text-align: center;'>광양항 세방 태양광</div>" +
      "<table style='border-spacing: 2px; border: 0px'><tbody><tr>" +

      "<td style='width: 80px; color : rgb(110,110,110); padding-right:14px font-size: 18px; font-weight: bold;'><div style='font-size: 15px;'>발전량<div/></td>" +
      "<td><span style='font-size: 15px; color:rgba(0,0,0,0.9); font-weight: bold;'>" + Math.floor(plantList[7].ippt_gen) + "MWh</span></td></tr>" +

      "</tr></tbody></table>";


    // -----------------------------두산엔진 MG태양광  --------------------------
    const contents2 =
      "<div style='font-size: 18px; font-weight: bolder; margin-bottom: 5px; text-align: center;'>" + plantList[59].dgen_ymd + "</div>" +
      "<div style='font-size: 15px;  margin-bottom: 5px;  font-weight: bold; color : rgb(51, 51, 51);text-align: center;'>두산엔진 MG태양광 </div>" +
      "<table style='border-spacing: 2px; border: 0px'><tbody><tr>" +

      "<td style='width: 80px; color : rgb(110,110,110); padding-right:14px font-size: 18px; font-weight: bold;'><div style='font-size: 15px;'>발전량<div/></td>" +
      "<td><span style='font-size: 15px; color:rgba(0,0,0,0.9); font-weight: bold;'>" + Math.floor(plantList[59].ippt_gen) + "MWh</span></td></tr>" +

      "</tr></tbody></table>";


    // -----------------------------구미 태양광  --------------------------
    const contents3 =
      "<div style='font-size: 18px; font-weight: bolder; margin-bottom: 5px; text-align: center;'>" + plantList[20].dgen_ymd + "</div>" +
      "<div style='font-size: 15px;  margin-bottom: 5px;  font-weight: bold; color : rgb(51, 51, 51);text-align: center;'>구미 태양광 </div>" +
      "<table style='border-spacing: 2px; border: 0px'><tbody><tr>" +

      "<td style='width: 80px; color : rgb(110,110,110); padding-right:14px font-size: 18px; font-weight: bold;'><div style='font-size: 15px;'>발전량<div/></td>" +
      "<td><span style='font-size: 15px; color:rgba(0,0,0,0.9); font-weight: bold;'>" + Math.floor(plantList[20].ippt_gen) + "MWh</span></td></tr>" +

      "</tr></tbody></table>";

          // -----------------------------영흠태양광  --------------------------
    const contents4 =
    "<div style='font-size: 18px; font-weight: bolder; margin-bottom: 5px; text-align: center;'>" + plantList[46].dgen_ymd + "</div>" +
    "<div style='font-size: 15px;  margin-bottom: 5px;  font-weight: bold; color : rgb(51, 51, 51);text-align: center;'>영흠태양광 </div>" +
    "<table style='border-spacing: 2px; border: 0px'><tbody><tr>" +

    "<td style='width: 80px; color : rgb(110,110,110); padding-right:14px font-size: 18px; font-weight: bold;'><div style='font-size: 15px;'>발전량<div/></td>" +
    "<td><span style='font-size: 15px; color:rgba(0,0,0,0.9); font-weight: bold;'>" + Math.floor(plantList[46].ippt_gen) + "MWh</span></td></tr>" +

    "</tr></tbody></table>";

        // -----------------------------예천태양광  --------------------------
        const contents5 =
        "<div style='font-size: 18px; font-weight: bolder; margin-bottom: 5px; text-align: center;'>" + plantList[33].dgen_ymd + "</div>" +
        "<div style='font-size: 15px;  margin-bottom: 5px;  font-weight: bold; color : rgb(51, 51, 51);text-align: center;'>예천태양광 </div>" +
        "<table style='border-spacing: 2px; border: 0px'><tbody><tr>" +
  
        "<td style='width: 80px; color : rgb(110,110,110); padding-right:14px font-size: 18px; font-weight: bold;'><div style='font-size: 15px;'>발전량<div/></td>" +
        "<td><span style='font-size: 15px; color:rgba(0,0,0,0.9); font-weight: bold;'>" + Math.floor(plantList[33].ippt_gen) + "MWh</span></td></tr>" +
  
        "</tr></tbody></table>";

            // -----------------------------경상대태양광  --------------------------
    const contents6 =
    "<div style='font-size: 18px; font-weight: bolder; margin-bottom: 5px; text-align: center;'>" + plantList[72].dgen_ymd + "</div>" +
    "<div style='font-size: 15px;  margin-bottom: 5px;  font-weight: bold; color : rgb(51, 51, 51);text-align: center;'>경상대태양광 </div>" +
    "<table style='border-spacing: 2px; border: 0px'><tbody><tr>" +

    "<td style='width: 80px; color : rgb(110,110,110); padding-right:14px font-size: 18px; font-weight: bold;'><div style='font-size: 15px;'>발전량<div/></td>" +
    "<td><span style='font-size: 15px; color:rgba(0,0,0,0.9); font-weight: bold;'>" + Math.floor(plantList[72].ippt_gen) + "MWh</span></td></tr>" +

    "</tr></tbody></table>";

    marker1.addTo(map).bindInfoWindow(contents1).openInfoWindow();
    marker2.addTo(map).bindInfoWindow(contents2).openInfoWindow();
    marker3.addTo(map).bindInfoWindow(contents3).openInfoWindow();
    marker4.addTo(map).bindInfoWindow(contents4).openInfoWindow();
    marker5.addTo(map).bindInfoWindow(contents5).openInfoWindow();
    marker6.addTo(map).bindInfoWindow(contents6).openInfoWindow();

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
          labels: {
            format: '{value:,.0f}',
          },
          // max:9000,
          // min:5000
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
            name: '광양항세방태양광',
            data: [plantList[3].ippt_gen, plantList[4].ippt_gen, plantList[5].ippt_gen, plantList[6].ippt_gen, plantList[7].ippt_gen,
            plantList[8].ippt_gen, plantList[9].ippt_gen, plantList[10].ippt_gen, plantList[11].ippt_gen, plantList[12].ippt_gen]
          },
          {
            name: '구미태양광',
            data: [plantList[16].ippt_gen, plantList[17].ippt_gen, plantList[18].ippt_gen, plantList[19].ippt_gen, plantList[20].ippt_gen,
            plantList[21].ippt_gen, plantList[22].ippt_gen, plantList[23].ippt_gen, plantList[24].ippt_gen, plantList[25].ippt_gen]
          },{
            name: '예천태양광',
            data: [plantList[29].ippt_gen, plantList[30].ippt_gen, plantList[31].ippt_gen, plantList[32].ippt_gen, plantList[33].ippt_gen,
            plantList[34].ippt_gen, plantList[35].ippt_gen, plantList[36].ippt_gen, plantList[37].ippt_gen, plantList[38].ippt_gen]
          },{
            name: '영흠태양광',
            data: [plantList[42].ippt_gen, plantList[43].ippt_gen, plantList[44].ippt_gen, plantList[45].ippt_gen, plantList[46].ippt_gen,
            plantList[47].ippt_gen, plantList[48].ippt_gen, plantList[49].ippt_gen, plantList[50].ippt_gen, plantList[51].ippt_gen]
          },{
            name: '두산엔진MG태양광',
            data: [plantList[55].ippt_gen, plantList[56].ippt_gen, plantList[57].ippt_gen, plantList[58].ippt_gen, plantList[59].ippt_gen,
            plantList[60].ippt_gen, plantList[61].ippt_gen, plantList[62].ippt_gen, plantList[63].ippt_gen, plantList[64].ippt_gen]
          },{
            name: '경상대태양광',
            data: [plantList[68].ippt_gen, plantList[69].ippt_gen, plantList[70].ippt_gen, plantList[71].ippt_gen, plantList[72].ippt_gen,
            plantList[73].ippt_gen, plantList[74].ippt_gen, plantList[75].ippt_gen, plantList[76].ippt_gen, plantList[77].ippt_gen]
          }

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