import ChefCardInfo from "../components/ChefCardInfo";
import { CustomButton } from "../components/CustomButton";
import { Dottes, TopBox } from "../components/DecorationBox";
import { chefInfo } from "../constants/data";
import ComponentContainer from "../layout/SectionContainer";

const OurChefSection = () => {
  return (
    <div className="h-[100vh] w-full">
      <ComponentContainer extraStyle="h-full flex flex-col items-center justify-center gap-4">
        <p className="text-xl text-secondary font-playfair font-semibold">Our awesome team</p>
        <p className="text-[40px] font-bold text-white font-playfair">Met Our Chefs</p>
        <div className="w-[80%] flex flex-col">
            <div className="flex justify-between w-[52%] items-center">
                <TopBox h="70px" w="70px" />
                <Dottes/>
            </div>
            <div className="px-16 flex justify-between w-full mb-16">
                {chefInfo.map((item, index) => (
                    <ChefCardInfo chefInfo={item} key={index} />
                ))}
            </div>
            <div className="w-fit flex px-8 py-4 bg-bgcolor justify-between items-center gap-8 ml-16">
                <p className="text-2xl text-white font-playfair font-semibold">Want to cook something tasty? Read out best recipes.</p>
                <CustomButton text="Recipes Book" />
            </div>
        </div>
      </ComponentContainer>
    </div>
  );
};

export default OurChefSection;
