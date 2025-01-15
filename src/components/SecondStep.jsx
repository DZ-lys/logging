import { Continue } from "./Continue";
import { Input } from "./Input";
import { Back } from "./Back";

export const Second = ({ currentStep, setCurrentStep }) => {
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
      <div className="flex flex-col gap-4 mt-8 ">
        <Input label="Email" placeholder="example@gmail.com" />
        <Input label="Phone number" placeholder="your phone number" />
        <Input label="Password" placeholder="password" />
        <Input label="Confirm password" placeholder="password" />
      </div>
      <div className="absolute bottom-52 w-[418px] h-[44px] flex gap-2 ">
        <Back prevPage={prevPage} />
        <Continue label="Continue 2/3" nextPage={nextPage} />
      </div>
    </div>
  );
};
