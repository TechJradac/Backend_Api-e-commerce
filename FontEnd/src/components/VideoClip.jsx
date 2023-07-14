
const VideoClip = ({video}) => {
  return (
    <div className="w-full h-[25rem] relative">
      <div className="w-full h-full absolute bg-slate-950 opacity-70 z-10">

      </div>
      <div className=" opacity-70 absolute z-20 right-[5rem] bottom-[5rem] text-white grid gap-4 bg-black p-[3rem]  rounded-md">
        <span className="text-4xl font-bold">Shop</span>
        <span className="text-4xl underline ">With Us</span>
        <span className="text-muted text-slate-500">We Offer The Best Of The Best</span>
      </div>
       <video src={video} autoPlay muted loop type="video/mp4" 
       className="object-cover w-full h-full max-h-[100%] " />
    </div>
  )
}

export default VideoClip