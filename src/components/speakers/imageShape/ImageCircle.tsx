type TProps = {
  src: string;
  alt?: string;
  className?: string; // Tailwind로 크기/스타일 제어
};

const ImageCircle = ({ src, alt = "Circle image", className = "" }: TProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`aspect-square rounded-full object-cover ${className}`}
    />
  );
};

export default ImageCircle;
