type TProps = {
  list: { name: string; id: number }[];
  activeId: number;
  onChange: (newTab: number) => void;
};

const ScheduleTab = ({ activeId, list, onChange }: TProps) => {
  return (
    <div className="flex justify-between">
      {list.map(({ name, id }) => {
        const isActive = id === activeId;
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`${isActive ? "bg-white text-[#95B0CC]" : "text-white"} w-full border-b-2 border-white py-4 text-center lg:border-b-[3px] lg:py-5`}
          >
            <span className="text-xl lg:text-2xl">{name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default ScheduleTab;
