import { Icon } from "@iconify/react";
import { useState } from "react";

const MenuBoxItem = ({
  text,
  icon = false,
}: {
  text: string;
  icon?: boolean;
}) => {
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
      className="text-white hover:text-secondary font-bold text-sm flex items-center cursor-pointer"
    >
      <p>{text}</p>
      {icon && (
        <Icon
          icon={
            isHovered ? "lets-icons:arrow-drop-up" : "ic:round-arrow-drop-down"
          }
          width={"32"}
        />
      )}
    </div>
  );
};

const TopBar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center w-full max-w-[1250px] h-[70px] bg-primary justify-between pl-4 border-gray-600 border">
      <p className="text-2xl font-bold text-white font-mono">RESTORESTO</p>
      <div className="flex items-center h-full">
        <div className="flex gap-4 border-r border-gray-600 h-full">
          <MenuBoxItem text="Home" icon />
          <MenuBoxItem text="MENU" icon />
          <MenuBoxItem text="ABOUT" />
          <MenuBoxItem text="CONTACT" />
          <MenuBoxItem text="NEWS" />
          <MenuBoxItem text="PAGES" icon />
        </div>
        <div className="flex items-center justify-center border-r border-gray-600 h-full p-4 cursor-pointer">
          <div className="absolute w-[34px] h-[35px]">
            <div className="w-full h-full flex items-end justify-end">
              <p className="text-[10px] rounded-full bg-secondary h-[16px] w-[16px] flex justify-center items-center font-semibold text-white">
                3
              </p>
            </div>
          </div>
          <Icon icon={"solar:bag-broken"} className="text-white" width={"24"} />
        </div>
        <div className="flex items-center justify-center border-r border-gray-600 h-full p-4 cursor-pointer">
          <Icon
            icon={"openmoji:loudspeaker"}
            className="text-white"
            width={"32"}
          />
        </div>
        <div className="flex justify-center items-center cursor-pointer p-4 h-full relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div
            className={`absolute w-full bg-secondary ${
              isHovered ? "h-full" : "h-0"
            } left-0 bottom-0 duration-1000 transition-all ease-in-out z-0`}
          ></div>
          <p className="font-bold text-xs text-white text-center z-10">
            RESERVATION
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
