import ImageCircle from "./imageShape/ImageCircle";
import ImageShape1 from "./imageShape/ImageShape1";
import ImageShape2 from "./imageShape/ImageShape2";
import ImageShape3 from "./imageShape/ImageShape3";
import ImageShape4 from "./imageShape/ImageShape4";
import ImageSquare from "./imageShape/ImageSquare";

const SPEAKER_LIST = [
  { Component: ImageSquare, src: "/image/test_image.jpg" },
  { Component: ImageCircle, src: "/image/test_image.jpg" },
  { Component: ImageShape4, src: "/image/test_image.jpg" },
  { Component: ImageShape1, src: "/image/test_image.jpg" },
  { Component: ImageShape3, src: "/image/test_image.jpg" },
  { Component: ImageCircle, src: "/image/test_image.jpg" },
  { Component: ImageShape2, src: "/image/test_image.jpg" },
  { Component: ImageSquare, src: "/image/test_image.jpg" },
];

const SpeakerSection = () => {
  return (
    <section>
      <div className="mt-[120px] text-center text-white">
        <h2 className="text-4xl lg:text-6xl">SPEAKERS</h2>
        <p className="mt-[45px] text-xl lg:text-2xl">
          *더미텍스트* 아우쓱콘의 연사자들을 소개합니다.
        </p>
      </div>
      <div className="flex justify-center not-lg:px-4">
        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 justify-items-center gap-x-4 gap-y-20 lg:grid-cols-4 lg:gap-x-18">
          {SPEAKER_LIST.map(({ Component, src }, index) => {
            return (
              <div className="text-white" key={index}>
                <div className="flex justify-center">
                  <Component width={"100%"} src={src} />
                </div>
                <div className="mt-6 pb-2">
                  <span className="mr-[11px] text-2xl lg:text-4xl">박태성</span>
                  <span className="text-base lg:text-xl">아이디어샘</span>
                </div>
                <p className="font-pretendard mb-3 text-base font-bold lg:text-xl">
                  제목커뮤니티 활동을 하라, 그럼 당신에게 드넓은 기회가 펼쳐질
                  것이니
                </p>
                <p className="font-pretendard text-sm font-medium">
                  사수 없이도 개발 실력을 키울 수 있었던 비결인 커뮤니티
                  활용법을 전파하려 합니다.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
