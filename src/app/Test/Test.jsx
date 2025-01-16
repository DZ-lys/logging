import { useState } from "react";

const [imageUrl, setImageUrl] = useState("");

const onFileUpload = (e) => {
  const file = e.target.files[0];
  const imageUrl = URL.createObjectURL(file);
  setImageUrl(imageUrl);

  return (
    <div className="bg-zinc-200 w-full h-[100vh] flex justify-center items-center ">
      <div className="bg-zinc-500 size-40  rounded-lg">
        <input type="file" onChange={onFileUpload} />

        <img src={imageUrl} alt="" />
      </div>
    </div>
  );
};
