import { useState } from "react";
import { DottedLines } from "../components/DecorationBox";
import { images } from "../constants/images";
import { MenuCategory } from "../enum/menu";
import ComponentContainer from "../layout/SectionContainer";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import TopMenuSection from "../sections/TopMenuSection";
import { ItemDisplay } from "./DefaultMenuPage";
import { dishImages } from "../constants/data";

const GalleryPage = () => {
  const categories = ["All",...Object.values(MenuCategory)];
  const [active, setActive] = useState(0);
  return (
    <div className="w-full h-full bg-primary">
      <ComponentContainer extraStyle="w-full flex flex-col items-center">
        <TopMenuSection />
        <HeaderSection
          text="Restaurant Galley"
          title="Enjoy your time in our restaurant with pleasure"
          image={images.SHOP.ArticleImg2}
        />
        <div className="w-[80%] flex flex-col py-16 items-center gap-8">
          <div className="flex w-fit gap-4 items-center">
            <DottedLines />
            <div className="flex bg-primary border border-gray-600 ">
              {categories.map((item, key) => (
                <ItemDisplay
                  text={item}
                  count={`0${key + 1}`}
                  key={key}
                  active={active == key}
                  onclick={() => setActive(key)}
                />
              ))}
            </div>
            <DottedLines />
          </div>
          <div className="w-[95%] flex flex-wrap gap-4 justify-center">
            {dishImages.map((data, ind) => (
                <img src={data.image} alt={data.image} style={{width: data.w}} className={`object-cover transition-all duration-300 ${(data.category != categories[active]) && active!=0 && 'hidden'}`} key={ind} />
            ))}
          </div>
        </div>
        <FooterSection />
      </ComponentContainer>
    </div>
  );
};

export default GalleryPage;
