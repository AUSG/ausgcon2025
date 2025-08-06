import Link from "next/link";
import Timer from "../timer/Timer";

const MainSection = () => {
  return (
    <section className="relative h-screen min-h-[1100px] w-full bg-[url('/image/main_bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 mt-[69px] flex w-full flex-col items-center">
        <div className="w-1/2">
          <h1 className="mb-[31.31px] flex justify-center">
            <img
              fetchPriority="high"
              src="/image/2025ausgcon.png"
              className="h-[30vh] w-fit"
              alt="2025 AUSGCON"
            />
          </h1>
          <div className="mb-12 flex w-full justify-center text-4xl font-normal text-white">
            2025.09.13 AWS KOREA 센터필드
          </div>
          <div className="mb-[86.98px]">
            <Timer />
          </div>
          <div className="mb-[43.53px] flex items-center justify-center">
            {/* TODO : 참가하러가기 링크수정 */}
            <Link
              href="/a"
              className="flex items-center justify-center gap-[9.263px] rounded-[8px] bg-white px-[55.579px] py-[6.947px] text-[24px] leading-[32.421px] text-[#141414]"
            >
              참가하러 가기
              <b className="text-[32px]" style={{ fontFamily: "Pretendard" }}>
                →
              </b>
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/image/ausg_logo.svg"
              width="167"
              height="30"
              loading="lazy"
              fetchPriority="low"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
