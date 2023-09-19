"use client";
import { Dispatch, SetStateAction, useState } from "react";
import Basicdetails from "../Components/Basicdetails";
import Socialdetails from "./Socialdetails";
import { type } from "os";
interface props {
  setaddprofilevisibility: React.Dispatch<React.SetStateAction<boolean>>;
  setname: Dispatch<SetStateAction<string>>;
  setemail: Dispatch<SetStateAction<string>>;
  setnumber: Dispatch<SetStateAction<string>>;
  setinstagram: Dispatch<SetStateAction<string>>;
  setyoutube: Dispatch<SetStateAction<string>>;
  setdata: Function;
}
const Addprofilepopup: React.FC<props> = ({
  setaddprofilevisibility,
  setname,
  setemail,
  setnumber,
  setinstagram,
  setyoutube,
  setdata,
}) => {
  const [activeview, setActiveview] = useState("Basic");

  return (
    <div className="h-auto w-[31rem] rounded-2xl bg-white">
      <div className="flex h-14 w-full flex-row items-center justify-between border-b-[1px] p-5">
        <p className="text-lg font-bold">Add New Profile</p>
        <p
          className="text-xs font-light text-gray-300"
          onClick={() => setaddprofilevisibility(false)}
        >
          &#9587;
        </p>
      </div>
      <div className="flex h-20 w-full flex-row items-center">
        <div className="mx-auto flex w-[40%] flex-col items-center">
          <p className="my-2 text-sm font-semibold">Basic</p>
          <div
            className={`h-1 w-full rounded-md ${
              activeview === "Basic" ? "bg-blue-500" : "bg-gray-300"
            } `}
          ></div>
        </div>
        <div className="mx-auto flex w-[40%] flex-col items-center">
          <p className="my-2 text-sm font-semibold">Social</p>
          <div
            className={`h-1 w-full rounded-md ${
              activeview === "Social" ? "bg-blue-500" : "bg-gray-300"
            } `}
          ></div>
        </div>
      </div>
      <div className={`${activeview === "Basic" ? "flex" : "hidden"}`}>
        <Basicdetails
          setname={setname}
          setemail={setemail}
          setnumber={setnumber}
        />
      </div>
      <div className={`${activeview === "Social" ? "flex" : "hidden"}`}>
        <Socialdetails setinstagram={setinstagram} setyoutube={setyoutube} />
      </div>

      <div className="mt-6 flex h-[5rem] w-full items-center justify-end rounded-b-lg border-t-[1px]">
        <button
          className={`mr-4 h-8 w-16 rounded-md border-[1px] border-gray-400 text-xs font-semibold text-black ${
            activeview === "Basic" ? "hidden" : "block"
          }`}
          onClick={() => {
            setActiveview("Basic");
          }}
        >
          Back
        </button>
        <button
          className="mr-4 h-8 w-16 rounded-md bg-blue-500 text-xs text-white"
          onClick={() => {
            setActiveview("Social");
            activeview === "Social" ? setdata() : "";
          }}
        >
          {activeview === "Social" ? "Done" : "Next"}
        </button>
      </div>
    </div>
  );
};
export default Addprofilepopup;
