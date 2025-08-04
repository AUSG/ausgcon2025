"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any; // 전역 kakao 객체 선언
  }
}

type TProps = {
  width?: number;
  height?: number;
  lat?: number;
  lng?: number;
};

const KakaoMap = ({
  width = 500,
  height = 400,
  lat = 33.450701,
  lng = 126.570667,
}: TProps) => {
  useEffect(() => {
    // 카카오 지도 API가 로드되었는지 확인
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById("map"); // 지도를 담을 영역의 DOM
      const options = {
        center: new window.kakao.maps.LatLng(lat, lng), // 중심 좌표
        level: 3, // 확대 수준
      };

      new window.kakao.maps.Map(container, options); // 지도 생성
    }
  }, []);

  return (
    <div
      id="map"
      style={{
        width: width,
        height: height,
      }}
    />
  );
};

export default KakaoMap;
