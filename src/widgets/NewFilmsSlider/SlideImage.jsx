import Image from "next/image";
import testPoster from "@/shared/assets/test-poster.jpeg";

const SlideImage = ({ src, alt }) => {
  return (
    <Image
      width={200}
      height={300}
      src={src}
      alt={alt}
      className="slide-image flex my-0 max-h-[300px] object-contain"
    />
  );
};

export default SlideImage;
