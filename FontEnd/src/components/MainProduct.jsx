import { FabricCard } from ".";

const MainProduct = ({
  images: { title, items },
  showcase: { items: showCases },
}) => {
  return (
    <div className="flex gap-10 justify-between container mx-auto px-[10rem] mt-20  mb-20">
      <div className=" grid gap-10">
        {showCases.map((item, key) => (
          <FabricCard key={key} value={item} isshowCase />
        ))}
      </div>
      <div className="">
        <div className="mb-5">
          <p className="text-2xl font-bold text-[#dc2626]">All Fabrics</p>
          <p className="text-5xl font-thin text-slate-800">Versatile Fabrics For Occasions</p>
        </div>
        <div className="grid grid-cols-4 gap-20  flex-wrap">
          {items.map((item, key) => (
            <FabricCard key={key} value={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainProduct;
