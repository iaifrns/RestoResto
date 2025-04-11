import { ItemStructureType } from "../types/inputType";
import { WhyUsType } from "../types/whyUsType";
import { images } from "./images";

const dropDownMenuData: Record<string, Array<string>> = {
  menu: ["MENU1", "MENU2", "MENU3"],
  pages: [
    "SHOP",
    "PRODUCT SINGLE",
    "CART",
    "GALLERY",
    "BLOG SINGLE",
    "404",
    "COMING SOON",
  ],
};

const cartData: Array<{
  name: string;
  price: string;
  quantity: number;
  image: string;
}> = [
  {
    image: images.LANDING2,
    name: "Spicy noodles",
    price: "$2.50",
    quantity: 2,
  },
  {
    image: images.LANDING1,
    name: " seaf noodles",
    price: "$4.00",
    quantity: 1,
  },
  {
    image: images.LANDING4,
    name: "Seasoned seafood",
    price: "$3.50",
    quantity: 2,
  },
];

const people: ItemStructureType[] = [
  {
    value: "",
    text: "Any",
  },
  {
    value: "1 Person",
    text: "1 Person",
  },
  {
    value: "2 People",
    text: "2 People",
  },
  {
    value: "3 People",
    text: "3 People",
  },
  {
    value: "4 People",
    text: "4 People",
  },
  {
    value: "5 People",
    text: "5 People",
  },
  {
    value: "Banquet",
    text: "Banquet",
  },
];

const time: ItemStructureType[] = [
  {
    value: "",
    text: "Any",
  },
  {
    value: "10 Am",
    text: "10 Am",
  },
  {
    value: "11 Am",
    text: "11 Am",
  },
  {
    value: "12 Am",
    text: "12 Am",
  },
  {
    value: "1 Pm",
    text: "1 Pm",
  },
  {
    value: "2 Pm",
    text: "2 Pm",
  },
  {
    value: "3 Pm",
    text: "3 Pm",
  },
  {
    value: "4 Pm",
    text: "4 Pm",
  },
  {
    value: "5 Pm",
    text: "5 Pm",
  },
  {
    value: "6 Pm",
    text: "6 Pm",
  },
  {
    value: "7 Pm",
    text: "7 Pm",
  },
  {
    value: "8 Pm",
    text: "8 Pm",
  },
  {
    value: "9 Pm",
    text: "9 Pm",
  },
  {
    value: "10 Pm",
    text: "10 Pm",
  },
];

const whyUsData: WhyUsType[] = [
  {
    default: {
      title: "Daily New Fresh Menus",
      desc: "START EATING BETTER",
      image: images.WhyUsImg1,
    },
    hover: {
      icon: "ph:fish-light",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed nobis praesentium et excepturi laudantium ipsam",
    },
  },
  {
    default: {
      title: "Fresh Ingredient, Tasty Meals",
      desc: "QUALITY IS THE HEART",
      image: images.WhyUsImg2,
    },
    hover: {
      icon: "emojione-monotone:carrot",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed nobis praesentium et excepturi laudantium ipsam",
    },
  },
  {
    default: {
      title: "Creative & Talented Chefs",
      desc: "HOT & READY TO SERVE",
      image: images.WhyUsImg3,
    },
    hover: {
      icon: "game-icons:knife-fork",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed nobis praesentium et excepturi laudantium ipsam",
    },
  },
];

export { dropDownMenuData, cartData, people, time, whyUsData };
