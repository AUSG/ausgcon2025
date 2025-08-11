type CloseSvgProps = {
  width?: number | string;
  height?: number | string;
};

const CloseSvg = ({ width = 24, height = 24 }: CloseSvgProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
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
