import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useState } from "react";
import Padination from "../components/Padination";
import SearchBar from "../components/SearchBar";
import ShopItemDisplay from "../components/ShopItemDisplay";
import {
  CartList,
  CartPriceRange,
  CartTags,
  ListWithImgCart,
} from "../components/SimpleCart";
import {
  cartItemImgList,
  dishCategoryList,
  shopItems,
  tags,
} from "../constants/data";
import { images } from "../constants/images";
import ComponentContainer from "../layout/SectionContainer";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import TopMenuSection from "../sections/TopMenuSection";
import PopUpReservation from "../components/PopupReservation";
import { useNavigate } from "react-router-dom";
import { DishDetailType } from "../types/menuType";
import { PopupContext } from "../context/PopupProvider";
import routesPath from "../constants/routes";

const dropDowmItemList = [
  "Popularity",
  "Averge rating",
  "Price: lower to higher",
  "Price: higher than ever",
];

const ShopPage = () => {
  const [dropDownActiveItem, setDropDownActiveItem] = useState(0);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDownActiveItem = (i: number) => {
    setDropDownActiveItem(i);
    setShowDropDown(false);
  };

  const navigate = useNavigate();
  const { setShopItem } = useContext(PopupContext);

  const handleNavigateToDetailProduct = (data: DishDetailType) => {
    setShopItem(data);
    navigate(routesPath.SINPLEPRODUCT);
  };

  return (
    <div className="bg-primary w-full h-full">
      <ComponentContainer extraStyle="flex flex-col w-full h-full items-center">
        <TopMenuSection />
        <HeaderSection
          title="Order food with home delivery"
          text="Our Shop"
          image={images.IMG4}
        />
        <div className="2xl:w-[80%] w-[90%] gap-8 flex py-16 relative h-full">
          <div className="w-[65%] flex flex-col gap-8">
            <div className="flex justify-between items-center w-full">
              <p className="text-xl font-playfair text-white">
                Showing <span className="text-secondary">1-8</span> of 19 result
              </p>
              <div className="relative w-[200px] h-fit">
                <div
                  className="px-4 py-2 flex w-full bg-bgcolor items-center justify-between cursor-pointer"
                  onClick={() => setShowDropDown(!showDropDown)}
                >
                  <p className="text-white font-poppins text-[12px]">
                    {dropDowmItemList[dropDownActiveItem]}
                  </p>
                  <Icon
                    icon="gridicons:dropdown"
                    width="24"
                    height="24"
                    className={`text-secondary transition-all duration-500 ${
                      showDropDown && "rotate-180"
                    }`}
                  />
                </div>
                <div
                  className={`w-full h-full absolute mt-2 z-10 transition-all duration-300 ease-out ${
                    showDropDown
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-5 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-col w-full bg-white">
                    {dropDowmItemList.map((text, ind) => (
                      <p
                        onClick={() => handleDropDownActiveItem(ind)}
                        className={`w-full px-4 py-2 text-[12px] font-poppins ${
                          ind == dropDownActiveItem && "bg-secondary text-white"
                        } cursor-pointer`}
                      >
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-dotted border-secondary"></div>
            <div className="w-full h-full flex justify-center items-center">
              <div className="grid 2xl:w-[90%] w-full grid-cols-2 items-center justify-center gap-8">
                {shopItems.map((item, ind) => (
                  <ShopItemDisplay
                    name={item.dishe.title}
                    image={item.image}
                    desc={item.dishe.desc}
                    price={item.dishe.price}
                    key={"shop-item-" + ind}
                    onclick={() => handleNavigateToDetailProduct(item)}
                  />
                ))}
              </div>
            </div>
            <Padination active={2} size={6} />
          </div>
          <div className="w-[35%] h-fit flex flex-col gap-8 sticky top-0">
            <SearchBar />
            <CartPriceRange title="Price Filter" />
            <ListWithImgCart title="Popular Products" list={cartItemImgList} />
            <CartList title="Categories" listItem={dishCategoryList} />
            <CartTags title="Resent tags" textList={tags} />
          </div>
        </div>
        <FooterSection />
      </ComponentContainer>
      {/* popup menu resevation */}
      <PopUpReservation />
    </div>
  );
};

export default ShopPage;
