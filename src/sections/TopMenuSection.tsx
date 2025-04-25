import { useEffect, useState } from "react";
import TopBar from "../components/TopBar";
const TopMenuSection = ({
  setShowReservationFrom,
}: {
  setShowReservationFrom: React.Dispatch<React.SetStateAction<boolean>>;
}) => {

    const [isPageAtTheTop, setIsPageAtTheTop] = useState(true);

    useEffect(() => {
        const handleScrollCheck = () => {
            setIsPageAtTheTop(window.scrollY <= 10)
        }

        window.addEventListener("scroll", handleScrollCheck)

        return () => window.removeEventListener("scroll", handleScrollCheck)
    },[])

  return (
    <div className="sticky h-[0px] top-0 z-20 w-full flex flex-col items-center">
      <div
        className={` transition-all duration-300 ease-in-out
            ${isPageAtTheTop ? 'opacity-100 ' +
          " w-full flex flex-col justify-center 2xl:justify-end items-center max-w-[1270px] gap-4 py-6 px-8" : 'opacity-0 h-[5px]'}
       ` }
      >
        <div className={"w-full flex justify-center items-center"}>
          <div className="flex w-full max-w-[1200px] justify-between text-sm">
            <div className="font-semibold">
              <span className="text-secondary">En</span>
              <span className="text-white"> / Fr</span>
            </div>
            <div className="flex gap-4 font-semibold font-playfair">
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
        </div>
      </div>
      <div className="z-30 w-full flex items-center justify-center">
        <TopBar setShowReservationFrom={setShowReservationFrom} />
      </div>
    </div>
  );
};

export default TopMenuSection;
