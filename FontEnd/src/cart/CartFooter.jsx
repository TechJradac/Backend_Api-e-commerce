
const CartFooter = ({totalPrice}) => {
    return (
      <div className=" absolute bottom-0 w-full  pr-10 max-md:pr-0 md:scale-x-90 max-md:scale-x-95  md:px-3">
          <div className="flex justify-between font-semibold">
              <span>SUBTOTAL</span>
              <span className="">${totalPrice}</span>
          </div>
          <div className="text-center text-slate-800 ">
              Taxes and Shipping Will Calculate At Shipping
          </div>
          <div className="bg-slate-900 py-2 ">
              <button className="w-full  text-slate-100  active:scale-95 transition-all ease-in-out  ">
                Check Out
              </button>
          </div>
      </div>
    )
  }
  
  export default CartFooter