import { useEffect, useState } from "react";
import { IconCustomButton, LinkCustomButton } from "../components/CustomButton";
import { BottomBox, TopBox } from "../components/DecorationBox";
import TopBar from "../components/TopBar";
import { images } from "../constants/images";
import { Icon } from "@iconify/react";

const LandingPage = () => {
  const [image, setImage] = useState(images.LANDING1);

  useEffect(() => {
    const imags = [
      images.LANDING1,
      images.LANDING2,
      images.LANDING3,
      images.LANDING4,
    ];
    let index = 0;
    const interval = setInterval(() => {
      if (index === imags.length) {
        index = 0;
      }
      setImage(imags[index]);
      index++;
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative">
      <div className="w-full h-full absolute">
        <div className="w-full h-full bg-[rgba(0,0,0,0.7)] flex flex-col justify-center items-center p-8 gap-2">
          <div className="flex w-full max-w-[1200px] justify-between text-sm">
            <div className="font-semibold">
              <span className="text-secondary">En</span>
              <span className="text-white"> / Fr</span>
            </div>
            <div className="flex gap-4 font-semibold">
              <div className="flex gap-2 cursor-pointer">
                <span className="text-secondary hover:text-white">
                  Call now:
                </span>
                <span className="text-white hover:text-secondary">
                  +237655778899
                </span>
              </div>
              <div className="flex gap-2 cursor-pointer">
                <span className="text-secondary hover:text-white">Write:</span>
                <span className="text-white hover:text-secondary">
                  yourmail@gmail.com
                </span>
              </div>
            </div>
          </div>
          <div className="w-full flex md:min-w-[1200px] max-md:max-w-[100px] h-full gap-11 items-start justify-center">
            <div className="hidden 2xl:flex flex-col justify-between item-start h-full">
              <TopBox />
              <div className="flex flex-col w-fit">
                <IconCustomButton icon="line-md:facebook" />
                <IconCustomButton icon="line-md:instagram" />
                <IconCustomButton icon="line-md:twitter-x" />
                <IconCustomButton icon="line-md:tiktok" />
              </div>
              <BottomBox />
            </div>
            <div className="flex flex-col justify-between w-full max-w-[1200px] h-full ">
              <TopBar />
              <div className="w-full flex justify-between items-center">
                <div className="w-[70%] flex flex-col gap-8">
                  <div className="flex gap-2 text-2xl font-bold text-white">
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                    <span>.</span>
                  </div>
                  <div>
                    <p className="font-semibold text-2xl font-serif text-white">
                      Top Services and Premium Cuisine
                    </p>
                    <p className="font-bold text-[58px] text-white">
                      Welcome to RestoResto Restaurant
                    </p>
                  </div>
                  <LinkCustomButton text="Check out our Menu" />
                </div>
                <div className="h-fit w-fit flex gap-8 items-center">
                  <div className="flex justify-center items-center h-[70px] w-[70px] rounded-full bg-[rgba(193,157,96,0.4)]">
                    <div className="flex justify-center items-center w-[55px] h-[55px] bg-secondary rounded-full">
                      <Icon
                        icon={"ic:round-play-arrow"}
                        width={"32"}
                        className="text-white"
                      />
                    </div>
                  </div>
                  <p className="text-white font-semibold font-mono text-lg">
                    View Promo Video
                  </p>
                </div>
              </div>
              <div className="flex justify-end w-full max-w-[1250px]">
                <Icon
                  icon={"icon-park-outline:double-down"}
                  width={"32"}
                  className="text-white hover:text-secondary cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={image} className="w-full h-full object-cover" />
    </div>
  );
};

export default LandingPage;
