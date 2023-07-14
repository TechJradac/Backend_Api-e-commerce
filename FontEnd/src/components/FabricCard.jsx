import { BsStar } from "react-icons/bs";
import { GiShoppingBag } from "react-icons/gi";
import { addItem, getTotals,openCart } from "../Features/cartSlice";
import { useDispatch } from "react-redux";

const FabricCard = ({ isshowCase, value: { id, title,price, rating, img, product_url } }) => {
    const dispatch = useDispatch(addItem);

    const onAddItem = ()=>{
      dispatch(addItem({ id, title,img, price}))
    }
    dispatch(getTotals())

  return (
    <div
      className={`h-[20rem] w-[15rem] relative group hover:z-[5] overflow-hidden border-2 rounded-md drop-shadow-2xl ${
        isshowCase && "h-[30rem] border-2"
      }`}
    >
      <img
        src={img}
        alt="fabric"
        className={`hover:scale-110 transitionTheme  w-full h-[80%] ${
          isshowCase && "hover:skew-x-3 h-[100%]"
        }`}
      />

      {!isshowCase && (
        <>
          <div className="backdrop-blur-md font-bold text-2xl  text-amber-600 w-[0%] h-[0%] group-hover:w-[100%] group-hover:h-[82%] flex items-center opacity-0 hover:opacity-[100%] justify-center group-hover:z-[10] transitionTheme gap-5 bg-white/30 z-[-5] absolute top-0 right-0">
            <button
              onClick={() => {
                onAddItem(), dispatch(getTotals());
              }}
              className="bg-white px-2 py-1 active:scale-[95%] rounded-md"
            >
              Buy
            </button>
            <button className="bg-white px-2 py-1 rounded-md active:scale-[95%]">
              <GiShoppingBag className="" />
            </button>
          </div>
          <div className="grid text-center justify-center">
            <p className="text-slate-800 text-2xl">View</p>
            <p className="flex gap-2">
              <span>
                <BsStar className="text-xl" />
              </span>
              <span>
                <BsStar className="text-xl" />
              </span>
              <span>
                <BsStar className="text-xl" />
              </span>
              <span>
                <BsStar className="text-xl" />
              </span>
              <span>
                <BsStar className="text-xl" />
              </span>
              <span>
                <BsStar className="text-xl" />
              </span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default FabricCard;
