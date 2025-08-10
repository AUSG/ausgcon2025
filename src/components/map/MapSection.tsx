import KakaoMap from "./KakaoMap";

const WIDTH = 1071;

const MapSection = () => {
  return (
    <section className="mt-24 mb-16 flex flex-col items-center">
      <h2 className="mb-28 text-center text-6xl text-white">HOW TO FIND US</h2>
      <div className="h-[543px] w-[1071px]">
        <KakaoMap
          width={WIDTH}
          height={815}
          lat={37.50359690358887}
          lng={127.04153904751364}
        />
      </div>
      <div
        style={{ width: WIDTH }}
        className="flex flex-col text-start text-white"
      >
        <div className="mt-11">
          <p className="text-3xl">AWS KOREA 센터필드</p>
        </div>
        <div className="font-pretendard mt-6 text-2xl">
          <div className="flex gap-9 pb-3">
            <span className="font-extrabold">지하철</span>
            <p className="font-medium">
              지하철 2호선과 분당선을 이용, 역삼역 8번 출구로 나와서 도보로 약
              5분 거리에 있습니다.
            </p>
          </div>
          <div className="flex gap-9 pb-3">
            <span className="font-extrabold">버스</span>
            <p className="font-medium">
              역삼역 주변에는 다양한 버스 노선이 지나므로, 정류장 위치와 노선을
              확인하여 이용하시면 됩니다.
            </p>
          </div>
          <div className="flex gap-9">
            <span className="font-extrabold">자가용</span>
            <p className="font-medium">
              센터필드 건물 주차장을 이용할 수 있습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
