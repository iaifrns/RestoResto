import DisheDetail from "../components/DisheDetail";
import Padination from "../components/Padination";
import SearchBar from "../components/SearchBar";
import { CartList, CartSocialMedaiList, CartTags, ListWithImgCart, SimpleCart } from "../components/SimpleCart";
import { cartItemImgList, cartSocialMediaIconList, dishCategoryList, dishesDetailInfo, tags } from "../constants/data";
import { images } from "../constants/images";
import ComponentContainer from "../layout/SectionContainer";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import TopMenuSection from "../sections/TopMenuSection";

const NewsPage = () => {

  
  return (
    <div className="w-full h-full bg-primary">
      <ComponentContainer extraStyle="h-full w-full flex flex-col items-center justify-center">
        <TopMenuSection />
        <HeaderSection
          image={images.WhyUsImg2}
          text="Our Journal"
          title="Our last News and Events"
        />
        <div className="w-[80%] flex gap-8 mt-16 mb-8 relative">
          <div className="w-[65%] flex flex-col gap-12">
            {dishesDetailInfo.map((dish, ind) => (
              <DisheDetail key={ind} dishInfo={dish} />
            ))}
            <Padination active={2} size={4} />
          </div>
          <div className="w-[35%] flex flex-col gap-8 h-fit sticky top-16">
            <SearchBar />
            <SimpleCart />
            <ListWithImgCart title="Recent Posts" list={cartItemImgList} />
            <CartTags title="Resent tags" textList={tags} />
            <CartList title="Categories" listItem={dishCategoryList} />
            <CartSocialMedaiList title="Social widget" icons={cartSocialMediaIconList} />
          </div>
        </div>
        <FooterSection />
      </ComponentContainer>
    </div>
  );
};

export default NewsPage;
