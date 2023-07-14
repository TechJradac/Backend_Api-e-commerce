import { Link } from "react-router-dom"
import { GiShoppingBag } from 'react-icons/gi';
import { addItem, getTotals,openCart } from "../Features/cartSlice";
import { useDispatch } from "react-redux";

const ItemCard = ({value:{id, img, title, text, rating,btn,price, color,product_url, type}}) => {
  // we are still working on the random number animation 
  
  let randomNumber =Math.floor(Math.random() * (100 -50)) + 50 ; 
  let sign = Math.random() < 0.5 ? "-" : "";
  console.log(sign)
  console.log(randomNumber);


  const dispatch = useDispatch(addItem);

  const onAddItem = ()=>{
    dispatch(addItem({ id, title, text, rating, btn, img, price, color }))
  }
  dispatch(getTotals())

  let radomRotate = `hover:-rotate-[${randomNumber}deg]`;
  return (
    <div className={`w-[20rem] h-[25rem] relative group hover:z-[5] drop-shadow-2xl rounded-md overflow-hidden border-2 ${(type == 'topSale') && "border-none rounded-md overflow-hidden "} overflow-hidden` }>
        <Link to={product_url}>
          <div className={`w-full overflow-hidden h-[90%] ${(type == 'topSale') && 'h-[100]'}`}>
            <img src={img} alt={title} className={`h-[90%] w-full hover:scale-110 transitionTheme ${(type == 'topSale') && radomRotate}`}/>
          </div>
        </Link>
        {
          (type != 'topSale') &&(
            <Link to={product_url}>
              <div className="text-lg textFont tracking-wide text-center font-medium text-slate-900 hover:text-slate-500" >{text}</div>
            </Link>
          )
        }
        <div className="backdrop-blur-md font-bold text-2xl  text-amber-600 w-[0%] h-[0%] group-hover:w-[100%] group-hover:h-[82%] flex items-center justify-center group-hover:z-[10] transitionTheme gap-5 bg-white/30 z-[-5] absolute top-0 right-0">
          <button 
          onClick={()=>{onAddItem(),dispatch(getTotals())}}
          className="bg-white px-2 py-1 active:scale-[95%] rounded-md">
            Buy
          </button>
          <button className="bg-white px-2 py-1 rounded-md active:scale-[95%]">
            <GiShoppingBag className=""/>
          </button>
        </div>
    </div>
  )
}

export default ItemCard