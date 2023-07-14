import CartBag from "./CartBag";
import CartFooter from "./CartFooter";
import CartHeader from "./CartHeader";

import { selectCartState } from "../Features/cartSlice";
import { useSelector } from "react-redux";
import { selectTotalPrice, selectSelectedItems } from "../Features/cartSlice";
import SelectedItems from "./SelectedItems";


const Cart = () => {
  const cartState = useSelector(selectCartState);
  const ifItemsSelected = useSelector(selectSelectedItems);
  const totalPrice = useSelector(selectTotalPrice);
  console.log(cartState)
  return (
    <div
      className={
        cartState
          ? `fixed top-0 right-0  left-0 z-[1500] opacity-100 filter backdrop-blur-lg bg-white/10 cart-transition-theme 
      h-screen w-screen overflow-y-hidden `
          : "z-[0] fixed opacity-0  w-[0px] h-0 cart-transition-theme  "
      }
    >
      <div
        className={
          cartState
            ? "right-0 fixed w-[40%] max-md:w-screen   md:w-[50rem] h-screen filter backdrop-blur-lg bg-white/90 drop-shadow-2xl  cart-transition-theme opacity-100 "
            : "opacity-0 right-0 fixed w-[0px] z-[0] h-[0px] cart-transition-theme"
        }
      >
        <CartHeader   totalPrice={totalPrice}/>
        <div className="overflow-y-scroll h-[70%]  md:ml-[5rem]  removeScrollBar">
          {ifItemsSelected.length <= 0 ? <CartBag /> : <SelectedItems />}
        </div>

        <CartFooter totalPrice={totalPrice} />
      </div>
    </div>
  );
};

export default Cart;
