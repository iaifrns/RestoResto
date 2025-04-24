import { Icon } from "@iconify/react/dist/iconify.js";
import { EventType } from "../types/occation";

const EventItem = ({ event }: { event: EventType }) => {
  const { date, desc, eventName } = event;
  return (
    <div className={`w-full flex flex-col items-center gap-2 `}>
      <p className="text-white font-semibold font-playfair text-[18px]">
        {eventName}
      </p>
      <p className="text-secondary font-poppins font-semibold text-[14px]">
        {date}
      </p>
      <p className="text-gray-300 text-center 2xl:text-[14px] text-xs">{desc}</p>
      <Icon
        icon="solar:menu-dots-bold"
        width="24"
        height="24"
        className="text-secondary"
      />
      <div className="w-[120px] h-[1px] bg-secondary rounded-full"></div>
    </div>
  );
};

export default EventItem;
