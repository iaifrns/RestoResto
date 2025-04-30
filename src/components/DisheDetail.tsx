import { Icon } from "@iconify/react/dist/iconify.js";
import { DishInfoType } from "../types/disheInfoType";
import { CustomButton } from "./CustomButton";
import { TopRightBox } from "./DecorationBox";

const DisheDetail = ({ dishInfo }: { dishInfo: DishInfoType }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col gap-3 w-full">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-3">
              <p className="text-white hover:text-secondary text-[32px] font-bold font-playfair cursor-default">
                {dishInfo.name}
              </p>
              <div className="flex gap-2 text-gray-300 font-poppins text-sm cursor-default">
                <p className="hover:text-secondary">{dishInfo.date}</p>
                <p className="text-secondary">-</p>
                <p className="hover:text-secondary">Interviews</p>
                <p className="hover:text-secondary">Receipts</p>
              </div>
              <Icon
                icon="solar:menu-dots-bold"
                width="24"
                height="24"
                className="text-secondary"
              />
            </div>
            <TopRightBox w={"70px"} h={"80px"} />
          </div>

          <img
            src={dishInfo.image}
            alt={dishInfo.image}
            className="w-full h-[500px] object-cover "
          />
          <div className="flex gap-4 items-center">
            <p className="font-poppins font-bold text-white">TAGS:</p>
            <p className="text-white font-playfair py-2 px-4 bg-bgcolor text-sm">
              {dishInfo.date}
            </p>
            <div className="flex gap-1 text-sm font-playfair text-white">
              <p className="py-2 px-4 bg-bgcolor">Interviews</p>
              <p className="py-2 px-4 bg-bgcolor">Receipts</p>
            </div>
          </div>
          <p className="text-gray-300 font-playfair text-[14px]">
            {dishInfo.desc}
          </p>
          <div className="flex justify-between items-start">
            <CustomButton text="Read more" />
            <div className="py-2 px-6 flex gap-4 border-secondary bg-bgcolor text-white font-playfair">
              <div className="flex gap-2 items-center">
                <Icon
                  icon="solar:eye-linear"
                  width="24"
                  height="24"
                  className="text-secondary"
                />
                <p>{dishInfo.views}</p>
              </div>
              <div className="flex gap-2 items-center">
                <Icon
                  icon="jam:message-alt"
                  width="24"
                  height="24"
                  className="text-secondary"
                />
                <p>{dishInfo.num_comment}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DishDetailInfo = ({
  name,
  price,
  image,
  category,
  desc,
  num_v,
  num_shop,
}: {
  name: string;
  price: string;
  image: string;
  category: string[];
  desc: string;
  num_v: number;
  num_shop: number;
}) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-start">
            <div className="flex flex-col gap-3">
              <p className="text-white hover:text-secondary text-[32px] font-bold font-playfair cursor-default">
                {name}
              </p>
              <div className="flex gap-6 text-gray-300 font-poppins text-sm cursor-default">
                <div className="flex gap-2">
                  <p className="hover:text-secondary">Price:</p>
                  <p className="text-secondary">{price}</p>
                </div>
                <div className="flex gap-2">
                  <p className="hover:text-secondary">3 reviews</p>
                  <div className="flex gap-2">
                    <Icon icon="fluent-color:star-16" width="16" height="16" />
                    <Icon icon="fluent-color:star-16" width="16" height="16" />
                    <Icon icon="fluent-color:star-16" width="16" height="16" />
                    <Icon icon="fluent-color:star-16" width="16" height="16" />
                    <Icon icon="fluent-color:star-16" width="16" height="16" />
                  </div>
                </div>
              </div>
            </div>
            <TopRightBox w={"70px"} h={"80px"} />
          </div>

          <img
            src={image}
            alt={image}
            className="w-full h-[500px] object-cover "
          />
          <div className="flex gap-4 items-center">
            <p className="font-poppins font-bold text-white">TAGS:</p>
            <div className="flex gap-1 text-sm font-playfair text-white">
              {category.map((text, ind) => (
                <p key={ind} className="py-2 px-4 bg-bgcolor">
                  {text}
                </p>
              ))}
            </div>
          </div>
          <p className="text-gray-300 font-playfair text-[14px]">{desc}</p>
          <div className="flex justify-between items-start">
            <div className="flex gap-2 items-center">
              <p className="w-[80px] p-4 bg-bgcolor text-center h-full text-white">
                1
              </p>
              <CustomButton text="Read more" />
            </div>
            <div className="py-2 px-6 flex gap-4 border-secondary bg-bgcolor text-white font-playfair">
              <div className="flex gap-2 items-center">
                <Icon
                  icon="solar:eye-linear"
                  width="24"
                  height="24"
                  className="text-secondary"
                />
                <p>{num_v}</p>
              </div>
              <div className="flex gap-2 items-center">
                <Icon
                  icon="weui:shop-outlined"
                  width="24"
                  height="24"
                  className="text-secondary"
                />
                <p>{num_shop}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisheDetail;
