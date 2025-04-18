import { Icon } from "@iconify/react";
import { useState } from "react";

const IconCustomButton = ({ icon }: { icon: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleHover = (value: boolean) => {
    if (setIsHovered) {
      setIsHovered(value);
    }
  };
  return (
    <div
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      className="hover:bg-primary bg-[rgba(255,255,255,0.3)] border border-gray-400 w-[45px] h-[45px] flex justify-center items-center cursor-pointer hover:border-gray-600"
    >
      <Icon
        icon={icon}
        className={isHovered ? "text-secondary" : "text-white"}
        width={"18"}
      />
    </div>
  );
};

const LinkCustomButton = ({ text }: { text: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="py-4 px-8 border-2 border-secondary flex gap-8 bg-[rgba(255,255,255,0.15)] w-fit items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:border-white hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className={`${
          isHovered ? "text-gray-500" : "text-white"
        } font-semibold text-sm font-playfair`}
      >
        {text}
      </p>
      <Icon
        icon={"tabler:arrow-right"}
        className={isHovered ? "text-gray-500" : "text-white"}
        width={"18"}
      />
    </div>
  );
};

const MenuButton = ({ text }: { text: string }) => {
  return (
    <div className="w-full p-2 bg-white flex items-center justify-center font-semibold cursor-pointer">
      {text}
    </div>
  );
};

const CustomButton = ({ text }: { text: string }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="py-4 px-8 flex gap-8 bg-secondary w-fit items-center cursor-pointer transition-all duration-300 ease-in-out hover:bg-white hover:border-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p
        className={`${
          isHovered ? "text-gray-500" : "text-white"
        } font-semibold text-sm font-playfair`}
      >
        {text}
      </p>
      <Icon
        icon={"tabler:arrow-right"}
        className={isHovered ? "text-gray-500" : "text-white"}
        width={"18"}
      />
    </div>
  );
};

export { IconCustomButton, LinkCustomButton, MenuButton, CustomButton };
