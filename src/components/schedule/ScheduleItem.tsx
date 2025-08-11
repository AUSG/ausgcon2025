import { Category, Speaker } from "@/constants/sessionData";
import RightArrow from "../svg/RightArrow";
import { useIsPc } from "@/hooks/useIsPc";
import Modal from "../modal/Modal";
import { useState } from "react";
import CloseSvg from "../svg/CloseSvg";

type TProps = {
  description: string;
  name: string;
  sequence: string;
  speaker: Speaker;
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
  const isPc = useIsPc();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex cursor-pointer" onClick={() => setIsModalOpen(true)}>
      <div className="flex w-1/3 flex-col gap-2">
        <span className="text-xl lg:text-3xl">{time}</span>
        <div className="flex gap-3 not-lg:flex-col">
          {category?.map(({ name, color }) => (
            <span
              className="rounded-3xl px-5 py-1 text-lg"
              style={{ background: color }}
              key={name}
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <span className="w-1/5 text-lg lg:text-2xl">{sequence}</span>
      <div className="flex w-2/5 flex-col gap-2">
        {name && <span className="text-lg lg:text-2xl">{name}</span>}
        <span className="text-base lg:text-xl">
          {speaker.name} - {speaker.team}
        </span>
      </div>
      <div className="flex flex-1 flex-row-reverse">
        <RightArrow width={isPc ? 24 : 18} />
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex">
          <div className="w-1/2">
            {/* TODO : 연사자 사진 추가 */}
            <img className="h-full w-full object-cover" src={speaker.picture} />
          </div>
          <div className="flex w-1/2 flex-col p-8">
            <div className="flex justify-between pb-8">
              <span className="font-pretendard text-xl font-bold">
                {sequence}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsModalOpen(false);
                }}
              >
                <CloseSvg />
              </button>
            </div>
            <span className="pb-3 text-4xl whitespace-pre-line">{name}</span>
            <span className="pb-8 text-2xl">
              {speaker.name} - {speaker.team}
            </span>
            <span className="font-pretendard min-h-48 text-xl leading-7 font-semibold whitespace-pre-line">
              {description}
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ScheduleItem;
