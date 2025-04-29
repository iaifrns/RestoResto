import { Icon } from "@iconify/react/dist/iconify.js";

const Padination = ({ active, size }: { active: number; size: number }) => {
  const arr = new Array(size).fill("");
  return (
    <div className="w-full bg-bgcolor flex text-white font-playfair ">
      <div className="w-[50px] h-[50px] flex justify-center items-center border-r border-gray-400 cursor-pointer">
        <Icon icon="basil:arrow-left-outline" width="24" height="24" />
      </div>
      {arr.map((_, ind) => (
        <p
          key={"padination" + ind}
          className={`w-[50px] h-[50px] flex justify-center items-center border-r border-gray-400 font-semibold cursor-pointer ${active == ind+1 && 'bg-secondary'}`}
        >
          0{ind + 1}
        </p>
      ))}
      <div className="w-[50px] h-[50px] flex justify-center items-center border-r border-gray-400 cursor-pointer">
        <Icon icon="basil:arrow-right-outline" width="24" height="24" />
      </div>
    </div>
  );
};

export default Padination;
