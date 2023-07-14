import { allCuff_link, cufflink_showCase } from "../../data/data";
import { Banner, MainProduct } from "../components";
import {allCuffLinkVideo} from "../../public/images";

import VideoClip from "../components/VideoClip";

const AllCuffLInk = ({ val }) => {
  return (
    <>
      <div>
        <Banner val={val} />
        <MainProduct images={allCuff_link} showcase={cufflink_showCase} />
      </div>
      <VideoClip video={allCuffLinkVideo}/>
      
    </>
  );
};

export default AllCuffLInk;
