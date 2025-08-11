type QuestionMarkProps = {
  className?: string; // Tailwind 크기, 색상 지정
};

const QuestionMark = ({ className }: QuestionMarkProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5 33C26.0604 33 33 26.0604 33 17.5C33 8.93959 26.0604 2 17.5 2C8.93959 2 2 8.93959 2 17.5C2 26.0604 8.93959 33 17.5 33Z"
        stroke="white"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.9893 12.85C13.3537 11.8141 14.0729 10.9405 15.0197 10.3841C15.9664 9.82773 17.0795 9.62433 18.1619 9.80998C19.2442 9.99563 20.2259 10.5583 20.9331 11.3984C21.6403 12.2386 22.0274 13.3018 22.0258 14.4C22.0258 17.5 17.3758 19.05 17.3758 19.05"
        stroke="white"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 25.25H17.516"
        stroke="white"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default QuestionMark;
