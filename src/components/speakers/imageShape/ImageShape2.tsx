type TProps = {
  src: string;
  alt?: string;
  className?: string; // Tailwind로 크기/스타일 제어
};

/**
 * 팔각형 모양
 */
const ImageShape2 = ({ src, alt = "Shape image", className = "" }: TProps) => {
  return (
    <div className={`aspect-square ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 274 274"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="octagonClip">
            <path d="M137 0L229.03 44.9701L274 137L229.03 229.03L137 274L44.9701 229.03L0 137L44.9701 44.9701L137 0Z" />
          </clipPath>
        </defs>

        <image
          href={src}
          width="100%"
          height="100%"
          clipPath="url(#octagonClip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
};

export default ImageShape2;
