import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { homeMainSwipperImg } from "../../data/data";

const IMG = (src) => {
  return (
    <img
      src={src}
      alt=""
      className="w-full h-[100%] max-sm:h-[10rem]  border-2 hover:scale-110 transitionTheme hover:rotate-[-10deg] hover:z-10 drop-shadow-2xl"
    />
  );
};

export default function HomeImgSwipper() {
  return (
    <>
      <div className="">
        <Carousel
          autoPlay={true}
          interval={5000}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          className="w-[100%] h-[2rem] max-sm:w-[60vw] max-sm:h-[10rem]"
        >
          <div className="w-full rounded-md border-4 max-sm:h-[10rem] max-sm:w-[15rem] drop-shadow-3xl h-[20rem]  ">
            {IMG(homeMainSwipperImg.bag1)}
          </div>
          <div className="w-full rounded-md border-4 max-sm:h-[10rem] max-sm:w-[15rem]  drop-shadow-3xl h-[20rem] ">
            {IMG(homeMainSwipperImg.cuff_link1)}
          </div>
          <div className="w-full rounded-md border-4  max-sm:h-[10rem] max-sm:w-[15rem] drop-shadow-3xl h-[20rem] ">
            {IMG(homeMainSwipperImg.fabric1)}
          </div>
          <div className="w-full rounded-md border-4  max-sm:h-[10rem] max-sm:w-[15rem] drop-shadow-3xl h-[20rem] ">
            {IMG(homeMainSwipperImg.bag2)}
          </div>
          <div className="w-full rounded-md border-4  max-sm:h-[10rem] max-sm:w-[15rem] drop-shadow-3xl h-[20rem] ">
            {IMG(homeMainSwipperImg.cuff_link2)}
          </div>
          <div className="w-full rounded-md border-4  max-sm:h-[10rem] max-sm:w-[15rem] drop-shadow-3xl h-[20rem] ">
            {IMG(homeMainSwipperImg.fabric2)}
          </div>
        </Carousel>
      </div>
    </>
  );
}
