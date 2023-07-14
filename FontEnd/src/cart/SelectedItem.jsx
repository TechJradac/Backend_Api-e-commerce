import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { removeItem, increaseQTY,decreaseQTY, getTotals } from "../Features/cartSlice";


const SelectedItem = ({
  values: { id, title, text, rating, btn, img, price, quantity },
}) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center my-5 pl-2 max-md:scale-90">
      <div className="flex gap-5  max-md:flex-col items-center justify-center">
        <div
          className={`bg-gradient-to-t cursor-pointer relative rounded-md  hover:scale-110 transitionTheme`}
        >
          <img src={img} alt={`img/${title}`} className="w-[10rem] h-[6rem] max-md:scale-90" />
          <span className="absolute top-2 right-5 bg-slate-200 p-[2px] grid items-center justify-center  text-sm rounded">
            ${price}
          </span>
        </div>

        <div className="w-[10rem] text-center">
          <p className="font-semibold text-lg text-slate-800 md:text-md">{title}</p>
          <div className="flex justify-between pl-5 items-center">
            <button
              className="bg-slate-500 rounded-sm cursor-pointer transition-all ease-in-out duration-400 active:scale-90
            shadow-md shadow-slate-700"
            onClick={()=>{dispatch(decreaseQTY({id})), dispatch(getTotals()) }}
            >
              <MinusIcon className="w-5 text-slate-100 " />
            </button>
            <button>{quantity}</button>
            <button
              className="bg-slate-500 rounded-sm cursor-pointer transition-all ease-in-out duration-400 active:scale-90
            shadow-md shadow-slate-700"
            onClick={()=>{dispatch(increaseQTY({id})), dispatch(getTotals())}}
            >
              <PlusIcon className="w-5 text-slate-100 " />
            </button>
          </div>
        </div>
      </div>

      <div className="flex gap-[5rem]">
        <div className="max-md:hidden">${price}</div>
        <button type="button" onClick={()=>dispatch(removeItem({id}))}>
          <TrashIcon className="w-7" />
        </button>
      </div>
    </div>
  );
};

export default SelectedItem;
