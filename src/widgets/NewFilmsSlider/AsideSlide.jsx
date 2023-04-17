import SlideImage from "./SlideImage";

const AsideSlide = ({ data: { primaryImage, titleText } }) => {
  return (
    <>
      <div
        className=" justify-center slide flex relative"
        style={{ flex: "1 0 15%" }}
      >
        <SlideImage src={primaryImage?.url} alt={titleText.text} />
      </div>
    </>
  );
};

export default AsideSlide;
