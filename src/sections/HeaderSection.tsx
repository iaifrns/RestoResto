import React from "react";
import { Dottes } from "../components/DecorationBox";
import { Parallax } from "react-scroll-parallax";

interface HeaderType {
  title: string;
  text: string;
  image: string;
}

const HeaderSection: React.FC<HeaderType> = ({ title, text, image }) => {
  return (
    <div className="w-full h-[500px] relative overflow-hidden">
      <div className="absolute h-full w-full flex flex-col items-center justify-end bg-[rgba(29,29,29,0.7)] pb-30 z-10">
        <p className="font-playfair font-semibold text-secondary text-xl">
          {title}
        </p>
        <p className="font-bold font-playfair text-[48px] text-white mb-4">{text}</p>
        <Dottes />
      </div>
      <Parallax speed={-30} className="z-0 w-full ">
      <img src={image} alt={image} className="w-full h-full object-cover" />
      </Parallax>
    </div>
  );
};

export default HeaderSection;
