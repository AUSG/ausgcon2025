type FacebookSvgProps = {
  width?: number | string;
  height?: number | string;
};

const FacebookSvg = ({ width = 34, height = 34 }: FacebookSvgProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 34 34"
      fill="none"
      className="stroke-white"
    >
      <path
        d="M25.5003 2.83325H21.2503C19.3717 2.83325 17.57 3.57953 16.2417 4.90791C14.9133 6.2363 14.167 8.03797 14.167 9.91659V14.1666H9.91699V19.8333H14.167V31.1666H19.8337V19.8333H24.0837L25.5003 14.1666H19.8337V9.91659C19.8337 9.54086 19.9829 9.18053 20.2486 8.91485C20.5143 8.64917 20.8746 8.49992 21.2503 8.49992H25.5003V2.83325Z"
        strokeWidth="2.83333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default FacebookSvg;
