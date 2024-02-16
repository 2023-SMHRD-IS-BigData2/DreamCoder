import React, { useEffect } from 'react'
import './Map.css';

const Map = () => {
    useEffect(() => {
        const { sop } = window;
        const map = sop.map("map"); //map 생성
    
        const utmkXY = new sop.LatLng(36.24, 127.77); // 위도경도 -> utmk
        map.setView(sop.utmk(utmkXY.x, utmkXY.y), 2);// 지도 중심좌표로 뷰 설정
    
        map.dragging.disable(); // 지도 이동 불가
        map.scrollWheelZoom.disable(); // 지도 확대 불가
    
        // 인포윈도우 좌표 찍기 위도경도 -> utmk
        const utmkXYm = new sop.LatLng(35.14627776, 126.9230903);
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
    
        infoWindow.setUTMK([utmkXYm.x, utmkXYm.y]);
        infoWindow.openOn(map);
    
    
      }, []);
  return (
    <div className='map-container'>
      <div id="map" style={{ width: '100%', height: '820px', zIndex: 1200 }} />
    </div>
  )
}

export default Map