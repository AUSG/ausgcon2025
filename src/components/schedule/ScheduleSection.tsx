import ScheduleTable from "./ScheduleTable";

const ScheduleSection = () => {
  return (
    <section className="">
      <div className="mt-[120px] text-center text-white">
        <h2 className="text-4xl lg:text-6xl">SCHEDULE</h2>
        <p className="mt-[45px] text-xl lg:text-2xl">
          *더미텍스트* 아우쓱콘의 일정들을 소개합니다.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="mt-[70px] flex w-full max-w-5xl justify-center not-lg:px-3">
          <ScheduleTable />
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
