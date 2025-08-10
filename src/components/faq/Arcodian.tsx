"use client";
import { useState } from "react";
import QuestionMark from "../svg/QuestionMark";
import UpArrow from "../svg/UpArrow";

type TProps = {
  title: string;
  description: string;
};

const Arcodian = ({ title, description }: TProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-[18px] bg-[rgba(77,100,161,0.15)] shadow-[0_4px_18px_0_rgba(39,55,125,0.10)] backdrop-blur-[9px]">
      <div className="font-pretendard text-white">
        <button
          type="button"
          className="flex w-full items-center justify-between px-9"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="flex items-center">
            <span className="pr-4">
              <QuestionMark width={30} />
            </span>
            <span className="py-7 text-2xl font-bold">{title}</span>
          </div>
          <div className={`${isOpen ? "rotate-180" : ""}`}>
            <UpArrow width={24} />
          </div>
        </button>

        {isOpen && (
          <div className="px-12 pb-9 text-3xl font-normal whitespace-pre-line">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};

export default Arcodian;
