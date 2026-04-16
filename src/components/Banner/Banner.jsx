import React from "react";
import { IoIosPersonAdd } from "react-icons/io";
import Test from "../Test";

const Banner = () => {
  return (
    <div className="w-10/12 mx-auto text-center space-y-5 mt-14">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
        Friends to keep close in your life
      </h2>
      <p>
        Your parsonal shelf of meaningfuol connectieons. Browse, tend, and
        nurture the <br /> relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white">
        {" "}
        <IoIosPersonAdd />
        Add a Friend
      </button>
      {/* <Test /> */}
    </div>
  );
};

export default Banner;
