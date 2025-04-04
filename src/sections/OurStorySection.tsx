import { CustomButton } from "../components/CustomButton.tsx";
import { Dottes, TopBox } from "../components/DecorationBox.tsx";
import { images } from "../constants/images.ts";
import ComponentContainer from "../layout/SectionContainer.tsx";

const OurStorySection = () => {
  return (
    <div className={"w-full bg-primary flex justify-between"}>
      <ComponentContainer extraStyle={"h-[70vh] p-8"}>
        <div className="w-full flex justify-between h-full">
          <div className="flex h-full w-full">
            <div className="p-2 flex flex-col justify-between items-end px-4">
              <TopBox w="50px" h="60px" />
              <img
                src={images.BG2}
                className="w-[100px] h-[150px] object-cover"
              />
            </div>
            <div className="flex gap-8 flex-col justify-center w-fit">
              <p className="text-secondary font-playfair text-xl font-semibold">
                Our Story
              </p>
              <p className="text-white font-bold font-playfair text-[32px]">
                Few words about us
              </p>
              <Dottes />
              <p className="font-playfair text-sm text-white">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium totam aperiam. Eaque ipsa quae
                ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur. Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur.
              </p>
              <CustomButton text="Explore Our Menu" />
            </div>
            <img src={images.BG1} className="w-[150px] h-fit" />
          </div>
          <div className="w-full h-full relative">
            <div className="absolute w-[100%] h-[100%]">
              <div className="relative w-full h-full flex justify-end">
                <div className="absolute w-full h-full flex justify-start items-center">
                  <img src={images.IMG2} className="top-4 h-[450px]" />
                </div>
                <img src={images.IMG1} className=" h-full" />
              </div>
            </div>
            <div className="flex h-full w-fit justify-center items-end">
              <div className="border-dotted border border-secondary w-[550px] h-[400px] m-8"></div>
            </div>
          </div>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default OurStorySection;
