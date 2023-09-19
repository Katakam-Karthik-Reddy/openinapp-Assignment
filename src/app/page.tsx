"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "./Components/Sidebar";
import Chart from "./Components/Chart";
import Addprofilepopup from "./Components/Addprofilepopup";
import Image from "next/image";
import notification_icon from "../../public/images/notification_icon.png";
import search_icon from "../../public/images/Search icon.png";
import phone_icon from "../../public/images/phone.png";
import email_icon from "../../public/images/mail.png";
import youtube_icon from "../../public/images/youtube.png";
import instagram_icon from "../../public/images/instagram.png";
import { signOut } from "next-auth/react";
import Doughnutgraph from "./Components/Doughnutgraph";
import { useSession } from "next-auth/react";
import camara_icon from "../../public/images/camara_icon.png";
import transcation_icon from "../../public/images/transcationicon.png";
import like_icon from "../../public/images/like_icon.png";
import user_icon from "../../public/images/user_icon.png";

function getdata(setData: React.Dispatch<React.SetStateAction<null>>) {
  const apiUrl = "https://openinapp-assignment-umber.vercel.app/api/data";
  fetch(apiUrl)
    .then((response) => response.json())
    .then((responseData) => {
      setData(responseData["data"]);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

const Homepage: React.FC = () => {
  const [addprofilevisibility, setaddprofilevisibility] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [instagram, setinstagram] = useState("");
  const [youtube, setyoutube] = useState("");
  const [sidebarvisibility, setsidebarvisibility] = useState<boolean>(false);
  const [profilevisibility, setprofilevisibility] = useState<boolean>(false);
  function setdata() {
    setprofilevisibility(true);
    setaddprofilevisibility(false);
  }
  const session = useSession();
  const [data, setData] = useState(null);
  const [loadingdata, setloadingdata] = useState(false);
  useEffect(() => {
    getdata(setData);
  }, []);
  return (
    <div className="relative h-full w-full bg-[#F8FAFF]">
      {data ? (
        <>
          <div className="flex h-screen bg-[#F8FAFF] md:h-screen 2xl:mx-auto 2xl:h-screen 2xl:w-[75%] 2xl:flex-row 2xl:bg-[#F8FAFF]  2xl:p-3">
            <Sidebar
              sidebarvisibility={sidebarvisibility}
              setsidebarvisibility={setsidebarvisibility}
            />
            <div className="flex h-full w-full flex-col 2xl:m-8 2xl:h-[95%] 2xl:w-full">
              <div className="mx-6 my-4 flex h-6 items-center justify-between 2xl:w-[95%]">
                <div className="flex flex-row items-center">
                  <div
                    className="mr-2 flex h-6 w-8 cursor-pointer items-center justify-center rounded-md bg-[#3F84F7] 2xl:hidden"
                    onClick={() => setsidebarvisibility(true)}
                  >
                    <span className="">&#9776;</span>
                  </div>
                  <h1 className="text-[1.3rem] text-xl font-bold tracking-wider">
                    Dashboard
                  </h1>
                </div>
                <div className="flex items-center">
                  <div className="flex items-center 2xl:relative">
                    <input
                      type="text"
                      placeholder="Search"
                      className="h-8 w-28 rounded-lg px-4 text-xs font-[1px] md:w-40 2xl:w-48"
                    />
                    <Image
                      src={search_icon}
                      alt=""
                      className="2xl:absolute 2xl:right-[30px] 2xl:top-[10px]"
                    />
                  </div>
                  <Image
                    src={notification_icon}
                    alt=""
                    className="mx-4 h-5 w-4"
                  />
                  <Image
                    src={session?.data?.user?.image!}
                    alt="usericon"
                    width={500}
                    height={500}
                    className="h-7 w-7 rounded-3xl"
                    onClick={() => {
                      signOut();
                    }}
                  />
                </div>
              </div>
              <div className="mx-6 flex flex-row flex-wrap justify-between gap-4 2xl:justify-between 2xl:gap-0">
                <div className="h-28 w-[22%] min-w-[14rem] rounded-2xl border-[2px] p-4 ">
                  <div className="my-1 flex h-7 w-7 items-center justify-center rounded-3xl bg-green-500">
                    <Image src={camara_icon} alt="" className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <div className="my-[0.1rem]">
                      <p className="text-[10px] font-medium">Total Revenues</p>
                    </div>
                    <div className="my-[0.1rem] flex flex-row items-end justify-between">
                      <p className="text-[18px] font-bold leading-none">
                        {"$" + data!["cardsdata"]["totalRevenues"]}
                      </p>
                      <p className="h-5 w-10 justify-center rounded-xl bg-green-100 text-center text-[8px] font-medium  leading-[18px] text-green-500">
                        +2.5%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-28 w-[22%] min-w-[14rem] rounded-2xl border-[2px] p-4 ">
                  <div className="my-1 flex h-7 w-7 items-center justify-center rounded-3xl bg-[#DEBF85]">
                    <Image src={transcation_icon} alt="" className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <div className="my-[0.1rem]">
                      <p className="text-[10px] font-medium">
                        Total Transactions
                      </p>
                    </div>
                    <div className="my-[0.1rem] flex flex-row items-end justify-between">
                      <p className="text-[18px] font-bold leading-none">
                        {data!["cardsdata"]["totalTransactions"]}
                      </p>
                      <p className="h-5 w-10 justify-center rounded-xl bg-green-100 text-center text-[8px] font-medium  leading-[18px] text-green-500">
                        +2.5%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-28 w-[22%] min-w-[14rem] rounded-2xl border-[2px] p-4 ">
                  <div className="my-1 flex h-7 w-7 items-center justify-center rounded-3xl bg-[#ECA4A4]">
                    <Image src={like_icon} alt="" className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <div className="my-[0.1rem]">
                      <p className="text-[10px] font-medium">Total Likes</p>
                    </div>
                    <div className="my-[0.1rem] flex flex-row items-end justify-between">
                      <p className="text-[18px] font-bold leading-none">
                        {data!["cardsdata"]["totallikes"]}
                      </p>
                      <p className="h-5 w-10 justify-center rounded-xl bg-green-100 text-center text-[8px] font-medium  leading-[18px] text-green-500">
                        +2.5%
                      </p>
                    </div>
                  </div>
                </div>
                <div className="h-28 w-[22%] min-w-[14rem] rounded-2xl border-[2px] p-4 ">
                  <div className="my-1 flex h-7 w-7 items-center justify-center rounded-3xl bg-[#A9B0E5]">
                    <Image src={user_icon} alt="" className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <div className="my-[0.1rem]">
                      <p className="text-[10px] font-medium">Total Users</p>
                    </div>
                    <div className="my-[0.1rem] flex flex-row items-end justify-between">
                      <p className="text-[18px] font-bold leading-none">
                        {data!["cardsdata"]["totalusers"]}
                      </p>
                      <p className="h-5 w-10 justify-center rounded-xl bg-green-100 text-center text-[8px] font-medium  leading-[18px] text-green-500">
                        +2.5%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-6 my-6 flex min-h-[21.5rem] max-w-full flex-col overflow-x-auto rounded-2xl border-[2px] border-gray-300 p-8 2xl:w-[95%]">
                <div className="flex w-full flex-row justify-between">
                  <div>
                    <p className="mb-2 font-bold leading-none">Activities</p>
                    <p className="text-sm font-light">May-June 2021</p>
                  </div>
                  <div className="flex w-32 flex-row justify-between">
                    <div className="flex w-[3.25rem] flex-row items-center justify-between">
                      <div className="h-2 w-2 rounded-md bg-red-300"></div>
                      <p className="text-xs">Guest</p>
                    </div>
                    <div className="flex w-[2.6rem] flex-row items-center justify-between">
                      <div className="h-2 w-2 rounded-md bg-green-300"></div>
                      <p className="text-xs">User</p>
                    </div>
                  </div>
                </div>
                <Chart bardata={data["bardata"]} />
              </div>
              <div className="mx-6 mb-8 mt-4 flex h-full flex-row justify-between">
                <div className="flex h-full w-[48%] flex-col items-center justify-center rounded-2xl border-[2px] border-gray-300">
                  <div className="flex w-[80%] flex-row justify-between">
                    <p className="mb-2 font-bold leading-none">Top Products</p>
                    <p className="text-xs font-light">May-June 2021</p>
                  </div>
                  <div className="flex h-[70%] w-full flex-row items-center justify-evenly">
                    <Doughnutgraph doughnutdata={data["doughnutdata"]} />
                    <div className="w-[40%]">
                      <div>
                        <div className="flex flex-row items-center">
                          <div className=" h-2 w-2 rounded-md bg-green-300"></div>
                          <p className="ml-1 text-xs">Basic Tees</p>
                        </div>
                        <div className="flex flex-row items-center">
                          <div className="h-2 w-2 rounded-md bg-white"></div>
                          <p className="ml-1 text-xs">
                            {data["doughnutdata"]["basictees"] + "%"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-row items-center">
                          <div className=" h-2 w-2 rounded-md bg-yellow-200"></div>
                          <p className="ml-1 text-xs">Custom Short pants</p>
                        </div>
                        <div className="flex flex-row items-center">
                          <div className=" h-2 w-2 rounded-md bg-white"></div>
                          <p className="ml-1 text-xs">
                            {data["doughnutdata"]["customshortpants"] + "%"}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex flex-row items-center">
                          <div className=" h-2 w-2 rounded-full bg-red-300"></div>
                          <p className="ml-1 text-xs">Super Hoodies</p>
                        </div>
                        <div className="flex flex-row items-center">
                          <div className=" h-2 w-2 rounded-md bg-white"></div>
                          <p className="ml-1 text-xs">
                            {data["doughnutdata"]["superHoodies"] + "%"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-full w-[48%] items-center justify-center rounded-2xl border-[2px] border-gray-300">
                  <div
                    className={` flex-col items-center justify-center ${
                      profilevisibility === false ? "flex" : "hidden"
                    }`}
                  >
                    <button
                      className="mb-4 flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-full bg-gray-200"
                      onClick={() => setaddprofilevisibility(true)}
                    >
                      <p className="text-6xl font-light text-gray-500">&#43;</p>
                    </button>
                    <p className="text-sm font-semibold text-gray-400">
                      Add Profile
                    </p>
                  </div>
                  <div
                    className={`flex h-full w-full flex-col p-10 ${
                      profilevisibility === true ? "flex" : "hidden"
                    }`}
                  >
                    <div className="flex w-full justify-start text-xl font-bold">
                      {name}
                    </div>
                    <div className="mt-12 flex flex-wrap justify-between">
                      <div className="w-[47%]">
                        <div className="flex flex-row items-center">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100">
                            <Image
                              src={phone_icon}
                              alt={"phone_icon"}
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="my-2 ml-2 flex h-8 w-1/2 items-center underline">
                            {number}
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-100">
                            <Image
                              src={email_icon}
                              alt={"email_icon"}
                              className="h-3 w-4"
                            />
                          </div>
                          <div className="my-2 ml-2 flex h-8 w-1/2 items-center underline">
                            {email}
                          </div>
                        </div>
                      </div>
                      <div className="w-[47%]">
                        <div className="flex flex-row items-center">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                            <Image
                              src={instagram_icon}
                              alt={"instagram_icon"}
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="my-2 ml-2 flex h-8 w-1/2 items-center underline">
                            {instagram}
                          </div>
                        </div>
                        <div className="flex flex-row items-center">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-100">
                            <Image
                              src={youtube_icon}
                              alt={"youtube_icon"}
                              className="h-4 w-4"
                            />
                          </div>
                          <div className="my-2 ml-2 flex h-8 w-1/2 items-center underline">
                            {youtube}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`absolute left-0 top-0 h-screen w-screen items-center justify-center bg-[rgb(20,20,20,0.5)] ${
              addprofilevisibility === true ? "flex" : "hidden"
            }`}
          >
            <Addprofilepopup
              setaddprofilevisibility={setaddprofilevisibility}
              setname={setname}
              setemail={setemail}
              setnumber={setnumber}
              setinstagram={setinstagram}
              setyoutube={setyoutube}
              setdata={setdata}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default Homepage;
