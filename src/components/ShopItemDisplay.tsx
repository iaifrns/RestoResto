import { useState } from "react";

const ShopItemDisplay = ({
  image,
  name,
  desc,
  price,
  onclick,
}: {
  image: string;
  name: string;
  desc: string;
  price: string;
  onclick: () => void;
}) => {
  const [isScale, setIsScale] = useState(false);
  return (
    <div
      className="w-full flex flex-col"
      onMouseEnter={() => setIsScale(true)}
      onMouseLeave={() => setIsScale(false)}
    >
      <div className="h-full w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className={`w-full h-[270px] object-cover ${
            isScale && "scale-110"
          } transition-all duration-300`}
        />
      </div>
      <div className="bg-[rgb(55,55,55)] border border-gray-700 p-4 flex flex-col gap-2">
        <p
          className="text-white hover:text-secondary font-semibold font-playfair text-xl cursor-pointer"
          onClick={onclick}
        >
          {name}
        </p>
        <p className="text-[12px] font-poppins text-gray-300">{desc}</p>
        <div className="flex w-full justify-between items-center">
          <p className="text-secondary font-playfair text-xl">{price}</p>
          <button className="p-2 bg-secondary text-sm text-white transition-all duration-300 hover:text-black hover:font-semibold">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopItemDisplay;
