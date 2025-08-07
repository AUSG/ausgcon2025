import ImageCircle from "./imageShape/ImageCircle";
import ImageShape1 from "./imageShape/ImageShape1";
import ImageShape2 from "./imageShape/ImageShape2";
import ImageShape3 from "./imageShape/ImageShape3";
import ImageShape4 from "./imageShape/ImageShape4";
import ImageSquare from "./imageShape/ImageSquare";

const SPEAKER_LIST = [
  { Component: ImageSquare, src: "/image/testImage.jpeg" },
  { Component: ImageCircle, src: "/image/testImage.jpeg" },
  { Component: ImageShape4, src: "/image/testImage.jpeg" },
  { Component: ImageShape1, src: "/image/testImage.jpeg" },
  { Component: ImageShape3, src: "/image/testImage.jpeg" },
  { Component: ImageCircle, src: "/image/testImage.jpeg" },
  { Component: ImageShape2, src: "/image/testImage.jpeg" },
  { Component: ImageSquare, src: "/image/testImage.jpeg" },
];

const WIDTH = 274;

const SpeakerSection = () => {
  return (
    <section>
      <div className="mt-[120px] text-center text-white">
        <h2 className="text-[70px]">SPEAKERS</h2>
        <p className="mt-[45px] text-[30px]">
          *더미텍스트* 아우쓱콘의 연사자들을 소개합니다.
        </p>
      </div>
      <div className="mt-20 grid grid-cols-4 justify-items-center gap-y-20">
        {SPEAKER_LIST.map(({ Component, src }, index) => {
          return (
            <div style={{ width: WIDTH }} className="text-white" key={index}>
              <Component width={WIDTH} height={WIDTH} src={src} />
              <div className="mt-6 pb-2">
                <span className="mr-[11px] text-4xl">박태성</span>
                <span className="text-xl">아이디어샘</span>
              </div>
              <p className="font-pretendard mb-3 text-xl font-bold">
                제목커뮤니티 활동을 하라, 그럼 당신에게 드넓은 기회가 펼쳐질
                것이니
              </p>
              <p className="font-pretendard font-medium">
                사수 없이도 개발 실력을 키울 수 있었던 비결인 커뮤니티 활용법을
                전파하려 합니다.
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SpeakerSection;
