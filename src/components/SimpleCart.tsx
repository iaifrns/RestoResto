import { Icon } from "@iconify/react/dist/iconify.js";
import { images } from "../constants/images";
import { CartCategoryType, CartImgItem } from "../types/cartType";
import { useEffect, useRef, useState } from "react";

const CartTitle = ({ title }: { title: string }) => {
  return (
    <p className="p-4 w-full text-center font-semibold text-white font-playfair text-[18px] border border-gray-700 bg-bgcolor">
      {title}
    </p>
  );
};

const SimpleCart = ({ title }: { title: string }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      <CartTitle title={title} />
      <img
        src={images.IMG4}
        alt={images.IMG4}
        className="w-full h-[300px] object-cover"
      />
      <p className="text-white font-playfair text-xl font-semibold">
        Restabook restaurant
      </p>
      <p className="text-gray-300 font-playfair text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias
        architecto vero numquam fugiat, magnam voluptas perspiciatis error
        voluptate, eligendi ullam incidunt exercitationem alias voluptatum ab
        necessitatibus beatae qui nihil dicta.
      </p>
    </div>
  );
};

const ListWithImgCart = ({
  list,
  title,
}: {
  list: CartImgItem[];
  title: string;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <CartTitle title={title} />
      {list.map((data, ind) => (
        <div
          key={"cart image item-" + ind}
          className="flex gap-4 items-start w-full"
        >
          <img
            src={data.image}
            alt={data.image}
            className="w-[100px] h-[80px] object-cover"
          />
          <div className="flex gap-4 flex-col">
            <p className="text-xl font-playfair text-white font-semibold">
              {data.title}
            </p>
            <div className="flex gap-2 text-gray-300 font-poppins text-sm">
              <p>{data.date}</p>
              <p>{data.num_comment} Comments</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CartTags = ({
  title,
  textList,
}: {
  title: string;
  textList: Array<string>;
}) => {
  return (
    <div className="flex flex-col gap-4">
      <CartTitle title={title} />
      <div className="flex flex-wrap gap-2">
        {textList.map((text, ind) => (
          <p
            key={"tag-" + ind}
            className="py-2 px-6 text-white bg-bgcolor font-playfair text-sm"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

const CartList = ({
  title,
  listItem,
}: {
  title: string;
  listItem: CartCategoryType[];
}) => {
  return (
    <div className="flex flex-col gap-4">
      <CartTitle title={title} />
      <div className="flex flex-col gap-3">
        {listItem.map((data, ind) => (
          <div className="w-full flex gap-4 items-end" key={"category-" + ind}>
            <p className="text-white font-poppins font-semibold ">
              {data.text}
            </p>
            <div className="flex-1 border-b border-dotted border-secondary h-[1px]"></div>
            <p className="p-1 bg-secondary text-white rounded-full w-8 text-center text-sm">
              {data.num}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const CartSocialMedaiList = ({
  title,
  icons,
}: {
  title: string;
  icons: string[];
}) => {
  return (
    <div className="flex flex-col gap-4">
      <CartTitle title={title} />
      <div className="flex gap-2">
        {icons.map((icon, ind) => (
          <div className="p-4 bg-bgcolor">
            <Icon
              icon={icon}
              width="16"
              height="16"
              key={"social media-" + ind}
              className="text-secondary"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const CartPriceRange = ({ title }: { title: string }) => {
  const divRef = useRef<HTMLDivElement>(null);

  const [dragging, setDragging] = useState(false);
  const [position, setPosition] = useState(0);

  const handleMouseDown = () => setDragging(true);
  const handleMouseUp = () => setDragging(false);

  const handleMouseMove = (e: MouseEvent) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    let newX = e.clientX - rect.left;
    newX = Math.max(0, Math.min(newX, rect.width));
    setPosition(newX);
  };

  useEffect(() => {
    if (dragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  return (
    <div className="flex flex-col gap-4">
      <CartTitle title={title} />
      <div className="flex gap-2 w-full items-center">
        <div className="flex flex-col gap-1 w-full">
          <div className="flex justify-between w-full text-gray-400 text-xs">
            <p>$0</p>
            <p>$1000</p>
          </div>
          <div className="w-full relative h-12 overflow-hidden" ref={divRef}>
            <div className="w-full top-8 h-1 rounded-lg bg-gray-500 absolute z-0"></div>
            <div
              className="flex flex-col items-center w-fit absolute z-10"
              onMouseDown={handleMouseDown}
              style={{ left: `${position}px` }}
            >
              <p className="text-xs text-white p-1 bg-bgcolor w-[30px] text-center">
                {Math.round(
                  (position / (divRef.current?.clientWidth || 1)) * 1000
                )}
              </p>
              <div className="w-5 h-5 rounded-full border-4 border-secondary"></div>
            </div>
          </div>
        </div>
        <button className="bg-secondary p-2 h-fit text-sm text-white hover:text-black font-semibold">
          update
        </button>
      </div>
    </div>
  );
};

export {
  SimpleCart,
  ListWithImgCart,
  CartTags,
  CartList,
  CartSocialMedaiList,
  CartPriceRange,
};
