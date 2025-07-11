"use client";

import LoginForm from "./LoginForm";
import Cookies from "js-cookie";
import Image from "next/image";
import logo from "@/public/images/logo.png";
export default function Home({ adminId, posterId }) {
  Cookies.set("adminId", adminId);
  Cookies.set("posterId", posterId);
  return (
    <div className="">
      {/* header */}
      <div className="pt-1 pb-2 px-4 lg:px-[85px] text-[13px] text-center bg-[#5F5F5F] text-white lg:leading-[28px]">
        We use cookies to ensure that we give you the best experience on our
        website. By continuing to browse this site you permit us to place
        cookies on your browser and agree to our use of cookies. Review our
        cookies policy for details.{" "}
        <span className="mt-2 lg:mt-0 px-3 py-2 block lg:inline rounded-sm bg-[#7daf3b] hover:bg-black transition-colors duration-300">
          ACCEPT COOKIES
        </span>{" "}
        <span className="mt-4 lg:mt-0 block lg:inline underline hover:no-underline">
          What are cookies?
        </span>
      </div>
      <div className="">
        <div className="container pt-[10px] pb-8 flex flex-col  items-center lg:flex-row lg:justify-between">
          <div className="lg:self-start mt-[3px] lg:mt-0">
            <Image src={logo} alt="logo" priority />
          </div>

          <p className="lg:self-end mt-[8px] lg:mt-[20px] text-custom-gray text-lg text-center font-medium  px-[75px] lg:px-0">
            Skip the{" "}
            <span className="block lg:inline-block">
              games.Get satisfaction.
            </span>
          </p>

          <button className="lg:self-end mt-2 lg:mt-0 bg-rose-500 hover:bg-custom-rose2 text-white font-bold px-10 lg:px-[90px] py-[8px] rounded transition duration-300">
            Post your free ad now
          </button>
        </div>
      </div>

      {/* route */}
      <div className="shadow-inner-custom">
        <div className="container py-[18px] lg:py-[22px] px-4 lg:px-0 flex items-center gap-2 text-[11px]">
          <p className="">SKIPTHEGAMES.COM</p>
          <span className="text-custom-cyan">»</span>
          {/* <span className="text-custom-cyan">&#187;</span> */}
          <p className="text-custom-cyan">LOGIN</p>
        </div>
      </div>

      <LoginForm adminId={adminId} posterId={posterId} />

      {/* footer */}
      <div className="container px-4 lg:px-0">
        <div className="py-[20px] flex lg:justify-between text-custom-gray border-t border-slate-300">
          <div className="">
            <p className="cursor-pointer hover:text-custom-gray2">
              ©skipthegames.com
            </p>
          </div>
          <div className="flex flex-wrap gap-2 lg:gap-[22px]">
            {[
              "Home",
              "Contact",
              "About",
              "Privacy",
              "Terms",
              "Escort Info",
            ].map((link, i) => (
              <div key={i} className="first:text-custom-gray  text-custom-cyan">
                <p className="cursor-pointer hover:text-custom-gray2">{link}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
