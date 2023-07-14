import { Banner, MainProduct } from "../components"
import { allFabric, clothe_showCase } from "../../data/data"
import {allfabricVideo} from "../../public/images";
import {VideoClip} from "../components"


const AllFabric = ({val}) => {
  return (
    <div>
        <Banner val={val} />
        <MainProduct images={allFabric} showcase= {clothe_showCase}/>
      <VideoClip video={allfabricVideo}/>

    </div>
  )
}

export default AllFabric