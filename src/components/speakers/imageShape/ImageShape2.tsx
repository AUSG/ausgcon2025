type ImageShape2Props = {
  width: number | string;
  height?: number | string;
  src: string;
};

/**
 * 팔각형 모양
 */
const ImageShape2 = ({ width, height, src }: ImageShape2Props) => {
  const styleWidth = typeof width === "number" ? `${width}px` : width;
  return (
    <div style={{ width: styleWidth, aspectRatio: "1 / 1" }}>
      <svg
        width={width}
        height={height}
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
