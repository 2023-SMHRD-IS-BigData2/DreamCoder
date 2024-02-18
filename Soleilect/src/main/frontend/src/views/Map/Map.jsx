import React, { useEffect ,useState } from 'react'
import './Map.css';
import useInterval from './useInterval';

const Map = () => {

  useEffect(() => {
    const { sop } = window;
    const map = sop.map("map"); //map 생성

    const utmkXY = new sop.LatLng(36.24, 127.77); // 위도경도 -> utmk
    map.setView(sop.utmk(utmkXY.x, utmkXY.y), 2);// 지도 중심좌표로 뷰 설정

    map.dragging.disable(); // 지도 이동 불가
    map.scrollWheelZoom.disable(); // 지도 확대 불가

    // 마커
    const utmkXYm = new sop.LatLng(35.14627776, 126.9230903);
    const marker = sop.marker([utmkXYm.x, utmkXYm.y]);



    // 인포윈도우 좌표 찍기 위도경도 -> utmk
    // 인포윈도우 생성
    const infoWindow = sop.infoWindow();

    const contents = "<div style='font-size: 18px; font-weight: bold; margin-bottom: 5px;'>광주광역시 동구 </div>" +
      "<table style='border-spacing: 2px; border: 0px'><tbody><tr>" +

      "<td style='width: 80px; color:#767676; padding-right:12px font-size: 18px;'><div style='font-size: 15px;'>발전량<div/></td>" +
      "<td><span style='font-size: 15px; font-weight: bold;'>5000kw</span></td></tr>" +

      "<tr><td style='color:#767676;padding-right:12px'><div style='font-size: 15px;'>전력단가<div/></td>" +
      "<td><span style='font-size: 15px; font-weight: bold;'>000원</span></td></tr>" +

      "<tr><td style='color:#767676;padding-right:12px'><div style='font-size: 15px;'>수익률<div/></td>" +
      "<td style=''><span style='font-size: 15px; font-weight: bold;'>000원</span></td></tr>" +

      "<tr><td style='color:#767676;padding-right:12px'><div style='font-size: 15px;'>투자비용<div/></td>" +
      "<td><span style='font-size: 15px; font-weight: bold;'>000원</span></td>" +
      "</tr></tbody></table>";

    infoWindow.setContent(contents);

    marker.on("mouseover", function(e) {
      infoWindow.setUTMK([utmkXYm.x, utmkXYm.y+20000]);
      infoWindow.openOn(map);
    });
    marker.on("mouseout", function(e) {
      // infoWindow.close(map);
    });
    marker.addTo(map);



  }, []);


  // 우측 발전량 예측 인포메이션  ------------------

  //  test 인포메이션 
  // state 예측 발전량
  const [count,setCount] = useState(0);

  // state 예측 수익
  const [revenue,setRevenue] = useState(0);

  // state 지역 이름
  const locations = ['광주광역시 동구','부산광역시 남구', '대구광역시 서구'];
  const [loc, setLoc] = useState(locations[0]);
  const [locIndex, setLocIndex] = useState(0);

  useInterval(() => {
    setCount(count + 1);
    setRevenue(revenue + 1);
    
    const nextIndex = (locIndex + 1) % locations.length;
    // console.log(locIndex+1);
    // console.log(locations.length);
    // console.log((locIndex + 1) % locations.length);
    setLoc(locations[nextIndex]);
    setLocIndex(nextIndex);

  }, 2000);


  return (
    <div className='map-container'>
      <div id="map" style={{ width: '100%', height: '820px' }} />
      <div className='map-info-container'>
        <div className='map-info-box'>
          <div className='map-info-content'>
            <div className='map-info-content-loc'>{loc}</div>
            <div className='map-info-content-power'>
              <div className='mypage-right-icon-box'>
              <div className='icon sun-icon'></div>
              </div>
              <div className='map-info-content-power-key'>{'발전량'}</div>
              <div className='map-info-content-power-value'>{count}{'kw'}</div>
            </div>

            <div className='map-info-content-revenu'>
              <div className='mypage-right-icon-box'>
                <div className='icon dollar-coin-icon'></div>
              </div>
              <div className='map-info-content-revenu-key'>{'예상수익'}</div>
              <div className='map-info-content-revenu-value'>{revenue}{'원'}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Map