import FacebookSvg from "../svg/FacebookSvg";
import HomeSvg from "../svg/HomeSvg";
import InstagramSvg from "../svg/InstagramSvg";
import LinkedInSvg from "../svg/LinkedInSvg";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex items-center justify-between px-12 pt-12 pb-8">
        <img
          src="/image/ausg_logo.svg"
          className="h-auto w-[128px] lg:w-[148px]"
          loading="lazy"
          fetchPriority="low"
        />
        <span className="font-pretendard text-xl text-white">
          @ AUSG 2025 ALL RIGHTS RESERVED
        </span>
        <div className="flex gap-7">
          <a target="_blank" href="https://ausg.me/">
            <HomeSvg width={28} height={28} />
          </a>
          <a target="_blank" href="https://www.facebook.com/ausgkr">
            <FacebookSvg width={28} height={28} />
          </a>
          <a target="_blank" href="https://www.instagram.com/ausg.awskrug">
            <InstagramSvg width={28} height={28} />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/ausg-kr/">
            <LinkedInSvg width={28} height={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
