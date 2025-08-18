import { Category, Speaker } from "@/constants/sessionData";
import RightArrow from "../svg/RightArrow";
import Modal from "../modal/Modal";
import { useState } from "react";
import CloseSvg from "../svg/CloseSvg";

type TProps = {
  description: string;
  name: string;
  sequence: string;
  speaker?: Speaker;
  time: string;
  category: Category[] | undefined;
};

const ScheduleItem = ({
  category,
  description,
  name,
  sequence,
  speaker,
  time,
}: TProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isModalBlocking = sequence === "OPENING";

  return (
    <div
      className={`flex ${!isModalBlocking && "cursor-pointer"} flex-col not-lg:gap-3 lg:flex-row`}
      onClick={() => {
        !isModalBlocking && setIsModalOpen(true);
      }}
    >
      <div className="flex w-full flex-row justify-between gap-1 lg:w-2/5 lg:flex-col lg:gap-2">
        <div className="flex flex-row gap-2 lg:flex-col">
          <span className="text-lg lg:text-3xl">{time}</span>
          <div className="flex flex-row gap-[2px] lg:gap-2">
            {category?.map(({ name, color }) => (
              <div key={name}>
                <span
                  className="rounded-3xl px-[6px] py-1 text-[11px] lg:px-3 lg:text-lg"
                  style={{ background: color }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
        {!isModalBlocking && (
          <div className="lg:hidden">
            <RightArrow className="w-4 lg:w-6" />
          </div>
        )}
      </div>
      <div className="flex w-full justify-between gap-2 not-lg:flex-col lg:gap-5">
        <span className="text-base lg:w-1/3 lg:text-xl">{sequence}</span>
        <div className="flex w-full flex-col gap-2">
          {name && <span className="text-xl lg:text-2xl">{name}</span>}
          {speaker && (
            <span className="text-lg lg:text-xl">
              {speaker.name} - {speaker.team}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-row-reverse not-lg:hidden">
        {!isModalBlocking ? (
          <RightArrow className="w-4 lg:w-6" />
        ) : (
          <div className="w-4" />
        )}
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex w-full not-lg:flex-col sm:w-md lg:w-5xl">
          <div className="lg:w-1/2">
            {/* TODO : 연사자 사진 추가 */}
            {speaker && (
              <img
                className="aspect-square h-full w-full object-cover"
                src={speaker?.picture ?? "/image/speaker_default.png"}
              />
            )}
          </div>
          <div className="flex flex-col p-4 lg:w-1/2 lg:p-8">
            <div className="flex justify-between pb-5 lg:pb-8">
              <span className="font-pretendard text-lg font-bold lg:text-xl">
                {sequence}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
              >
                <CloseSvg className="w-4 lg:w-6" />
              </button>
            </div>
            <span className="pb-2 text-lg whitespace-pre-line lg:pb-3 lg:text-4xl">
              {name}
            </span>
            {speaker && (
              <span className="pb-3 text-base lg:pb-8 lg:text-2xl">
                {speaker.name} - {speaker.team}
              </span>
            )}
            <span className="font-pretendard text-sm leading-6 font-semibold whitespace-pre-line lg:min-h-48 lg:text-xl lg:leading-7">
              {description}
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ScheduleItem;
