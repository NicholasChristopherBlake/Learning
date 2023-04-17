import SlideImage from "./SlideImage";
import SlideInfo from "./SlideInfo";

const CurrentSlide = ({ data: { primaryImage, titleText }, info }) => {
  return (
    <>
      <div
        className=" justify-center slide flex relative"
        style={{ flex: "1 0 50%" }}
      >
        <SlideImage src={primaryImage?.url} alt={titleText.text} />
        <SlideInfo info={info} />
      </div>
    </>
  );
};

export default CurrentSlide;
