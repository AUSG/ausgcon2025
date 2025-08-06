const DescriptionSection = () => {
  return (
    <section className="w-full bg-white relative">
      <img src="/image/description_bg.svg" />
      <div className="absolute top-[30px] right-[5%] flex flex-col w-fit h-fit text-left items-left">
        <p className="mb-[41px] text-[26px]">
          대학생과 주니어를 위한 IT 컨퍼런스!
          <br />
          “AUSGCON”(아우쓱콘)을 소개합니다
        </p>
        <p className="text-[18px] font-pretendard">
          AUSGCON은 “IT에 대한 열정이 있는 사람들을 위한 교류의 장”이라는
          <br />
          컨셉으로 열리는 오프라인 기술 컨퍼런스입니다. 주로 대학생 및 개발자를
          대상으로
          <br /> 진행되며, 3개 트랙에서 진행하는 다양한 발표 세션과 참가자 간의
          활발한
          <br /> 네트워킹 시간, 그리고 각종 부스 세션까지 더욱 풍성하게
          구성됩니다.
        </p>
      </div>
    </section>
  );
};

export default DescriptionSection;
