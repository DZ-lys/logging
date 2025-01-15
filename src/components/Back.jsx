import { ChevronLeft } from "lucide-react";

export const Back = ({ prevPage }) => {
  return (
    <button
      onClick={prevPage}
      className="border-solid border-[#cbd5e1] border-[1px] flex justify-center items-center px-8 py-5 rounded-md "
    >
      <ChevronLeft />
      Back
    </button>
  );
};
