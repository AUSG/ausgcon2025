"use client";

import { useState } from "react";
import ScheduleTab from "./ScheduleTab";
import { sessionData } from "@/constants/sessionData";
import RightArrow from "../svg/RightArrow";

const ScheduleTable = () => {
  const [tab, setTab] = useState<number>(1);

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
                  className="mx-[45px] flex border-b-[1px] py-6 last:border-b-0"
                >
                  <div className="flex w-1/3 flex-col">
                    <span className="text-[45px]">{time}</span>
                    <div className="flex gap-3">
                      {category?.map(({ name, color }) => (
                        <span
                          className="rounded-3xl px-6 py-2 text-3xl"
                          style={{ background: color }}
                          key={name}
                        >
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <span className="w-1/5 text-[36px]">{name}</span>
                  <div className="flex w-2/5 flex-col">
                    {description && (
                      <span className="text-[36px]">{description}</span>
                    )}
                    <span className="text-[28px]">
                      {speaker.name} - {speaker.team}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-row-reverse">
                    <RightArrow />
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
