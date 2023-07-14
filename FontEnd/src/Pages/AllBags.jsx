import { allBags, bag_showCase } from "../../data/data"
import { Banner, MainProduct } from "../components";
import {bagShowCaseVideo} from "../../public/images";
import {VideoClip} from "../components"

const AllBags = ({val}) => {
  return (
    <div>
    <Banner val={val} />
    <MainProduct images={allBags} showcase= {bag_showCase}/>

    <VideoClip video={bagShowCaseVideo}/>

</div>
  )
}

export default AllBags