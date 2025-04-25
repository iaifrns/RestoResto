import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { CustomButton } from "../components/CustomButton";
import { DottedLines } from "../components/DecorationBox";
import PopUpReservation from "../components/PopupReservation";
import { dishes } from "../constants/data";
import { images } from "../constants/images";
import { MenuCategory } from "../enum/menu";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import TopMenuSection from "../sections/TopMenuSection";
import { MenuItem } from "../types/menuType";

export const ItemDisplay = ({
  text,
  count,
  active,
  onclick,
}: {
  text: string;
  count: string;
  active: boolean;
  onclick: () => void;
}) => {
  return (
    <div
      className={`w-[150px] py-0 h-[80px] justify-center items-center flex relative cursor-pointer ${
        active ? "text-secondary" : "text-white"
      } gap-1 font-playfair font-semibold`}
      onClick={onclick}
    >
      <div
        className={`absolute w-full h-full flex justify-center items-end gap-2 top-2 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        <Icon icon="mdi:menu-up" width="24" height="24" />
      </div>
      <p className="text-[10px]">{count}.</p>
      <p className="text-[16px]">{text}</p>
    </div>
  );
};

export const DishDisplay = ({ dish, show }: { dish: MenuItem; show: boolean }) => {
  const [showbutton, setShowButton] = useState(false);

  return (
    <div
      className={`${show ? "opacity-100 flex gap-4" : "opacity-0 hidden"}`}
      onMouseEnter={() => setShowButton(true)}
      onMouseLeave={() => setShowButton(false)}
    >
      <img
        src={dish.image}
        alt={dish.image}
        className="rounded-full object-cover h-[60px] w-[60px]"
      />
      <div className="flex flex-col w-full">
        <div className="w-full flex gap-4">
          <p className="text-white font-bold text-[18px] font-poppins">
            {dish.dishes.title}
          </p>
          <div className="border-b border-gray-500 flex-1 border-dotted"></div>
          <p className="font-playfair text-xl text-secondary">
            {dish.dishes.price}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm font-playfair w-full text-gray-300">
            {dish.dishes.desc}
          </p>
          <button
            className={`${
              showbutton ? "opacity-100" : "opacity-0 "
            } transition-all duration-300 ease-in-out w-[150px] h-fit p-2 mt-2 text-white font-semibold bg-secondary`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const DefaultMenuPage = () => {
  const categories = Object.values(MenuCategory);
  const [active, setActive] = useState(0);

  return (
    <div className="h-full w-full bg-primary">
      <TopMenuSection />
      <HeaderSection
        title="Special menu offers"
        text="Discover Our menu"
        image={images.IMG2}
      />
      <div className="w-full h-full relative">
        <div className="absolute w-full h-full z-0">
          <img
            src={images.BG3}
            alt={images.BG4}
            className=" w-full h-full object-cover "
          />
        </div>
        <div className="z-10 w-full h-full flex justify-center items-start relative py-16">
          <div className="flex flex-col justify-center items-center w-[80%] gap-16">
            <div className="flex w-fit gap-4 items-center">
              <DottedLines />
              <div className="flex bg-primary border border-gray-600 ">
                {categories.map((item, key) => (
                  <ItemDisplay
                    text={item}
                    count={`0${key + 1}`}
                    key={key}
                    active={active == key}
                    onclick={() => setActive(key)}
                  />
                ))}
              </div>
              <DottedLines />
            </div>
            <div className="w-full border border-gray-600 bg-primary grid grid-cols-2 p-16 gap-8">
              {dishes.map((item, ind) => (
                <DishDisplay
                  dish={item}
                  show={item.catergory == categories[active]}
                  key={ind}
                />
              ))}
            </div>
            <div className="flex gap-8 items-center">
              <DottedLines />
              <div className="rounded-full w-2 h-2 bg-white"></div>
              <DottedLines />
            </div>
            <CustomButton text="Download menu in PDF" />
          </div>
        </div>
      </div>
      {/* Footer */}
      <FooterSection />
      {/* popup menu resevation */}
      <PopUpReservation />
    </div>
  );
};

export default DefaultMenuPage;
