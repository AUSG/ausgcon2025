type TProps = {
  width: number | string;
  height?: number | string;
  src: string;
};

/**
 * 꽃잎 모양
 */
const ImageShape3 = ({ height, src, width }: TProps) => {
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
          <clipPath id="blobClip">
            <path d="M106.78 14.6848C122.028 -4.89493 151.972 -4.89493 167.22 14.6848C175.456 25.2598 188.773 30.7368 202.195 29.076C226.831 26.0276 247.828 46.614 244.833 70.9019L244.695 72.0183C243.057 85.3064 248.555 98.4846 259.198 106.802C278.934 122.225 278.934 151.775 259.198 167.198C248.555 175.515 243.057 188.694 244.695 201.982L244.833 203.098C247.828 227.386 226.831 247.972 202.195 244.924C188.773 243.263 175.456 248.74 167.22 259.315C151.972 278.895 122.028 278.895 106.78 259.315C98.5445 248.74 85.2266 243.263 71.8047 244.924C47.1694 247.972 26.1721 227.386 29.167 203.098L29.3047 201.982C30.9432 188.694 25.4454 175.515 14.8021 167.198C-4.93403 151.775 -4.93403 122.225 14.8021 106.802C25.4454 98.4846 30.9432 85.3064 29.3047 72.0183L29.167 70.9019C26.1721 46.614 47.1695 26.0276 71.8047 29.076C85.2266 30.7368 98.5445 25.2599 106.78 14.6848Z" />
          </clipPath>
        </defs>

        <image
          href={src}
          width="100%"
          height="100%"
          clipPath="url(#blobClip)"
          preserveAspectRatio="xMidYMid slice"
        />
      </svg>
    </div>
  );
};

export default ImageShape3;
