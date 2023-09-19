"use client";
import Image from "next/image";
import github_icon from "../../public/images/github_icon.png";
import linkedin_icon from "../../public/images/linkedin_icon.png";
import twitter_icon from "../../public/images/twitter_icon.png";
import discord_icon from "../../public/images/discord_icon.png";
import google_icon from "../../public/images/google_icon.png";
import apple_icon from "../../public/images/apple_icon.png";
import Link from "next/link";
import { signIn } from "next-auth/react";

const Loginpage: React.FC = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center bg-[#F8FAFF] md:flex-row 2xl:flex-row">
      <div className="signin_right_div md:items:end relative my-2 flex h-10 w-[95%] justify-center rounded-md bg-gradient-to-r from-[#4285f4] to-[#286de0] md:h-full md:w-1/2 md:flex-col md:justify-end md:rounded-none md:bg-gradient-to-b 2xl:h-full 2xl:w-1/2 2xl:flex-col 2xl:items-end 2xl:justify-end 2xl:rounded-none 2xl:bg-gradient-to-b">
        <div className="absolute left-0 top-[9px] flex items-center 2xl:static 2xl:h-[10%] 2xl:w-[69%] 2xl:p-14">
          <p className="font-base md: px-6 text-xl text-white md:font-bold 2xl:text-xl 2xl:font-bold">
            LOGO
          </p>
        </div>
        <div className="md:w-[85%]2xl:h-[79%] flex items-center justify-center md:h-[79%] 2xl:w-[85%]">
          <p className="text-2xl font-bold leading-none text-white md:text-[66px] 2xl:text-[66px]">
            Board.
          </p>
        </div>
        <div className="absolute left-0 top-[28rem] flex h-40 w-8 flex-col justify-evenly rounded-md bg-gradient-to-b from-[#4285f4] to-[#286de0] md:static md:ml-auto md:mr-[27%] md:h-[11%] md:w-[55%] md:max-w-[18rem] md:flex-row md:justify-between md:bg-none 2xl:static 2xl:ml-auto 2xl:mr-[27%] 2xl:h-[11%] 2xl:w-[55%] 2xl:max-w-[18rem] 2xl:flex-row 2xl:justify-between 2xl:bg-none">
          <Image
            src={github_icon}
            alt={""}
            className="md:h-11 md:w-11 2xl:h-11 2xl:w-11"
          />
          <Image
            src={twitter_icon}
            alt={""}
            className="md:h-11 md:w-11 2xl:h-11 2xl:w-11"
          />
          <Image
            src={linkedin_icon}
            alt={""}
            className="md:h-11 md:w-11 2xl:h-11 2xl:w-11"
          />
          <Image
            src={discord_icon}
            alt={""}
            className="md:wmd md:h-11 2xl:h-11 2xl:w-11"
          />
        </div>
      </div>
      <div className="flex h-[90%] w-full items-center justify-center md:w-1/2 md:justify-start 2xl:w-1/2 2xl:justify-start">
        <div className="flex w-[25rem] flex-col items-center md:ml-20 md:items-start 2xl:ml-20 2xl:items-start">
          <p className="text-[35px] font-bold">Sign in</p>
          <p className="text-sm font-semibold">Sign in to your account</p>
          <div className="my-8 flex h-8 w-full flex-row justify-between">
            <button
              className="flex h-7 w-[47%] flex-row items-center justify-evenly rounded-lg bg-white text-xs"
              onClick={() => signIn("google")}
            >
              <Image src={google_icon} alt={""} className="h-[15px] w-[15px]" />
              Sign in with Google
            </button>
            <button className="flex h-7 w-[47%] flex-row items-center justify-evenly rounded-lg bg-white text-xs">
              <Image src={apple_icon} alt={""} className="h-[15px] w-[15px]" />
              Sign in with Apple
            </button>
          </div>
          <div className="h-[20rem] rounded-3xl bg-white p-8">
            <p className="text-sm font-semibold">Email address</p>
            <input
              type="text"
              className="my-2 h-10 w-full rounded-lg bg-[#F5F5F5] px-4 text-sm font-semibold"
              defaultValue={"johndoe@gmail.com"}
            />
            <p className="mt-4 text-sm font-semibold">Password</p>
            <input
              type="password"
              className="mt-3 h-10 w-full rounded-lg bg-[#F5F5F5] px-4 text-2xl font-semibold"
              defaultValue={"something"}
            />
            <Link
              href={"#"}
              className="my-4 block text-sm font-medium text-blue-600"
            >
              Forgot password?
            </Link>
            <button className="h-10 w-full rounded-xl bg-[#4285F4] font-semibold text-white">
              Sign in
            </button>
          </div>
          <div className="flex h-12 w-full flex-row items-center justify-center">
            <p className="text-sm text-gray-400">{"Don't have an account?"}</p>
            <p className="text-sm text-blue-600">&nbsp;Register here</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loginpage;
