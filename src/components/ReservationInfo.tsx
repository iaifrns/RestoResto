import { Icon } from "@iconify/react/dist/iconify.js";
import { Dottes } from "./DecorationBox";

const ReservationInfo = ({ extraStyle }: { extraStyle: string }) => {
  return (
    <div
      className={`${extraStyle} w-full h-full flex justify-center items-center`}
    >
      <div className="w-[90%] h-full bg-[rgba(0,0,0,0.6)] border-[1px] border-dotted border-secondary flex flex-col gap-4 2xl:gap-6 items-center justify-center p-8">
        <p className="text-secondary 2xl:text-xl font-playfair font-semibold">
          Call For Reservations
        </p>
        <p className="text-white font-bold font-poppins text-2xl 2xl:text-[36px]">
          Opening Hours
        </p>
        <Dottes />
        <div className="w-fit h-fit flex divide-x-4 divide-double divide-secondary">
          <div className="flex flex-col gap-4 items-center w-[200px]">
            <p className="text-sm text-secondary font-poppins">
              Sunday to Tuesday
            </p>
            <p className="text-2xl 2xl:text-3xl text-white font-bold font-playfair">
              09:00
            </p>
            <p className="text-2xl 2xl:text-3xl text-white font-bold font-playfair">
              22:00
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center w-[200px]">
            <p className="text-sm text-secondary font-poppins">
              Friday to Saturday
            </p>
            <p className="text-2xl 2xl:text-3xl text-white font-bold font-playfair">
              11:00
            </p>
            <p className="text-2xl 2xl:text-3xl text-white font-bold font-playfair">
              19:00
            </p>
          </div>
        </div>
        <div className="w-[300px] flex justify-between items-center">
          <div className="w-[100px] border border-secondary"></div>
          <Icon
            icon="tabler:point"
            width="24"
            height="24"
            className="text-secondary"
          />
          <div className="w-[100px] border border-secondary"></div>
        </div>
        <div className="border border-secondary p-2">
          <p className="text-white font-bold font-playfair text-2xl 2xl:text-[32px] transition-all duration-300 ease-in-out hover:text-secondary cursor-pointer">
            +1(110)123456789
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReservationInfo;
