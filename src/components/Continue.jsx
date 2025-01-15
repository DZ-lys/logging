import { ChevronRight } from "lucide-react";

export const Continue = ({ label, nextPage }) => {
  return (
    <button
      onClick={nextPage}
      className="text-white bg-[#121316] rounded-md flex w-[100vw] px-3 py-[10px] justify-center items-center gap-1"
    >
      {label}
      <ChevronRight />
    </button>
  );
};
