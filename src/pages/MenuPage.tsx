import { Parallax } from "react-scroll-parallax";
import { BottomRightBox, Dottes, TopBox } from "../components/DecorationBox";
import { dishes, menuData } from "../constants/data";
import { images } from "../constants/images";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import TopMenuSection from "../sections/TopMenuSection";
import { DishDisplay } from "./DefaultMenuPage";
import PopUpReservation from "../components/PopupReservation";

const MenuPage = () => {
  return (
    <div className="w-full h-full bg-primary">
      <TopMenuSection />
      <HeaderSection
        title="Special menu offers"
        text="Discover Our menu"
        image={images.LANDING1}
      />
      <div className="w-full py-16 flex flex-col gap-8 items-center justify-center">
        {menuData.map((item, ind) => (
          <div className="flex flex-col w-[80%] items-center justify-center gap-8">
            <div className="w-full h-[200px] flex justify-center items-center relative overflow-hidden">
              <div className="absolute z-10 p-4 w-full h-full bg-[rgba(20,20,20,0.7)] flex flex-col justify-between">
                <TopBox h="50px" w="50px" />
                <div className="w-full flex flex-col items-center justify-center">
                  <p className="text-[32px] text-white font-playfair font-semibold">
                    {item.catergory}
                  </p>
                  <p className="text-secondary font-playfair font-semibold">
                    Pellentesque eros mi, faucibus tempor scelerisque nec,
                    efficitur nec nunc.
                  </p>
                </div>
                <div className="flex justify-between items-end">
                  <p className="text-white font-playfair text-2xl">
                    0{ind + 1}.
                  </p>
                  <BottomRightBox w="50px" h="50px" />
                </div>
              </div>
              <Parallax speed={-20} className="h-[400px] w-full">
                <img
                  src={item.image}
                  alt={item.image}
                  className="w-full h-[400px] object-cover"
                />
              </Parallax>
            </div>
            <div className="w-full grid grid-cols-2 gap-8">
              {dishes.map((data, index) => (
                <DishDisplay
                  dish={data}
                  show={data.catergory == item.catergory}
                  key={index}
                />
              ))}
            </div>
            <Dottes />
          </div>
        ))}
      </div>
      <FooterSection />
      {/* popup menu resevation */}
      <PopUpReservation />
    </div>
  );
};

export default MenuPage;
