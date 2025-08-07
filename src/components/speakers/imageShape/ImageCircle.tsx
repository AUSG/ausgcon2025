type TProps = {
  width?: number;
  height?: number;
  src: string;
  alt?: string;
};

const ImageCircle = ({ alt, height, width, src }: TProps) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width,
        height,
        borderRadius: "50%",
        objectFit: "cover",
      }}
    />
  );
};

export default ImageCircle;
