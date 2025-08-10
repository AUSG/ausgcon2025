import FacebookSvg from "../svg/FacebookSvg";
import HomeSvg from "../svg/HomeSvg";
import InstagramSvg from "../svg/InstagramSvg";
import LinkedInSvg from "../svg/LinkedInSvg";

const Footer = () => {
  return (
    <footer className="">
      <div className="flex items-center justify-between px-12 py-9">
        <img
          src="/image/ausg_logo.svg"
          className="h-auto w-[128px] lg:w-[167px]"
          loading="lazy"
          fetchPriority="low"
        />
        <span className="font-pretendard text-2xl text-white">
          @ AUSG 2025 ALL RIGHTS RESERVED
        </span>
        <div className="flex gap-7">
          <a target="_blank" href="https://ausg.me/">
            <HomeSvg />
          </a>
          <a target="_blank" href="https://www.facebook.com/ausgkr">
            <FacebookSvg />
          </a>
          <a target="_blank" href="https://www.instagram.com/ausg.awskrug">
            <InstagramSvg />
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/ausg-kr/">
            <LinkedInSvg />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
