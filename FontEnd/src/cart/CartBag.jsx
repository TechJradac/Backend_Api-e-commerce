import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import {emptyBag} from "../../public/images"

const CartBag = () => {
  return (
    <div className="flex items-center justify-center pt-[8rem] gap-[3rem]">
        <div className="">
            <img src={emptyBag} alt={`img/emptybag`}  className="w-[13rem]"/>
        </div>
        <div className="flex items-center gap-5 bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded 
        active:scale-90 cursor-pointer translate-all ease-in-out duration-200">
            <span>
              <ArrowLeftIcon className="w-7"/>
            </span>
            <span className="text-sm">Back To Bart-hannah Store</span>
        </div>
    </div>
  )
}

export default CartBag