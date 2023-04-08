import SlideImage from "./SlideImage";
import SlideTitle from "./SlideTitle";

const Slide = ({ data: { primaryImage, titleText } }) => {
  {
    console.log(primaryImage, titleText);
  }
  return (
    <div className="slide relative" style={{ flex: "1 0 100%" }}>
      <SlideImage src={primaryImage?.url} alt={titleText.text} />
      <SlideTitle title={titleText.text} />
    </div>
  );
};

export default Slide;
