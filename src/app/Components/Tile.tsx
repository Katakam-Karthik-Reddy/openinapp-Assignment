import Image, { StaticImageData } from "next/image";

interface props {
  value: string;
  title: string;
  icon: StaticImageData;
}

const Tile: React.FC<props> = ({ value, title, icon }) => {
  return (
    <div className="h-28 w-[22%] min-w-[14rem] rounded-2xl border-[2px] p-4 ">
      <div className="my-1 flex h-7 w-7 items-center justify-center rounded-3xl bg-green-500">
        <Image src={icon} alt="" className="h-4 w-4" />
      </div>
      <div className="flex flex-col">
        <div className="my-[0.1rem]">
          <p className="text-[10px] font-medium">{title}</p>
        </div>
        <div className="my-[0.1rem] flex flex-row items-end justify-between">
          <p className="text-[18px] font-bold leading-none">{value}</p>
          <p className="h-5 w-10 justify-center rounded-xl bg-green-100 text-center text-[8px] font-medium  leading-[18px] text-green-500">
            +2.5%
          </p>
        </div>
      </div>
    </div>
  );
};
export default Tile;
