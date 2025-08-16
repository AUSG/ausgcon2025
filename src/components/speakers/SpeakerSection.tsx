import { Session, sessionData } from "@/constants/sessionData";
import ImageCircle from "./imageShape/ImageCircle";
import ImageShape1 from "./imageShape/ImageShape1";
import ImageShape2 from "./imageShape/ImageShape2";
import ImageShape3 from "./imageShape/ImageShape3";
import ImageShape4 from "./imageShape/ImageShape4";
import ImageSquare from "./imageShape/ImageSquare";

const IMAGE_SHAPE_LIST = [
  { Component: ImageSquare },
  { Component: ImageCircle },
  { Component: ImageShape4 },
  { Component: ImageShape1 },
  { Component: ImageShape3 },
  { Component: ImageCircle },
  { Component: ImageShape2 },
  { Component: ImageSquare },
];

const seen = new Set<string>();

// OPENING 판별(시퀀스가 OPENING이거나, 이름이 '오프닝'인 경우)
const isOpening = (s: Session) => {
  const seq = s.sequence?.trim().toUpperCase();
  const name = s.name?.trim();
  return seq === "OPENING" || /오프닝/i.test(name || "");
};

const speakers = sessionData
  .flatMap((track) => track.sessionList || [])
  .filter((session) => !isOpening(session)) // 오프닝세션 스피커 제외
  .filter((session) => {
    const key = `${session?.speaker?.name}-${session?.speaker?.team}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  })
  .map((session, index) => {
    const { Component } = IMAGE_SHAPE_LIST[index % IMAGE_SHAPE_LIST.length];
    return {
      title: session.name,
      description: session.description,
      speakerName: session?.speaker?.name,
      speakerTeam: session?.speaker?.team,
      picture: session?.speaker?.picture,
      Component,
    };
  });

const SpeakerSection = () => {
  return (
    <section>
      <div className="mt-[120px] text-center text-white">
        <h2 className="text-4xl lg:text-6xl">SPEAKERS</h2>
        <p className="mt-[45px] text-xl lg:text-2xl">
          아우쓱콘의 연사자들을 소개합니다.
        </p>
      </div>
      <div className="flex justify-center not-lg:px-3">
        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 justify-items-center gap-x-4 gap-y-16 lg:grid-cols-4 lg:gap-x-18">
          {speakers.map(
            (
              {
                Component,
                description,
                picture,
                speakerName,
                speakerTeam,
                title,
              },
              index,
            ) => {
              return (
                <div className="text-white" key={index}>
                  <div className="flex justify-center">
                    <Component
                      className="w-full md:w-[80%] lg:w-full"
                      src={picture ?? "/image/speaker_default.png"}
                    />
                  </div>
                  <div className="mt-6 flex flex-col pb-2">
                    <span className="mr-[11px] text-2xl lg:text-4xl">
                      {speakerName}
                    </span>
                    <span className="text-base lg:text-xl">{speakerTeam}</span>
                  </div>
                  <p className="font-pretendard mb-3 text-base font-bold lg:text-xl">
                    {title}
                  </p>
                  {/* <p className="font-pretendard text-sm font-medium">
                    {description}
                  </p> */}
                </div>
              );
            },
          )}
        </div>
      </div>
    </section>
  );
};

export default SpeakerSection;
