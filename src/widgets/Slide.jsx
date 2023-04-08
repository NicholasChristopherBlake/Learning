import SlideImage from "./SlideImage";
import SlideInfo from "./SlideInfo";
import SlideTitle from "./SlideTitle";

const Slide = ({ data: { primaryImage, titleText }, info }) => {
  return (
    <>
      <div
        className=" justify-center slide flex relative"
        style={{ flex: "1 0 100%" }}
      >
        <SlideImage src={primaryImage?.url} alt={titleText.text} />
        <SlideInfo info={info} />
      </div>
    </>
  );
};

export default Slide;
