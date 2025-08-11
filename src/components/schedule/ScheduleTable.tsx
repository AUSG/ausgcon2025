"use client";

import { useState } from "react";
import ScheduleTab from "./ScheduleTab";
import { sessionData } from "@/constants/sessionData";
import ScheduleItem from "./ScheduleItem";

const ScheduleTable = () => {
  const [tab, setTab] = useState<number>(1);

  const changeTab = (newTab: number) => {
    setTab(newTab);
  };

  const selectedTrackData =
    sessionData.find((track) => track.id === tab)?.sessionList ?? [];

  return (
    <>
      <div className="flex flex-col bg-[rgba(116,123,144,0.2)] backdrop-blur-[4.9px]">
        <ScheduleTab list={sessionData} activeId={tab} onChange={changeTab} />
        <div className="">
          <ul className="text-white">
            {selectedTrackData.map(
              ({ description, name, speaker, time, category, sequence }) => {
                return (
                  <li
                    key={name}
                    className="mr-6 ml-6 border-b-[1px] py-6 last:border-b-0 lg:mr-6 lg:ml-11"
                  >
                    <ScheduleItem
                      description={description}
                      sequence={sequence}
                      name={name}
                      speaker={speaker}
                      time={time}
                      category={category}
                    />
                  </li>
                );
              },
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ScheduleTable;
