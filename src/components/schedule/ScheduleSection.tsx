import ScheduleTable from "./ScheduleTable";

const ScheduleSection = () => {
  return (
    <section className="">
      <div className="mt-[120px] text-center text-white">
        <h2 className="text-6xl">SCHEDULE</h2>
        <p className="mt-[45px] text-2xl font-bold">
          *더미텍스트* 아우쓱콘의 일정들을 소개합니다.
        </p>
      </div>
      <div className="mt-[70px] flex justify-center px-4">
        <ScheduleTable />
      </div>
    </section>
  );
};

export default ScheduleSection;
