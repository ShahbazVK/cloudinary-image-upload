import React,{useState} from "react";

const UIInputImage = () => {
  const [image,setimage]=useState(null)
  const handleImageChange = (e) => {
    const image = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onloadend = () => {
      setimage((prev) => ({ ...prev, [name]: reader.result }));
    };
  };
  return <input name="filename" type="file" onChange={handleImageChange} />;
};

export default UIInputImage;
