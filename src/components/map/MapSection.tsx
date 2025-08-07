import KakaoMap from "./KakaoMap";

const WIDTH = 1606;

const MapSection = () => {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-center text-[70px] text-white">HOW TO FIND US</h2>
      <KakaoMap
        width={WIDTH}
        height={815}
        lat={37.50359690358887}
        lng={127.04153904751364}
      />
      <div
        style={{ width: WIDTH }}
        className="flex flex-col text-start text-white"
      >
        <div className="mt-11">
          <p className="text-4xl">AWS KOREA 센터필드</p>
        </div>
        <div className="font-pretendard mt-6 text-3xl">
          <div className="flex gap-9">
            <span>지하철</span>
            <p>
              지하철 2호선과 분당선을 이용, 역삼역 8번 출구로 나와서 도보로 약
              5분 거리에 있습니다.
            </p>
          </div>
          <div className="flex gap-9">
            <span>버스</span>
            <p>
              역삼역 주변에는 다양한 버스 노선이 지나므로, 정류장 위치와 노선을
              확인하여 이용하시면 됩니다.
            </p>
          </div>
          <div className="flex gap-9">
            <span>자가용</span>
            <p>센터필드 건물 주차장을 이용할 수 있습니다. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
