"use client";

import { useState } from "react";
import ScheduleTab from "./ScheduleTab";
import { sessionData } from "@/constants/sessionData";
import RightArrow from "../svg/RightArrow";
import { useIsPc } from "@/hooks/useIsPc";

const ScheduleTable = () => {
  const [tab, setTab] = useState<number>(1);
  const isPc = useIsPc();

  const changeTab = (newTab: number) => {
    setTab(newTab);
  };

  const selectedTrackData =
    sessionData.find((track) => track.id === tab)?.sessionList ?? [];

  return (
    <div className="flex flex-col bg-[rgba(116,123,144,0.2)] backdrop-blur-[4.9px]">
      <ScheduleTab list={sessionData} activeId={tab} onChange={changeTab} />
      <div className="">
        <ul className="text-white">
          {selectedTrackData.map(
            ({ description, name, speaker, time, category }) => {
              return (
                <li
                  key={name}
                  className="mx-6 flex border-b-[1px] py-6 last:border-b-0 lg:mx-11"
                >
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

                  <span className="w-1/5 text-lg lg:text-2xl">{name}</span>
                  <div className="flex w-2/5 flex-col gap-2">
                    {description && (
                      <span className="text-lg lg:text-2xl">{description}</span>
                    )}
                    <span className="text-base lg:text-xl">
                      {speaker.name} - {speaker.team}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-row-reverse">
                    <RightArrow width={isPc ? 24 : 18} />
                  </div>
                </li>
              );
            },
          )}
        </ul>
      </div>
    </div>
  );
};

export default ScheduleTable;
