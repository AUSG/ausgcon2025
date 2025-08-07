import ScheduleTable from "./ScheduleTable";

const ScheduleSection = () => {
  return (
    <section className="">
      <div className="mt-[120px] text-center text-white">
        <h2 className="text-[70px]">SCHEDULE</h2>
        <p className="mt-[45px] text-[30px]">
          *더미텍스트* 아우쓱콘의 일정들을 소개합니다.
        </p>
      </div>
      <div className="mt-[70px] flex justify-center">
        <ScheduleTable />
      </div>
    </section>
  );
};

export default ScheduleSection;
