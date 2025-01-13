"use client";

import { Input } from "@/components/Input";

export default function Home() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white flex w-[480px] h-[655px] p-[32px] flex-col items-start flex-shrink-0 rounded-lg ">
        <div className="w-[60px] h-[60px] ">
          <img src="./Main1.svg" alt="" />
        </div>
        <h5 className="text-[#202124] text-[26px] font-semibold tracking-[-0.78px] ">
          Join Us! 😎
        </h5>
        <p className="text-[#8e8e8e] font-normal text-[18px] tracking-[0.5px] ">
          Please provide all current information accurately.
        </p>
        <div>
          <Input label="First name" placeholder="Your first name" />
        </div>
      </div>
    </div>
  );
}
