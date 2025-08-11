import Link from "next/link";
import Timer from "../timer/Timer";

const MainSection = () => {
  return (
    <section className="relative h-full w-full bg-[url('/image/main_bg.png')] bg-cover bg-center bg-repeat lg:aspect-auto lg:bg-no-repeat">
      <div className="flex w-full flex-col items-center pt-[69px]">
        <div className="w-full px-3 lg:max-w-[978px]">
          <h1 className="mb-[31.31px] flex justify-center">
            <img
              fetchPriority="high"
              src="/image/2025ausgcon.png"
              className="w-2/3"
              alt="2025 AUSGCON"
            />
          </h1>
          <div className="mb-12 flex justify-center text-xl font-normal text-white sm:text-2xl md:text-3xl lg:text-4xl">
            2025.09.13 AWS KOREA 센터필드
          </div>
          <div className="mb-[86.98px] flex justify-center">
            <div className="flex justify-center rounded-[20px] bg-[rgba(255,255,255,0.20)] px-2 py-10 shadow-[0_4px_20px_0_rgba(39,55,125,0.10)] backdrop-blur-[10px] lg:px-32 lg:py-14">
              <Timer target={"2025-09-13T09:00:00+09:00"} />
            </div>
          </div>
          <div className="mb-20 flex items-center justify-center">
            {/* TODO : 참가하러가기 링크수정 */}
            <Link
              href="/a"
              className="flex h-[50px] w-[220px] items-center justify-center gap-[6px] rounded-3xl bg-white text-[18px] leading-[26px] text-[#141414] sm:h-[58px] sm:w-[250px] sm:gap-[8px] sm:rounded-[7px] sm:px-[40px] sm:py-[6px] sm:text-[20px] sm:leading-[28px] md:h-[64px] md:w-[280px] md:gap-[9px] md:rounded-[8px] md:px-[48px] md:py-[6.5px] md:text-[22px] md:leading-[30px] lg:h-[69.5px] lg:w-[308px] lg:gap-[9.263px] lg:rounded-[8px] lg:px-[55.579px] lg:py-[6.947px] lg:text-[24px] lg:leading-[32.421px]"
            >
              <p>
                참가하러 가기 <b style={{ fontFamily: "Pretendard" }}>→</b>
              </p>
            </Link>
          </div>
          <div className="flex items-center justify-center pb-[50px]">
            <img
              src="/image/ausg_logo.svg"
              className="h-auto w-[128px] lg:w-[167px]"
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
