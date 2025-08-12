type TProps = {
  src: string;
  alt?: string;
  className?: string; // Tailwind 클래스 전부 외부에서
};

const ImageSquare = ({ src, alt = "Square image", className = "" }: TProps) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`aspect-square object-cover ${className}`} // 기본 정사각형 + 커버
    />
  );
};

export default ImageSquare;
