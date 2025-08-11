"use client";
import { useState } from "react";
import QuestionMark from "../svg/QuestionMark";
import UpArrow from "../svg/UpArrow";
import { useIsPc } from "@/hooks/useIsPc";

type TProps = {
  title: string;
  description: string;
};

const Arcodian = ({ title, description }: TProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const isPc = useIsPc();

  return (
    <div className="">
      <div className="rounded-[18px] bg-[rgba(77,100,161,0.15)] shadow-[0_4px_18px_0_rgba(39,55,125,0.10)] backdrop-blur-[9px]">
        <div className="font-pretendard text-white">
          <button
            type="button"
            className="flex w-full items-center justify-between px-6 lg:px-9"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <div className="flex items-center">
              <span className="pr-3 lg:pr-4">
                <QuestionMark className="w-5 lg:w-[30px]" />
              </span>
              <span className="py-6 text-lg font-bold lg:py-7 lg:text-2xl">
                {title}
              </span>
            </div>
            <div className={`${isOpen ? "rotate-180" : ""}`}>
              <UpArrow className="w-[18px] lg:w-6" />
            </div>
          </button>

          {isOpen && (
            <div className="px-12 pb-6 text-lg font-normal whitespace-pre-line lg:pb-9 lg:text-2xl">
              {description}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Arcodian;
