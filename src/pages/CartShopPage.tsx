import { Icon } from "@iconify/react/dist/iconify.js";
import { shopItems } from "../constants/data";
import { images } from "../constants/images";
import ComponentContainer from "../layout/SectionContainer";
import FooterSection from "../sections/FooterSection";
import HeaderSection from "../sections/HeaderSection";
import TopMenuSection from "../sections/TopMenuSection";

const dishCommand: Array<Record<string, string | number>> = [
  {
    image: shopItems[2].image,
    desc: shopItems[2].dishe.title,
    price: shopItems[2].dishe.price,
    count: 2,
    total: "$36",
  },
  {
    image: shopItems[4].image,
    desc: shopItems[4].dishe.title,
    price: shopItems[4].dishe.price,
    count: 1,
    total: "$67",
  },
  {
    image: shopItems[5].image,
    desc: shopItems[5].dishe.title,
    price: shopItems[5].dishe.price,
    count: 3,
    total: "$87",
  },
];

const CartShopPage = () => {
  return (
    <div className="w-full bg-primary">
      <ComponentContainer extraStyle="w-full h-full flex flex-col items-center">
        <TopMenuSection />
        <HeaderSection
          image={images.SHOP.ArticleImg4}
          title="Order food with home delivery"
          text="Your Cart"
        />
        <div className="flex w-[80%] 2xl:w-[70%] py-32 gap-8 items-center">
          <div className="w-[65%] flex flex-col gap-6">
            <p className="text-xl font-playfair text-white font-semibold">
              Your Cart <span className="text-secondary">3 items</span>
            </p>
            <table className="w-full table_shop">
              <tr>
                <td className="bg-bgcolor">Item</td>
                <td>Description</td>
                <td className="bg-bgcolor">Price</td>
                <td>Count</td>
                <td className="bg-bgcolor">Total</td>
                <td></td>
              </tr>
              {dishCommand.map((commande, ind) => (
                <tr key={ind}>
                  <td className="bg-bgcolor">
                    <img
                      src={commande.image as string}
                      alt={commande.image as string}
                      className="w-[80px]"
                    />
                  </td>
                  <td>{commande.desc}</td>
                  <td className="bg-bgcolor"><p className="font-playfair text-xl">{commande.price}</p></td>
                  <td>{commande.count}</td>
                  <td className="bg-bgcolor"><p className="font-playfair text-xl">{commande.total}</p></td>
                  <td>
                    <Icon
                      icon="maki:cross"
                      width="15"
                      height="15"
                      className="text-secondary"
                    />
                  </td>
                </tr>
              ))}
            </table>
          </div>
          <div className="w-[35%] flex justify-center items-center p-8 bg-bgcolor">
            <div className="border-dotted border border-gray-400 bg-primary p-8 w-full h-full flex flex-col gap-6">
              <p className="font-semibold text-xl font-playfair text-secondary">Cart Total</p>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex w-full justify-between">
                    <p className="text-white font-playfair">CartSubtotal:</p>
                    <p className="text-secondary font-playfair">$230</p>
                </div>
                <div className="bg-bgcolor h-[1px] w-[70%]"></div>
                <div className="flex w-full justify-between">
                    <p className="text-white font-playfair">Shipping Total:</p>
                    <p className="text-secondary font-playfair">$23</p>
                </div>
                <div className="bg-bgcolor h-[1px] w-[70%]"></div>
                <div className="flex w-full justify-between">
                    <p className="text-white font-playfair">Total:</p>
                    <p className="text-secondary font-playfair">$253</p>
                </div>
                <div className="bg-bgcolor h-[1px] w-[70%]"></div>
              </div>
                <button className="flex w-full justify-center items-center p-4 bg-secondary text-white font-playfair">Proceed to Checkout</button>
            </div>
          </div>
        </div>
        <FooterSection />
      </ComponentContainer>
    </div>
  );
};

export default CartShopPage;
