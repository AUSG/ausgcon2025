type TProps = {
  width?: number | string; // "100%", 200, "50%" 등
  src: string;
  alt?: string;
};

const ImageCircle = ({ alt = "Circle image", width = "100%", src }: TProps) => {
  const styleWidth = typeof width === "number" ? `${width}px` : width;

  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: styleWidth,
        aspectRatio: "1 / 1", // 정사각형 비율 유지
        borderRadius: "50%", // 원형으로
        objectFit: "cover", // 꽉 채우기
      }}
    />
  );
};

export default ImageCircle;
