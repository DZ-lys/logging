export const Input = ({ label, placeholder }) => {
  return (
    <div>
      <p>{label}</p>
      <input
        className="border-solid border-[1px] border-[#cbd5e1] p-[12px] flex items-center justify-center rounded-lg "
        placeholder={placeholder}
      />
    </div>
  );
};
