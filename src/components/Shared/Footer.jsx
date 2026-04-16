import React from "react";
import FooterLogo from "../../assets/logo-xl.png";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-[#2c483f]  text-center text-white space-y-5 mt-5 ">
      <h1 className="text-6xl md:text-7xl lg:text-7xl font-semibold text-center pt-16 pb-2 ">
        <span className="font-bold">Keen</span>Keeper
      </h1>
      <p className="text-gray-400 mx-5">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <p className="text-2xl font-bold">Social Links</p>
      <div className="flex gap-4 text-black justify-center items-center">
        <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-purple-500 hover:text-white duration-200">
          <FaInstagramSquare />
        </div>
        <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-purple-500 hover:text-white duration-200">
          <FaFacebookSquare />
        </div>
        <div className="p-3 bg-gray-300 rounded-full cursor-pointer hover:bg-purple-500 hover:text-white duration-200">
          <FaXTwitter />
        </div>
      </div>
      <div className="flex w-11/12 mx-auto flex-col">
        <div className="divider after:bg-gray-300 before:bg-gray-300"></div>
      </div>
      <div className="flex justify-center w-10/12 mx-auto pb-3">
        <div className="flex gap-3  text-center">
          <a className="hover:underline text-gray-400">Privacy Policy</a>
          <a className="hover:underline text-gray-400">Terms of Service</a>
          <a className="hover:underline text-gray-400">Cookies</a>
        </div>
      </div>
      <div>
        <p className="text-gray-400 pb-10">
          © 2026 KeenKeeper. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
