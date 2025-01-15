import { FileImage } from "lucide-react";
import { Back } from "./Back";
import { Continue } from "./Continue";

export const Third = ({ currentStep, setCurrentStep }) => {
  const nextPage = () => setCurrentStep(currentStep + 1);
  const prevPage = () => setCurrentStep(currentStep - 1);
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
      <div className="flex flex-col gap-1 mt-8 ">
        <div className="flex gap-1">
          <p>Date of birth</p>
          <p className="text-red-700 ">*</p>
        </div>
        <input
          type="date"
          placeholder="--/--/--"
          className="border-solid border-[1px] border-[#cbd5e1] w-[418px] p-[10px] flex items-center rounded-lg"
        />
      </div>
      <div className="flex gap-1 mt-3 ">
        <p>Profile image</p>
        <p className="text-red-700 ">*</p>
      </div>
      <div className="cursor-pointer flex flex-col justify-center items-center w-[418px] h-[180px] min-h-[80px] gap-2 rounded-md bg-[rgba(127,127,127,0.05)] mt-2 ">
        <div className="flex items-center bg-white rounded-full p-2 ">
          <FileImage />
        </div>
        <h4>Add image</h4>
      </div>
      <input hidden type="file" />
      <div className="absolute bottom-52 w-[418px] h-[44px] flex gap-2 ">
        <Back prevPage={prevPage} />
        <Continue label="Continue 3/3" nextPage={nextPage} />
      </div>
    </div>
  );
};
