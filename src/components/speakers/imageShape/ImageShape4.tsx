type TProps = {
  width: number;
  height: number;
  src: string;
  alt?: string;
};

/**
 * 폭죽모양
 */
const ImageShape4 = ({ width, height, src }: TProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 262 278`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="dodecagonClip" clipPathUnits="userSpaceOnUse">
          <path d="M131 0L169.102 20.0228L211.527 26.5466L230.752 65.4681L261.295 96.0466L254.3 139L261.295 181.953L230.752 212.532L211.527 251.453L169.102 257.977L131 278L92.8982 257.977L50.4734 251.453L31.2482 212.532L0.705261 181.953L7.7 139L0.705261 96.0466L31.2482 65.4681L50.4734 26.5466L92.8982 20.0228L131 0Z" />
        </clipPath>
      </defs>

      <image
        href={src}
        width="100%"
        height="100%"
        clipPath="url(#dodecagonClip)"
        preserveAspectRatio="xMidYMid slice"
      />
    </svg>
  );
};

export default ImageShape4;
