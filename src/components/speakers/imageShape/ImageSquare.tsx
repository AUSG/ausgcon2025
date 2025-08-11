type TProps = {
  width: number | string; // px, %, 100% 모두 가능
  src: string;
  alt?: string;
};

const ImageSquare = ({ width, src, alt = "Square image" }: TProps) => {
  const styleWidth = typeof width === "number" ? `${width}px` : width;

  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: styleWidth,
        aspectRatio: "1 / 1", // 정사각형 비율 유지
        objectFit: "cover",
      }}
    />
  );
};

export default ImageSquare;
