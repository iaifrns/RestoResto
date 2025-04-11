import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";
import { WhyUsType } from "../types/whyUsType";
import { BottomRightBox, TopBox } from "./DecorationBox";

interface WhyItemType {
  item: WhyUsType;
  index: number;
}

const WhyUsItem: React.FC<WhyItemType> = ({ index, item }) => {

  return (
    <div
      className="w-[365px] h-[370px] [perspective:1000px]"
    >
      <div className="h-full w-full relative transition-transform duration-700 transform-style preserve-3d group hover:rotate-y-180">
        <div className="h-full w-full absolute backface-hidden ">
          <div className="h-full w-full relative">
            <div className="absolute bg-[rgba(0,0,0,0.5)] w-full h-full">
              <div className="w-full h-full flex flex-col justify-between items-center gap-4 p-4">
                <div className="w-full">
                  <TopBox h="50px" w="50px" />
                </div>
                <div className="w-full items-center gap-4 flex flex-col">
                  <div className="w-[80px] h-[3px] bg-secondary rounded-lg"></div>
                  <p className="font-playfair font-bold text-white text-[22px]">
                    {item.default.title}
                  </p>
                  <p className="font-poppins font-semibold text-white">
                    {item.default.desc}
                  </p>
                </div>
                <div className="w-full flex justify-between items-center">
                  <p className="font-playfair font-bold text-white text-xl">
                    0{index + 1}.
                  </p>
                  <BottomRightBox h="50px" w="50px" />
                </div>
              </div>
            </div>
            <img
              src={item.default.image}
              alt={item.default.image}
              className="w-full object-cover h-full"
            />
          </div>
        </div>
        <div className="absolute w-full h-full p-8  bg-[#343434] backface-hidden rotate-y-180">
          <div className="flex flex-col justify-center items-center h-[90%] w-full gap-10">
            <div className="w-fit flex flex-col gap-10 relative">
              <div className="absolute w-full h-full">
                <div className="flex h-full w-full justify-center items-center">
                  <Icon
                    icon={item.hover.icon}
                    width="84"
                    height="84"
                    className="text-secondary"
                  />
                </div>
              </div>
              <div className="w-[70px] h-[10px] bg-[#484848] rounded-lg"></div>
              <div className="w-[70px] h-[10px] bg-[#444444] rounded-lg ml-8"></div>
            </div>
            <p className="text-white font-poppins text-xs font-semibold text-center">
              {item.hover.text}
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <Icon
              icon="majesticons:more-menu"
              width="48"
              height="48"
              className="text-secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUsItem;
