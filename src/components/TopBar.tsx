import { Icon } from "@iconify/react";
import { useState } from "react";
import { cartData, dropDownMenuData } from "../constants/data";
import { MenuButton } from "./CustomButton";
import CartItem from "./CartItem";

const MenuBoxItem = ({
  text,
  icon = false,
  dropData,
}: {
  text: string;
  icon?: boolean;
  dropData?: Array<string>;
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
      className="text-white hover:text-secondary font-semibold text-xs flex items-center cursor-pointer relative justify-center"
    >
      <p className={'font-poppins'}>{text}</p>
      {icon && (
        <Icon
          icon={
            isHovered ? "lets-icons:arrow-drop-up" : "ic:round-arrow-drop-down"
          }
          width={"32"}
        />
      )}

      <div className={`absolute top-full transition-all duration-300 ease-out ${isHovered && icon ? "opacity-100 translate-y-1" : "opacity-0 translate-y-10"}`}>
        <div className="w-[180px] bg-primary flex flex-col gap-2">
          {dropData?.map((item) => (
            <p className="text-white font-semibold font-poppins w-full p-2 hover:bg-gray-700">
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

const media = ["Facebook","Pinterest","Tumblr","Twitter","Linkedin"]

const TopBar = ({
  setShowReservationFrom,
}: {
  setShowReservationFrom: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [annousement, setAnnousement] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [isCartHovered, setIsCartHovered] = useState(false);
  const [isShareIconHovered, setIsShareIconHovered] = useState(false);
  return (
    <div className="flex items-center w-full max-md:max-w-[1250px] h-[70px] bg-primary justify-between pl-4 border-gray-700 border-[1px] relative">
      <p className="text-2xl font-bold text-white font-shoulders">RESTORESTO</p>
      <div className="flex items-center h-full">
        <div className="flex gap-4 border-r border-[#eee] h-full px-4">
          <MenuBoxItem text="HOME" />
          <MenuBoxItem text="MENU" icon dropData={dropDownMenuData.menu} />
          <MenuBoxItem text="ABOUT" />
          <MenuBoxItem text="CONTACT" />
          <MenuBoxItem text="NEWS" />
          <MenuBoxItem text="PAGES" icon dropData={dropDownMenuData.pages} />
        </div>
        <div
          className="flex items-center justify-center border-r border-[#eee] h-full p-4 cursor-pointer w-[80px] relative"
          onMouseEnter={() => setIsCartHovered(true)}
          onMouseLeave={() => setIsCartHovered(false)}
        >
          {showCart ? (
            <Icon
              icon={"iconoir:cancel"}
              className="text-white"
              width={"32"}
              onClick={() => setShowCart(false)}
            />
          ) : (
            <div onClick={() => setShowCart(true)}>
              <div className="absolute w-[34px] h-[35px]">
                <div className="w-full h-full flex items-end justify-end">
                  <p className="text-[10px] rounded-full bg-secondary h-[16px] w-[16px] flex justify-center items-center font-semibold text-white">
                    3
                  </p>
                </div>
              </div>
              <Icon
                icon={"solar:bag-broken"}
                className="text-white"
                width={"24"}
              />
            </div>
          )}
          <div
            className={`absolute w-[150px] bg-primary transition duration-300 ease-in-out ${
              isCartHovered ? "opacity-100" : "opacity-0"
            } top-full right-0 border border-gray-700`}
          >
            <p className="text-center p-4 text-white font-poppins">
              Your Cart
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center border-r border-[#eee] h-full p-4 cursor-pointer relative"
        onMouseEnter={() => setIsShareIconHovered(true)}
        onMouseLeave={() => setIsShareIconHovered(false)}>
          {annousement ? (
            <Icon
              icon={"iconoir:cancel"}
              className="text-white"
              width={"32"}
              onClick={() => setAnnousement(false)}
            />
          ) : (
            <Icon
              icon={"openmoji:loudspeaker"}
              className="text-white"
              width={"32"}
              onClick={() => setAnnousement(true)}
            />
          )}
          <div
            className={`absolute w-[150px] bg-primary transition duration-300 ease-in-out ${
              isShareIconHovered ? "opacity-100" : "opacity-0"
            } top-full right-0 border border-gray-700`}
          >
            <p className="text-center p-4 text-white font-poppins">
              Share
            </p>
          </div>
        </div>
        <div
          className="flex justify-center items-center cursor-pointer p-4 h-full relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setShowReservationFrom(true)}
        >
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
      <div
        className={`absolute top-full transition-all duration-300 ease-in ${
          annousement ? "opacity-100" : "opacity-0"
        } left-0 w-full`}
      >
        <div className="w-full h-[100px] bg-[#252323] border border-gray-700 flex justify-center items-center gap-8">
          {media.map((item, ind) => (
              <p className="font-bold text-white text-sm font-playfair cursor-pointer" key={ind}>{item}</p>
          ))}
        </div>
      </div>
      <div
        className={`absolute top-full transition-all duration-300 ease-out ${
          showCart ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        } w-full flex justify-end left-0`}
      >
        <div className="w-[400px] h-[400px] bg-[#252323] border border-gray-700 flex p-2 flex-col justify-between">
          <div className="w-full flex justify-between border-b border-gray-700 p-2">
            <p className="text-white font-bold text-xl">Your Cart</p>
            <p className="text-gray-400 font-semibold">4 items</p>
          </div>
          <div className="w-full h-full overflow-y-auto border-b border-gray-700 p-2 gap-4 flex flex-col transition-opacity delay-[2s]">
            {cartData.map((item, index) => (
              <CartItem data={item} ind={index} />
            ))}
          </div>
          <div className="flex flex-col p-2 gap-2">
            <div className="flex justify-between">
              <p className="text-lg text-white font-bold">Subtotal:</p>
              <p className="text-secondary font-bold">$147</p>
            </div>
            <div className="bg-gray-700 w-full h-[1px]"></div>
            <div className="flex gap-2 items-center py-2">
              <MenuButton text="View Cart" />
              <p className="text-white font-semibold text-lg">/</p>
              <MenuButton text="Checkout" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
