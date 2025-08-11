type RightArrowProps = {
  className?: string; // Tailwind 크기나 색상 제어용
};

const RightArrow = ({ className }: RightArrowProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 37 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7686 34.2043L16.2041 30.6887L26.8975 20.0442H0.969727V14.9172H26.8975L16.2041 4.27271L19.7686 0.75708L36.4678 17.4563L19.7686 34.2043Z"
        fill="white"
      />
    </svg>
  );
};

export default RightArrow;
