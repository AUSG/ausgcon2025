import Link from "next/link";
import Timer from "../timer/Timer";

const MainSection = () => {
  return (
    <section className="relative">
      <img src="/image/main_bg.png" alt="배경" />

      <div className="absolute inset-0 flex items-center flex-col w-full mt-[69px]">
        <div className="w-1/2">
          <h1 className="mb-[31.31px] flex">
            <img
              fetchPriority="high"
              src="/image/2025ausgcon.png"
              className="w-full h-auto"
              alt="2025 AUSGCON"
            />
          </h1>
          <div className="text-white text-4xl font-normal mb-12 w-full flex justify-center">
            2025.09.13 AWS KOREA 센터필드
          </div>
          <div className="mb-[86.98px]">
            <Timer />
          </div>
          <div className="mb-[43.53px] flex justify-center items-center ">
            {/* TODO : 참가하러가기 링크수정 */}
            <Link
              href="/a"
              className="px-[55.579px] py-[6.947px] gap-[9.263px] flex justify-center items-center rounded-[8px] bg-white text-[24px] leading-[32.421px] text-[#141414]"
            >
              참가하러 가기
              <b className="text-[32px]" style={{ fontFamily: "Pretendard" }}>
                →
              </b>
            </Link>
          </div>
          <div className="flex justify-center items-center">
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
