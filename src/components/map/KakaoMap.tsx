"use client";

import { useIsPc } from "@/hooks/useIsPc";
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
  className?: string;
};

const KakaoMap = ({
  width = 500,
  height = 400,
  lat = 33.450701,
  lng = 126.570667,
  className,
}: TProps) => {
  const isPc = useIsPc();

  useEffect(() => {
    // 카카오 지도 API가 로드되었는지 확인
    if (window.kakao && window.kakao.maps) {
      const container = document.getElementById("map"); // 지도를 담을 영역의 DOM
      const options = {
        center: new window.kakao.maps.LatLng(lat, lng), // 중심 좌표
        level: 3, // 확대 수준
      };

      const map = new window.kakao.maps.Map(container, options); // 지도 생성

      const markerPosition = new window.kakao.maps.LatLng(lat, lng);

      const [w, h] = isPc ? [168, 211] : [56, 70];
      const imageSrc = "/image/map_flag.png";
      const imageSize = new window.kakao.maps.Size(w, h);
      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
      );

      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        map: map, // 여기서 map은 위에서 생성한 지도 객체
        image: markerImage,
      });
    }
  }, []);

  return (
    <div
      id="map"
      className={className}
      style={{
        width: "100%",
        height: "100%",
        borderRadius: "24px",
      }}
    />
  );
};

export default KakaoMap;
