import { ChevronRight } from "lucide-react";

export const Continue = ({ label, nextPage }) => {
  return (
    <div className="mt-[134px]">
      <button
        onClick={nextPage}
        className="text-white bg-[#121316] rounded-md flex w-[418px] h-[40px] justify-center items-center gap-1"
      >
        {label}
        <ChevronRight />
      </button>
    </div>
  );
};
