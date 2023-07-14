
const Banner = ({val:{img, text}}) => {
  return (
    <div className="drop-shadow-2xl border-slate-50 border-b-[1px] w-full h-[50vh] relative">
        <div className="absolute bg-gradient-to-t from-zinc-950 via-zinc-800 to-zinc-50 opacity-80  w-full h-full  z-5 top-0 left-0"></div>
        <img src={img} alt="" className="w-full h-full object-cover "/>
        <div className="absolute left-[50%] top-[50%] styleText text-7xl text-white">{text}</div>
    </div>
  )
}

export default Banner