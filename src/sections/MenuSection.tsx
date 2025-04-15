import { Parallax } from "react-scroll-parallax";
import { Dottes } from "../components/DecorationBox";
import { menuData } from "../constants/data";
import ComponentContainer from "../layout/SectionContainer";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import { MenuType } from "../types/menuType";
import { LinkCustomButton } from "../components/CustomButton";

const MenuSection = () => {
  const [menu, setMenu] = useState<MenuType>(menuData[0]);
  const [activeInd, setActiveInd] = useState(0);
  const [transition, setTransition] = useState(false);

  const handleChangeMenu = (index: number) => {
    setActiveInd(index);
    setTransition(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setMenu(menuData[activeInd]);
      setTransition(false);
    }, 1000);
    return () => clearInterval(interval);
  }, [transition]);

  return (
    <div className="w-full h-[90vh] overflow-hidden">
      <ComponentContainer extraStyle="h-full relative">
        {transition && (
          <div className="absolute inset-0 bg-black opacity-0 animate-fadeInOut z-50 pointer-events-none"></div>
        )}
        <div
          className={`absolute w-full h-full transition-style duration-700 ease-in-out bg-radial-mask z-10`}
        >
          <div
            className={`flex w-full h-full flex-col justify-center items-center gap-12`}
          >
            <div className="w-full flex flex-col justify-center items-center ">
              <p className="text-xl font-bold font-playfair text-secondary">
                Special menu offers.
              </p>
              <p className="text-[32px] font-bold font-poppins text-white mt-3">
                Enjoy Restaurants Specialties
              </p>
              <Dottes />
            </div>
            <div className="flex gap-8 justify-center items-center w-[80%]">
              <div className="flex flex-col justify-between w-[300px] h-full">
                {menuData.map((item, ind) => (
                  <div
                    className={`w-full flex justify-between items-center transition-style duration-300 ease-in-out ${
                      ind == activeInd ? "text-secondary" : "text-white"
                    } cursor-pointer`}
                    onClick={() => handleChangeMenu(ind)}
                  >
                    <div className="flex gap-2 text-xl font-semibold font-playfair items-end">
                      <p className="text-sm">0{ind + 1}</p>
                      <p>{item.catergory}</p>
                    </div>
                    {ind == activeInd && (
                      <Icon
                        icon="mdi:menu-left"
                        width="24"
                        height="24"
                        className="transition-all duration-300 ease-in-out"
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-10 w-full">
                {menu.dishes.map((item, ind) => (
                  <div className="w-full gap-4 flex items-start transition-all ease-in-out duration-500">
                    <p className="text-secondary font-bold font-playfair text-xl">
                      0{ind + 1}
                    </p>
                    <div className="w-full flex flex-col">
                      <div className="w-full gap-3 flex items-end">
                        <p className="w-[200px] font-semibold text-[18px] text-white font-poppins">
                          {item.title}
                        </p>
                        <div className="h-[1px] border border-dotted border-secondary w-full"></div>
                        <p className="font-semibold font-playfair text-[18px] text-secondary">
                          {item.price}
                        </p>
                      </div>
                      <p className="text-gray-200">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[80%] mt-4">
              <LinkCustomButton text="View Full Menu" />
            </div>
          </div>
        </div>
        <Parallax speed={-30}>
          <img
            src={menu.image}
            alt={menu.image}
            className="w-full h-full objcet-cover"
          />
        </Parallax>
      </ComponentContainer>
    </div>
  );
};

export default MenuSection;
