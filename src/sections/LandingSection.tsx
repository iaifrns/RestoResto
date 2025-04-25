import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IconCustomButton, LinkCustomButton } from "../components/CustomButton";
import { BottomBox, TopBox } from "../components/DecorationBox";
import { images } from "../constants/images";
import ComponentContainer from "../layout/SectionContainer.tsx";

const LandingPage = () => {
  const [ind, setInd] = useState(0);
  const imgs = [
    images.LANDING1,
    images.LANDING2,
    images.LANDING3,
    images.LANDING4,
  ];

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index === imgs.length) {
        index = 0;
      }
      setInd(index);
      index++;
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="flex w-full h-full justify-center items-center bg-primary"
      id="landing"
    >
      <ComponentContainer extraStyle={"h-screen"}>
        <div className="absolute w-full h-full z-10">
          <div className="w-full h-full bg-radial-mask flex flex-col justify-center items-center p-8 gap-2">
            <div className="w-full flex max-md:max-w-[100px] h-[90vh] gap-16 items-start justify-center">
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
              <div className="flex flex-col justify-center item-center w-full max-w-[1200px] 2xl:max-w-[1300px] h-full relative">
              
                <div className="w-full flex justify-between items-center z-10">
                  <div className="w-[70%] flex flex-col gap-8">
                    <div>
                      <span className="font-playfair text-white font-bold text-xl tracking-[0.4em]">
                        .....
                      </span>
                    </div>
                    <div>
                      <i className=" text-xl text-white font-playfair">
                        Top Services and Premium Cuisine
                      </i>
                      <p className="font-bold text-[56px] text-white font-poppins">
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
                    <i className="text-white font-playfair text-lg">
                      View Promo Video
                    </i>
                  </div>
                </div>
                <div className="absolute h-full flex justify-end items-end w-full max-w-[1250px]">
                  <a href="#footer">
                    <Icon
                      icon={"icon-park-outline:double-down"}
                      width={"32"}
                      className="text-white hover:text-secondary cursor-pointer animate-bounce bottom-0 "
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"h-full w-full"}>
          <div
            className={
              "relative h-screen overflow-hidden flex justify-center items-center"
            }
          >
            {imgs.map((item, i) => (
              <motion.img
                key={i}
                className={"w-full h-full object-cover absolute"}
                alt={item}
                src={item}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: i === ind ? 1 : 0, x: i === ind ? 0 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            ))}
          </div>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default LandingPage;
