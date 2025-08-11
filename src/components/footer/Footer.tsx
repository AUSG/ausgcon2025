"use client";
import { useIsPc } from "@/hooks/useIsPc";
import FacebookSvg from "../svg/FacebookSvg";
import HomeSvg from "../svg/HomeSvg";
import InstagramSvg from "../svg/InstagramSvg";
import LinkedInSvg from "../svg/LinkedInSvg";

const Footer = () => {
  const isPc = useIsPc();
  const SvgSize = isPc ? 28 : 16;

  return (
    <footer className="">
      <div className="flex items-center justify-between px-4 py-5 lg:px-12 lg:py-8">
        <img
          src="/image/ausg_logo.svg"
          className="h-auto w-[108px] lg:w-[148px]"
          loading="lazy"
          fetchPriority="low"
        />
        <span className="font-pretendard text-sm text-white lg:text-xl">
          @ AUSG 2025 ALL RIGHTS RESERVED
        </span>
        <div className="flex gap-2 lg:gap-7">
          <a target="_blank" href="https://ausg.me/">
            <HomeSvg className="w-4 lg:w-7" />
          </a>
          <a target="_blank" href="https://www.facebook.com/ausgkr">
            <FacebookSvg className="w-4 lg:w-7" />
          </a>
          <a target="_blank" href="https://www.instagram.com/ausg.awskrug">
            <InstagramSvg className="w-4 lg:w-7" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/ausg-kr/">
            <LinkedInSvg className="w-4 lg:w-7" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
