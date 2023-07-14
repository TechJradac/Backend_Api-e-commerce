import { TypedReactHooksDemo } from ".";
import { clothe_28 } from "../../public/images/clothes"
import "../styles/HomeMain.css";
import HomeImgSwipper from "./HomeImgSwipper";

const HomeMain = () => {

  return (
    <div>
      <div className="w-full h-[70vh] max-sm:w-[100vw]  max-sm:h-[50vh] bg-[#fbdf99] styleText drop-shadow-md relative">
        <div className="container grid gap-3  max-sm:gap-0 max-md:grid-cols-1  grid-cols-12 relative h-[70vh] max-sm:h-[50vh] max-sm:px-[0rem] max-sm:pt-[3rem]  mx-auto px-[5rem] pt-[10rem]">
          <div className="col-span-6 md:col-span-4  relative hover:scale-110 transitionTheme hover:rotate-[-10deg]">
          <HomeImgSwipper/>
          </div>
          <div className="col-span-6 md:col-span-8 max-sm:justify-start grid items-center justify-center text-center">
            <div className="text-white text-6xl max-sm:text-3xl  drop-shadow-lg  w-full">HOME OF AFRICAN  <TypedReactHooksDemo heroSubTitle={["FABRIC", "BAG", "CUFF LINK"]}/> </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default HomeMain