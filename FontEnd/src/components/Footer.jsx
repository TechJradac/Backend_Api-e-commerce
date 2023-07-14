import { Link, NavLink } from "react-router-dom";
import { logo } from "../../public/images";
import {AiOutlineMail} from "react-icons/ai"
import {TfiInstagram} from "react-icons/tfi";


const Footer = ({value:{titles, links}}) => {
  return (
    <div>
      
         <div className=" bg-slate-950 text-slate-100 textFont ">
      <div className="container px-[10rem] py-5">
        <div className="grid grid-cols-12  justify-between mb-10">
          <div className="col-span-4">
            <p className="text-[#dc2626] font-bold text-4xl textFont tracking-wide">BART-HANNAH</p>
            <p className="tracking-[0.1rem] font-thin text-2xl">Enterprice</p>
            <img src={logo} alt="logo-footer" className="h-[9rem]" />
          </div>
          <div className="container col-span-8 mx-auto  grid gap-1">
          <div className="flex items-center justify-center 
          font-semibold text-slate-100 pt-3  ">
              {
                  titles.map((title,key)=>{
                      return(
                          <div className=" w-[15rem] max-md:w-[7rem] " key={key}>
                          <h1  className="">{title.title}</h1>

                          </div>   
                      )
                  })
              }
          </div>
          <div className="flex  justify-center text-slate-300   ">
              
              {
                  links.map((link, i)=>{
                      return(
                          <ul key={i} className=" w-[15rem]  max-md:w-[7.5rem] ">
                              {
                                  link.map((value,index)=>(
                                      <li key={index} className="hover:text-slate-50 transition-all ease-in-out duration-500 
                                      cursor-pointer hover:translate-x-[0.5rem] p-1">{value.link}</li>
                                  ))
                              }

                          </ul>
                      )
                  })
              }
              
          </div>
          </div>

        </div>

        <div className="flex justify-end gap-[15rem]">
          <div className=" flex items-center gap-2">
            <span><AiOutlineMail/></span>
            <span>barthannah001@gmail.com</span>
          </div>
          <div className="flex gap-2 items-center" >
            <Link><TfiInstagram/></Link>
            <span>barthannah.gh</span>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Footer;
