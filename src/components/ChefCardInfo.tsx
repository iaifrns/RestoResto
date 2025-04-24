import { Icon } from "@iconify/react/dist/iconify.js";
import { ChefInfoType } from "../types/chefInfoType";
import { useState } from "react";

const ChefCardInfo = ({ chefInfo }: { chefInfo: ChefInfoType }) => {
  const { name, img, position, desc } = chefInfo;
  const icons = [
    "ri:facebook-fill",
    "proicons:x-twitter",
    "lucide:instagram",
    "ri:linkedin-fill",
  ];
  const [showMedia, setShowMedia] = useState(false);

  const SocialMediaLink = ({ icon }: { icon: string }) => {
    return (
      <div className="p-3 rounded-full bg-primary">
        <Icon icon={icon} width="16" height="16" className="text-white" />
      </div>
    );
  };

  return (
    <div className="bg-bgcolor w-[350px] flex flex-col items-center justify-center gap-4">
      <div
        className="w-full h-[300px] relative"
        onMouseEnter={() => setShowMedia(true)}
        onMouseLeave={() => setShowMedia(false)}
      >
        <div
          className={` transition-all duration-300 ease-in-out ${
            !showMedia ? "opacity-0" : "opacity-100"
          } w-full h-full absolute bg-[rgba(0,0,0,0.5)]`}
        >
          <div className="w-full flex h-full items-center justify-center flex-col gap-4">
            <p className="font-semibold font-playfair text-white">Follow</p>
          <div className="flex justify-center items-center gap-2">
            {icons.map((item, ind) => (
              <SocialMediaLink icon={item} key={ind} />
            ))}
          </div>
          </div> 
        </div>
        <img src={img} alt={img} className="w-full h-full object-cover" />
      </div>
      <p className="font-playfair font-bold text-white text-xl">{name}</p>
      <p className="font-semibold text-secondary">{position}</p>
      <p className="text-white text-center font-poppins text-sm w-[90%]">
        {desc}
      </p>
      <div className="w-full flex justify-center mb-2">
        <Icon
          icon="charm:menu-meatball"
          width="24"
          height="24"
          className="text-secondary"
        />
      </div>
    </div>
  );
};

export default ChefCardInfo;
