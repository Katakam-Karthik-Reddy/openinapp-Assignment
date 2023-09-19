import Link from "next/link";
import Image from "next/image";
import dashboard_icon from ".././../../public/images/dashboard_icon.png";
import transactions_icon from ".././../../public/images/transaction_icon.png";
import schedules_icon from ".././../../public/images/schedule_icon.png";
import users_icon from ".././../../public/images/user_icon.png";
import setting_icon from ".././../../public/images/setting_icon.png";

interface props {
  sidebarvisibility: boolean;
  setsidebarvisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar: React.FC<props> = ({
  sidebarvisibility,
  setsidebarvisibility,
}) => {
  return (
    <div
      className={`${
        sidebarvisibility === false ? "hidden" : "flex flex-col"
      } x-999 absolute ml-4 mt-4 h-[95%] w-auto rounded-2xl bg-[#3F84F7] p-12 tracking-wider 2xl:relative 2xl:m-8 2xl:flex 2xl:h-[95%] 2xl:w-[20rem] 2xl:flex-col`}
    >
      <div className="flex flex-row justify-between">
        <h2 className="my-1 text-[2rem] font-bold text-white">Board.</h2>
        <p
          className="cursor-pointer text-xs font-light text-gray-300 2xl:hidden"
          onClick={() => {
            setsidebarvisibility(false);
          }}
        >
          &#9587;
        </p>
      </div>

      <div className="my-12 text-white">
        <div className="my-8 flex flex-row items-center justify-start">
          <Image src={dashboard_icon} alt="" className="h-4 w-4" />
          <Link href={""} className="ml-6 text-lg font-medium">
            Dashboard
          </Link>
        </div>
        <div className="my-8 flex flex-row items-center justify-start">
          <Image src={transactions_icon} alt="" className="h-4 w-4" />
          <Link href={""} className="ml-6 font-thin">
            Transactions
          </Link>
        </div>
        <div className="my-8 flex flex-row items-center justify-start">
          <Image src={schedules_icon} alt="" className="h-4 w-4" />
          <Link href={""} className="ml-6 font-thin">
            Schedules
          </Link>
        </div>
        <div className="my-8 flex flex-row items-center justify-start">
          <Image src={users_icon} alt="" className="h-4 w-4" />
          <Link href={""} className="ml-6 font-thin">
            Users
          </Link>
        </div>
        <div className="my-8 flex flex-row items-center justify-start">
          <Image src={setting_icon} alt="" className="h-4 w-4" />
          <Link href={""} className="ml-6 font-thin">
            {" "}
            Settings
          </Link>
        </div>
      </div>
      <div className="absolute bottom-10 flex flex-col text-white">
        <Link href={""} className="font-think my-2 text-sm">
          Help
        </Link>
        <Link href={""} className="my-2 text-sm font-thin">
          Contact Us
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
