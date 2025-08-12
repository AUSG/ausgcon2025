const DescriptionSection = () => {
  return (
    <section className="flex flex-row-reverse items-center bg-white bg-[url('/image/description_bg.svg')] bg-cover bg-center bg-no-repeat py-[95px]">
      <div className="items-left my-4 flex h-fit w-[775px] flex-col justify-center px-3 text-left lg:pr-32">
        <p className="mb-[41px] text-2xl sm:text-3xl">
          대학생과 주니어를 위한 IT 컨퍼런스!
          <br />
          “AUSGCON”(아우쓱콘)을 소개합니다
        </p>
        <p className="font-pretendard text-lg leading-9 font-semibold sm:text-2xl">
          AUSGCON은 “IT에 대한 열정이 있는 사람들을 위한 교류의 장”이라는
          컨셉으로 열리는 오프라인 기술 컨퍼런스입니다. <br />
          주로 대학생 및 개발자를 대상으로 진행되며, 3개 트랙에서 진행하는
          다양한 발표 세션과 참가자 간의 활발한 네트워킹 시간, 그리고 각종 부스
          세션까지 더욱 풍성하게 구성됩니다.
        </p>
      </div>
    </section>
  );
};

export default DescriptionSection;
