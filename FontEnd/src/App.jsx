import { HomePage, AboutPage, AllBags, AllFabric, AllCufLink } from "./Pages";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./components";
import { clothe_17, cuff_link_Banner, ladies_bag_21 } from "../public/images";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {footerAPI} from "../data/data"
import Cart from "./cart/Cart";
import { Toaster } from "react-hot-toast";
import { selectCartState } from "./Features/cartSlice";
import { useSelector } from "react-redux";

function App() {
  const [showMenu, setMenu] = useState(false);
  const [getWidth , setWidth] = useState(window.innerWidth);
  const cartState = useSelector(selectCartState);

  useState(()=>{
    setWidth(window.innerWidth);
  }, [getWidth])


  return (
    <div className={`w-screen relative ${cartState && "hide-scrollbar"}`}>
          <Toaster position="top-center" reverseOrder={false}/>
      <Cart/>
      {
         (getWidth <= 640) && (
          <div className=" w-[10rem] h-[10rem] bg-black z-500 ">
          {
           
          showMenu ? (
            <button onClick={() => setMenu(true)} className="">
              <AiOutlineMenu />
            </button>
          ) : (
            <button onClick={() => setMenu(false)}>
              <AiOutlineClose />
            </button>
          )}
        </div>
         )
      }
     

      <div className="">
      <Header showMenu={showMenu}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact_us" element={<Footer />} />
        <Route
          path="/all_fabrics"
          element={
            <AllFabric val={{ img: clothe_17, text: "AFRICAN PRINT" }} />
          }
        />
        <Route
          path="/all_bags"
          element={
            <AllBags val={{ img: ladies_bag_21, text: "BAGS & PURSE" }} />
          }
        />
        <Route
          path="/all_cuffLink"
          element={
            <AllCufLink val={{ img: cuff_link_Banner, text: "CUFF LINK" }} />
          }
        />
      </Routes>

      <Footer value={footerAPI}/>
      </div>

  
    </div>
  );
}

export default App;
