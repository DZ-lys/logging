export const Input = ({ label, placeholder }) => {
  return (
    <div>
      <div className="flex gap-1">
        <p>{label}</p>
        <p className="text-red-700 ">*</p>
      </div>
      <input
        className="border-solid border-[1px] border-[#cbd5e1] w-[418px] p-[12px] flex items-center justify-center rounded-lg "
        placeholder={placeholder}
      />
    </div>
  );
};
