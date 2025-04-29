import { Icon } from "@iconify/react/dist/iconify.js";
import { images } from "../constants/images";
import { CartCategoryType, CartImgItem } from "../types/cartType";

const SimpleCart = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <p className="p-4 w-full text-center font-semibold text-white font-playfair text-2xl border border-gray-700 bg-bgcolor">
        About Us
      </p>
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
      <p className="p-4 w-full text-center font-semibold text-white font-playfair text-2xl border border-gray-700 bg-bgcolor">
        {title}
      </p>
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
      <p className="p-4 w-full text-center font-semibold text-white font-playfair text-2xl border border-gray-700 bg-bgcolor">
        {title}
      </p>
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
      <p className="p-4 w-full text-center font-semibold text-white font-playfair text-2xl border border-gray-700 bg-bgcolor">
        {title}
      </p>
      <div className="flex flex-col gap-3">
        {listItem.map((data, ind) => (
          <div className="w-full flex gap-2 items-end" key={"category-" + ind}>
            <p className="text-white font-poppins font-semibold">{data.text}</p>
            <div className="w-full border-b border-dotted border-secondary h-[1px]"></div>
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
      <p className="p-4 w-full text-center font-semibold text-white font-playfair text-2xl border border-gray-700 bg-bgcolor">
        {title}
      </p>
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

export { SimpleCart, ListWithImgCart, CartTags, CartList, CartSocialMedaiList };
