import Contact from "@/components/contact/TallyForm";
import KakaoMap from "@/components/map/KakaoMap";
import Timer from "@/components/timer/Timer";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="relative">
        <img src="/image/main_bg.png" alt="배경" />

        <div className="absolute inset-0 flex justify-center items-center flex-col">
          <h1 className="mb-[31.31px]">
            <img
              src="/image/2025ausgcon.png"
              width={706}
              height={332.69}
              alt="2025 AUSGCON"
            />
          </h1>
          <div className="text-white text-4xl font-normal mb-12">
            2025.09.13 AWS KOREA 센터필드
          </div>
          <div className="mb-[86.98px]">
            <Timer />
          </div>
          <div>
            <Link
              href="/a"
              className="flex w-[308px] h-[69.474px] px-[55.579px] py-[6.947px] justify-center items-center gap-[9.263px] rounded-[23.158px] bg-white text-[24px] leading-[32.421px] text-[#141414]"
            >
              참가하러 가기
              <b className="text-[32px]" style={{ fontFamily: "Pretendard" }}>
                →
              </b>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
