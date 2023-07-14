import { ChevronDoubleLeftIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { closeCart, clearItems } from "../Features/cartSlice";

const CartHeader = ({totalPrice}) => {
  const dispatch = useDispatch();
  
  return (
    <div className="bg-white w-full  md:scale-100  flex justify-between px-5 py-5 pr-10">
      <div className="flex gap-2">
        <div>
          <button type="button" onClick={() => dispatch(closeCart())}>
            <ChevronDoubleLeftIcon className="w-6 cursor-pointer active:scale-110 active:text-white/90 transition-all ease-in-out duration-200" />
          </button>
        </div>
        <div className="flex gap-2">
          Your Cart
          <span> ${totalPrice}</span>
        </div>
      </div>
      <div>
        <button type="button" onClick={()=>dispatch(clearItems())}>
          <TrashIcon className="w-7 cursor-pointer active:scale-110 transition-all ease-in-out duration-200 " />
        </button>
      </div>
    </div>
  );
};

export default CartHeader;
