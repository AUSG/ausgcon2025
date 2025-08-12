type TProps = {
  src: string;
  alt?: string;
  className?: string; // Tailwind로 크기/스타일 제어
};

/**
 * 모래시계같이 생긴 모양
 */
const ImageShape1 = ({ src, alt = "Shape image", className = "" }: TProps) => {
  return (
    <div className={`aspect-square ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 274 274"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="customClip">
            <path d="M270.24 0C272.697 10.2662 274 20.9809 274 32C274 71.9785 256.874 107.955 229.561 133C256.874 158.045 274 194.022 274 234C274 247.916 271.922 261.346 268.065 274H5.93457C2.07754 261.346 0 247.916 0 234C0 194.022 17.1253 158.045 44.4385 133C17.1253 107.955 0 71.9782 0 32C0 20.9809 1.30315 10.2662 3.75977 0H270.24Z" />
          </clipPath>
        </defs>

        <image
          href={src}
          width="100%"
          height="100%"
          clipPath="url(#customClip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
};

export default ImageShape1;
