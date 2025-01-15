export const Finished = ({ currentStep, setCurrentStep }) => {
  const nextPage = () => setCurrentStep(currentStep + 1);
  return (
    <div className="bg-white rounded-lg w-[480px] p-[36px] flex flex-col justify-center gap-[5px] ">
      <div className="w-[60px] h-[60px] ">
        <img src="./Main1.svg" alt="" />
      </div>
      <h3 className="text-[#202124] font-semibold tracking-[-0.78px] text-[32px] ">
        You're All Set 🔥
      </h3>
      <p className="text-[#8e8e8e] font-normal ">
        We have received your submission. Thank you!
      </p>
    </div>
  );
};
