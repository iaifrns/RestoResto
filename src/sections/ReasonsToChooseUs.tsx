import { Parallax } from "react-scroll-parallax";
import { CustomButton } from "../components/CustomButton";
import { BottomRightBox, Dottes, TopBox } from "../components/DecorationBox";
import WhyUsItem from "../components/WhyUsItem";
import { whyUsData } from "../constants/data";
import { images } from "../constants/images";
import ComponentContainer from "../layout/SectionContainer";

const ReasonsToChooseUs = () => {
  return (
    <div className="w-full h-[80vh] bg-no-repeat bg-cover bg-center relative">
      <div className="absolute w-full h-[80vh]">
        <img src={images.BG4} className="w-full h-full object-contain" />
      </div>
      <div className="absolute z-10 w-full h-full">
        <div className="w-[80%] h-full overflow-hidden flex justify-end items-end">
          <Parallax speed={-10}>
            <img src={images.BG1} alt={images.BG1} />
          </Parallax>
        </div>
      </div>
      <ComponentContainer extraStyle="h-full flex flex-col justify-center items-center z-20">
        <p className="text-secondary text-2xl font-playfair mb-3">
          Why people choose us
        </p>
        <p className="text-white font-bold text-[32px] font-poppins">
          Prepare for first-class service
        </p>
        <div className="flex flex-col w-[80%]">
          <div className="w-[50%] flex justify-between items-center ">
            <TopBox w="70px" h="70px" />
            <Dottes />
          </div>
          <div className="w-full flex justify-between p-16">
            {whyUsData.map((item, index) => (
              <WhyUsItem index={index} item={item} />
            ))}
          </div>
          <div className="w-full justify-end flex">
            <div className="w-[60%] flex justify-between">
              <CustomButton text="Read More About us" />
              <BottomRightBox h="70px" w="70px" />
            </div>
          </div>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default ReasonsToChooseUs;
