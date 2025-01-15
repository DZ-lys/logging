import React from "react";
import { Input } from "./Input";
import { Continue } from "./Continue";

export const First = ({ currentStep, setCurrentStep }) => {
  const nextPage = () => setCurrentStep(currentStep + 1);
  return (
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
      <div className="flex flex-col gap-4 mt-8 ">
        <Input label="First name" placeholder="Your first name" />
        <Input label="Last name" placeholder="Your last name" />
        <Input label="Username" placeholder="Your username" />
      </div>
      <div className="absolute bottom-52 w-[418px] h-[44px] flex gap-2 ">
        <Continue label="Continue 1/3" nextPage={nextPage} />
      </div>
    </div>
  );
};
