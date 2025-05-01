import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext, useState } from "react";
import { CustomButton } from "../components/CustomButton";
import { CustomTextArea, NormalInputBox } from "../components/CustomInput";
import { DishDetailInfo } from "../components/DisheDetail";
import PopUpReservation from "../components/PopupReservation";
import SearchBar from "../components/SearchBar";
import {
  CartList,
  CartPriceRange,
  CartTags,
  ListWithImgCart,
} from "../components/SimpleCart";
import {
  cartItemImgList,
  comments,
  dishCategoryList,
  shopItems,
  tags,
} from "../constants/data";
import { images } from "../constants/images";
import { initialFormResevationState } from "../constants/initialFormResevationState";
import ComponentContainer from "../layout/SectionContainer";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import TopMenuSection from "../sections/TopMenuSection";
import { inputType } from "../types/inputType";
import { DottedLines } from "../components/DecorationBox";
import { PopupContext } from "../context/PopupProvider";

const shortList: Array<Record<string, string>> = [
  {
    text: shopItems[2].dishe.title,
    image: shopItems[2].image,
    price: shopItems[2].dishe.price,
  },
  {
    text: shopItems[3].dishe.title,
    image: shopItems[3].image,
    price: shopItems[3].dishe.price,
  },
  {
    text: shopItems[1].dishe.title,
    image: shopItems[1].image,
    price: shopItems[1].dishe.price,
  },
];

const SingleProductPage = () => {
  const {shopItem} = useContext(PopupContext)
  const arr = new Array(5).fill("");

  const [whichStarHovered, setWhichStarHovered] = useState(-1);
  const [starNum, setStarNum] = useState(-1);

  const whichStarToShow = (ind: number): string => {
    let icon = "ri:star-line";
    if (whichStarHovered == -1) {
      icon = starNum < ind ? "ri:star-line" : "ri:star-fill";
    } else {
      icon = whichStarHovered < ind ? "ri:star-line" : "ri:star-fill";
    }
    return icon;
  };

  const [reservationFrom, setReservationFrom] = useState<
    Record<string, inputType>
  >(initialFormResevationState);

  return (
    <div className="w-full h-full bg-primary">
      <ComponentContainer extraStyle="w-full h-full flex flex-col items-center">
        <TopMenuSection />
        <HeaderSection
          image={images.SHOP.ArticleImg6}
          text="Our Shop"
          title="Order food with home delivery"
        />
        <div className="w-[80%] flex gap-8 py-16">
          <div className="w-[65%] flex flex-col gap-8">
            <DishDetailInfo
              name={shopItem.dishe.title}
              category={shopItem.catergory}
              desc={shopItem.longDesc}
              image={shopItem.image}
              num_shop={shopItem.num_shop}
              num_v={shopItem.num_views}
              price={shopItem.dishe.price}
            />
            <div className="w-full border-t border-gray-600 flex flex-col gap-6 pt-6">
              <p className="font-playfair text-xl text-white">Reviews</p>
              <div className="flex flex-col w-full gap-4">
                {comments.map((com, ind) => (
                  <div className="p-4 flex w-full gap-4 bg-bgcolor">
                    <img
                      src={com.image}
                      alt={com.image}
                      className="w-[60px] h-[60px] rounded-full object-cover"
                    />
                    <div className="flex flex-col w-full flex-1 gap-2">
                      <div className="flex w-full justify-between items-center">
                        <div className="flex flex-col gap-3">
                          <div className="flex gap-4 items-center">
                            <p className="text-white font-playfair font-semibold">
                              {com.name}
                            </p>
                            <div className="flex gap-2">
                              {arr.map((_) => (
                                <Icon
                                  icon="fluent-color:star-16"
                                  width="16"
                                  height="16"
                                />
                              ))}
                            </div>
                          </div>
                          <p className="text-gray-300 font-playfair text-sm">
                            {com.date}
                          </p>
                        </div>
                        <p className="text-secondary font-playfair">
                          0{ind + 1}
                        </p>
                      </div>
                      <p className="text-white">{com.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-8 w-full h-full mt-2 border-t border-gray-600 pt-6">
              <p className="font-playfair text-xl text-white">Add Review</p>
              <div className="flex gap-2">
                {arr.map((_, ind) => (
                  <Icon
                    icon={whichStarToShow(ind)}
                    width="24"
                    height="24"
                    className="text-secondary"
                    onMouseEnter={() => setWhichStarHovered(ind)}
                    onMouseLeave={() => setWhichStarHovered(-1)}
                    onClick={() => setStarNum(ind)}
                  />
                ))}
              </div>
              <div className="flex justify-between gap-8">
                <NormalInputBox
                  value={reservationFrom.name.value}
                  placeholder={reservationFrom.name.placeholder}
                  onChange={(e) =>
                    setReservationFrom({
                      ...reservationFrom,
                      name: {
                        ...reservationFrom.name,
                        value: e.target.value,
                      },
                    })
                  }
                />
                <NormalInputBox
                  value={reservationFrom.email.value}
                  placeholder={reservationFrom.email.placeholder}
                  onChange={(e) =>
                    setReservationFrom({
                      ...reservationFrom,
                      email: {
                        ...reservationFrom.email,
                        value: e.target.value,
                      },
                    })
                  }
                />
              </div>
              <CustomTextArea
                value={reservationFrom.message.value}
                placeholder={reservationFrom.message.placeholder}
                onChange={(e) =>
                  setReservationFrom({
                    ...reservationFrom,
                    message: {
                      ...reservationFrom.message,
                      value: e.target.value,
                    },
                  })
                }
              />
              <CustomButton text="Add Review" />
            </div>
            <div className="flex flex-col gap-8 w-full items-center">
              <p className="font-playfair text-xl text-white w-full text-start">
                Your Might Also Like
              </p>
              <div className="flex gap-8">
                {shortList.map((item, ind) => (
                  <div
                    className="flex flex-col gap-4 flex-1 cursor-default"
                    key={"sort item-" + ind}
                  >
                    <img src={item.image} alt={item.image} />
                    <div>
                      <p className="text-white hover:text-secondary font-poppins font-semibold">
                        {item.text}
                      </p>
                      <p className="font-playfair text-secondary">
                        {item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-16 items-center">
                <DottedLines />
                <div className="h-2 w-2 rounded-full bg-white"></div>
                <DottedLines />
              </div>
              <CustomButton text="Back to Shop" />
            </div>
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

export default SingleProductPage;
