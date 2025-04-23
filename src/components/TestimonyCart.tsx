import React from "react";
import { TestimonyType } from "../types/testimonyType";
import { Icon } from "@iconify/react/dist/iconify.js";

interface TestimonyCartType {
  testimony: TestimonyType;
  cartSize: number;
  ind: number;
}

const TestimonyCart: React.FC<TestimonyCartType> = ({
  testimony,
  cartSize,
  ind,
}) => {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center relative pt-8"
      style={{ width: `${cartSize}px` }}
    >
      <div className="absolute w-full top-0">
        <div className="flex justify-center items-center">
          <img
            src={testimony.img}
            alt={testimony.img}
            className="w-[100px] h-[100px] object-cover rounded-full p-2 bg-[rgb(30,30,30)] border-[1px] border-gray-700"
          />
        </div>
      </div>
      <div className="border-t border-dotted border-secondary h-[1px] w-[70px]"></div>
      <div className="w-full flex items-center justify-center flex-col gap-6 p-3 border-[1px] border-gray-700 bg-primary">
        <div className="w-full">
          <Icon
            icon="zondicons:text-decoration"
            width="32"
            height="32"
            className="text-secondary"
          />
        </div>
        <p className="text-xl font-semibold text-white font-playfair">
          {testimony.name}
        </p>
        <div className="flex w-fit gap-1 text-secondary">
          <Icon icon="ic:round-star" width="24" height="24" />
          <Icon icon="ic:round-star" width="24" height="24" />
          <Icon icon="ic:round-star" width="24" height="24" />
          <Icon icon="ic:round-star" width="24" height="24" />
          <Icon icon="ic:round-star" width="24" height="24" />
        </div>
        <p className="w-[90%] text-sm font-playfair text-gray-300 text-center">
          "{testimony.text}"
        </p>
        <div className="w-full flex items-center justify-between">
          <p className="text-secondary font-playfair text-xl">0{ind}.</p>
          <Icon
            icon="solar:menu-dots-bold"
            width="24"
            height="24"
            className="text-secondary"
          />
          <Icon
            icon="zondicons:text-decoration"
            width="32"
            height="32"
            className="text-secondary"
          />
        </div>
      </div>
      <div className="border-t border-dotted border-secondary h-[1px] w-[70px]"></div>
    </div>
  );
};

export default TestimonyCart;
