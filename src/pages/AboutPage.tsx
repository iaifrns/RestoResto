import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import { Dottes } from "../components/DecorationBox";
import { images } from "../constants/images";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import OurChefSection from "../sections/OurChefSection";
import Testimony from "../sections/Testimony";
import TopMenuSection from "../sections/TopMenuSection";
import OurStorySection from "../sections/OurStorySection";
import PopUpReservation from "../components/PopupReservation";

const CounterDisplay = ({ num, text }: { num: number; text: string }) => {
  return (
    <div className="flex flex-col gap-4 items-center font-playfair">
      <p className="text-[40px] font-semibold text-secondary">{num}</p>
      <p className="text-xl font-semibold text-white">{text}</p>
      <Icon
        icon="solar:menu-dots-bold"
        width="24"
        height="24"
        className="text-secondary"
      />
    </div>
  );
};

interface CounterType {
  num: number;
  text: string;
}

const AboutPage = () => {
  const [isHoverPlay, setIsHoverPlay] = useState(false);

  const counters: CounterType[] = [
    { num: 254, text: "New Visiters Every Week" },
    { num: 12176, text: "Happy Customers Every Year" },
    { num: 172, text: "Won Awards" },
    { num: 732, text: "Weekly Deliveries" },
  ];

  return (
    <div className="h-full w-full bg-primary">
      <TopMenuSection />
      <HeaderSection
        text="About our Restaurant"
        title="Enjoy your time in our restaurant with pleaseure."
        image={images.menuImg.MENUIMG4}
      />
      {/* about us section */}
      <OurStorySection />
      <div className="w-full h-[40vh] relative overflow-hidden">
        <div className="absolute bg-[rgba(20,20,20,0.5)] w-full h-full z-10 flex justify-evenly items-center">
          {counters.map((data, ind) => (
            <CounterDisplay text={data.text} num={data.num} key={ind} />
          ))}
        </div>
        <Parallax speed={-20}>
          <img
            src={images.menuImg.MENUIMG2}
            alt={images.LANDING1}
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>
      <OurChefSection />
      <div className="w-full h-[50vh] relative overflow-hidden">
        <div className="absolute bg-[rgba(20,20,20,0.5)] w-full h-full z-10 flex flex-col justify-center items-center">
          <p className="text-secondary font-playfair font-semibold text-[20px]">
            Our promo video
          </p>
          <p className="text-white text-[32px] font-bold font-playfair w-[80%] text-center mb-3">
            Get ready to start your exciting journey. <br />
            Our restaurant will lead you through the amazing food world.
          </p>
          <Dottes />
          <div className="h-[120px] w-fit flex items-center">
            <div className="bg-[rgba(255,255,255,0.3)] border border-white rounded-full p-2 mt-4 hover:p-4 hover:bg-[rgba(255,255,255,0.5)] hover:border-secondary transition-all duration-300 ease-out">
              <div
                className="bg-secondary hover:bg-white p-4 rounded-full transition-all duration-300 ease-out"
                onMouseEnter={() => setIsHoverPlay(true)}
                onMouseLeave={() => setIsHoverPlay(false)}
              >
                <Icon
                  icon="solar:play-bold-duotone"
                  width="24"
                  height="24"
                  className={`${isHoverPlay ? "text-secondary" : "text-white"}`}
                />
              </div>
            </div>
          </div>
        </div>
        <Parallax speed={-20}>
          <img
            src={images.LANDING1}
            alt={images.LANDING1}
            className="w-full h-full object-cover"
          />
        </Parallax>
      </div>
      <Testimony />
      <FooterSection />
      {/* popup menu resevation */}
      <PopUpReservation />
    </div>
  );
};

export default AboutPage;
