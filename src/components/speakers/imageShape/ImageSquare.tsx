type TProps = {
  width: number;
  height: number;
  src: string;
  alt?: string;
};

const ImageSquare = ({ width, height, src, alt = "Square image" }: TProps) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width,
        height,
        objectFit: "cover",
      }}
    />
  );
};

export default ImageSquare;
