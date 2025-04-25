import React from "react";
import { Dottes } from "../components/DecorationBox";

interface HeaderType {
  title: string;
  text: string;
  image: string;
}

const HeaderSection: React.FC<HeaderType> = ({ title, text, image }) => {
  return (
    <div className="w-full h-[500px] relative">
      <div className="absolute h-full w-full flex flex-col items-center justify-end bg-[rgba(29,29,29,0.7)] pb-30">
        <p className="font-playfair font-semibold text-secondary text-xl">
          {title}
        </p>
        <p className="font-bold font-playfair text-[48px] text-white mb-4">{text}</p>
        <Dottes />
      </div>
      <img src={image} alt={image} className="w-full h-full object-cover" />
    </div>
  );
};

export default HeaderSection;
