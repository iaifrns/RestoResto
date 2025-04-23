import { Dottes } from "../components/DecorationBox";
import Carousel3x1 from "../components/Sliders";
import ComponentContainer from "../layout/SectionContainer";

const Testimony = () => {
  return (
    <div className="w-full bg-[rgb(29,29,29)] py-16">
      <ComponentContainer extraStyle="flex flex-col py-8 gap-8 items-center justify-center">
        <p className="text-secondary font-playfair font-semibold text-xl">What said about us</p>
        <p className="text-white font-bold font-poppins text-3xl">Customer Reviews</p>
        <Dottes />
        <Carousel3x1 />
      </ComponentContainer>
    </div>
  );
};

export default Testimony;
