type UpArrowProps = {
  className?: string; // Tailwind 크기, 색상 조정용
};

const UpArrow = ({ className }: UpArrowProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 38 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 19.2596L19 3.234L3 19.2596"
        stroke="white"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UpArrow;
