type CloseSvgProps = {
  className?: string;
};

const CloseSvg = ({ className }: CloseSvgProps) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className} // Tailwind 크기 조정 가능
    >
      <path
        d="M22 2L12 12M12 12L2 22M12 12L2 2M12 12L22 22"
        stroke="black"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseSvg;
