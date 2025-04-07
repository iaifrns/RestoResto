import { useEffect, useRef, useState } from "react";
import { CustomButton } from "../components/CustomButton.tsx";
import { Dottes, TopBox } from "../components/DecorationBox.tsx";
import { images } from "../constants/images.ts";
import ComponentContainer from "../layout/SectionContainer.tsx";

const OurStorySection = () => {
  const ref1 = useRef<HTMLImageElement | null>(null);
  const ref2 = useRef<HTMLImageElement | null>(null);

  const [isFistElementVisible, setIsFirstElementVisible] = useState(false);
  const [isSecondElementVisible, setIsSecondElementVisible] = useState(false);

  useEffect(() => {
    const firstObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsFirstElementVisible(true);
          firstObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref1.current) {
      firstObserver.observe(ref1.current);
    }

    return () => {
      if (ref1.current) firstObserver.unobserve(ref1.current);
    };
  }, []);

  useEffect(() => {
    const secondObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsSecondElementVisible(true);
          secondObserver.unobserve(entry.target);
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (ref2.current) {
      secondObserver.observe(ref2.current);
    }

    return () => {
      if (ref2.current) secondObserver.unobserve(ref2.current);
    };
  }, []);

  return (
    <div className={"w-full bg-primary flex justify-between"}>
      <ComponentContainer extraStyle={"h-[70vh] p-8"}>
        <div className="w-full flex justify-between h-full">
          <div className="flex h-full w-full">
            <div className="p-2 flex flex-col justify-between items-end px-4">
              <TopBox w="50px" h="60px" />
              <img
                ref={ref1}
                src={images.BG2}
                className={`w-[100px] h-[150px] object-cover transition-all duration-500 ease-out ${
                  isFistElementVisible ? "translate-y-0" : "translate-y-15"
                } `}
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
            <img
              ref={ref2}
              src={images.BG1}
              className={`w-[150px] h-fit transition-all duration-500 ease-out ${
                isSecondElementVisible ? "translate-y-0" : "-translate-y-15"
              }`}
            />
          </div>
          <div className="w-full h-full relative">
            <div className="absolute w-[100%] h-[100%]">
              <div className="relative w-full h-full flex justify-end">
                <div className="absolute w-full h-full flex justify-start items-center">
                  <img src={images.IMG2} className="top-4 h-[80%]" />
                </div>
                <img src={images.IMG1} className=" h-full" />
              </div>
            </div>
            <div className="flex h-full w-fit justify-center items-end">
              <div className="border-dotted border border-secondary w-[550px] h-[200px] m-4"></div>
            </div>
          </div>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default OurStorySection;
