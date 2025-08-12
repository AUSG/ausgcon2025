import KakaoMap from "./KakaoMap";

const MapSection = () => {
  return (
    <section className="mt-24 mb-16 flex flex-col items-center not-lg:px-3">
      <h2 className="mb-20 text-center text-4xl text-white lg:text-6xl">
        HOW TO FIND US
      </h2>
      <div className="h-48 w-full max-w-5xl lg:h-96">
        <KakaoMap
          className=""
          // width={WIDTH}
          // height={815}
          lat={37.50359690358887}
          lng={127.04153904751364}
        />
      </div>
      <div className="flex flex-col text-start text-white">
        <div className="mt-11">
          <span className="text-2xl lg:text-3xl">AWS KOREA 센터필드</span>
        </div>
        <div className="font-pretendard mt-6 text-xl lg:text-2xl">
          <div className="flex gap-3 pb-3 not-lg:flex-col lg:gap-9">
            <span className="font-extrabold">지하철</span>
            <span className="font-medium">
              지하철 2호선과 분당선을 이용, 역삼역 8번 출구로 나와서 도보로 약
              5분 거리에 있습니다.
            </span>
          </div>
          <div className="flex gap-3 pb-3 not-lg:flex-col lg:gap-9">
            <span className="font-extrabold">버스</span>
            <span className="font-medium">
              역삼역 주변에는 다양한 버스 노선이 지나므로, 정류장 위치와 노선을
              확인하여 이용하시면 됩니다.
            </span>
          </div>
          <div className="flex gap-3 pb-3 not-lg:flex-col lg:gap-9">
            <span className="font-extrabold">자가용</span>
            <span className="font-medium">
              센터필드 건물 주차장을 이용할 수 있습니다.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
