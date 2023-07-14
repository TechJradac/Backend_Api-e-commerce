import {
  HomeMain,
  TopSales,
  Features,
  PopularSales,
  Footer,
} from "../components";
import {
  popularsales,
  handBag,
  topratesales,
  cuff_link,
  homeShowCase,
} from "../../data/data";
import {VideoClip} from "../components"
import {homeVideo} from "../../public/images";


const HomePage = () => {
  return (
    <>
      <div className=" grid gap-[10rem] mb-10">
        <HomeMain />
        <TopSales value={popularsales} />
        <Features value={handBag} isHandBag />
        <TopSales value={topratesales} isTopSale />
        <Features value={cuff_link} />
      </div>
      <VideoClip video={homeVideo}/>
    </>
  );
};

export default HomePage;
