import { MenuCategory } from "../enum/menu";
import { CartCategoryType, CartImgItem } from "../types/cartType";
import { ChefInfoType } from "../types/chefInfoType";
import { CommentType } from "../types/comment";
import { DishInfoType } from "../types/disheInfoType";
import { ItemStructureType } from "../types/inputType";
import { DishDetailType, Dishe, MenuItem, MenuType } from "../types/menuType";
import { EventType } from "../types/occation";
import { TestimonyType } from "../types/testimonyType";
import { WhyUsType } from "../types/whyUsType";
import { images } from "./images";
import routesPath from "./routes";

const dropDownMenuData: Record<string, Array<Record<string, string>>> = {
  menu: [
    { text: "MENU1", to: routesPath.DEFAULTMENU },
    { text: "MENU2", to: routesPath.MENU },
    { text: "MENU3", to: "" },
  ],
  pages: [
    { text: "SHOP", to: routesPath.SHOP },
    { text: "PRODUCT SINGLE", to: routesPath.SINPLEPRODUCT },
    { text: "CART", to: "" },
    { text: "GALLERY", to: "" },
    { text: "BLOG SINGLE", to: "" },
    { text: "404", to: "" },
    { text: "COMING SOON", to: "" },
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

const mainDisheData: Dishe[] = [
  {
    title: "Soft shell crab",
    desc: "Granny help you treat yourself with a different meal everyday",
    price: "$29",
  },
  {
    title: "Miso chicken",
    desc: "Etiam tempus felis eros, id lobortis turpis",
    price: "$16",
  },
  {
    title: "Fish pie",
    desc: "usce tempus tempus maximus volutpat",
    price: "$09",
  },
  {
    title: "Salmon riverland",
    desc: "Fusce a tellus tellus. Praesent neque arcu, efficitur sit amet",
    price: "$45",
  },
];

const StarterData: Dishe[] = [
  {
    title: "Fried Potatoe",
    desc: "Granny help you treat yourself with a different meal everyday",
    price: "$55",
  },
  {
    title: "Doner Burger",
    desc: "Etiam tempus felis eros, id lobortis turpis",
    price: "$32",
  },
  {
    title: "Steak Filet",
    desc: "usce tempus tempus maximus volutpat",
    price: "$10",
  },
  {
    title: "Cayenne Shrimp",
    desc: "usce tempus tempus maximus volutpat",
    price: "$08",
  },
];

const menuData: MenuType[] = [
  {
    catergory: MenuCategory.MAINDISHES,
    dishes: mainDisheData,
    image: images.menuImg.MENUIMG1,
  },
  {
    catergory: MenuCategory.STARTER,
    dishes: StarterData,
    image: images.menuImg.MENUIMG2,
  },
  {
    catergory: MenuCategory.DESSERTS,
    dishes: mainDisheData,
    image: images.menuImg.MENUIMG3,
  },
  {
    catergory: MenuCategory.SEAFOOD,
    dishes: mainDisheData,
    image: images.menuImg.MENUIMG4,
  },
  {
    catergory: MenuCategory.DRINKS,
    dishes: mainDisheData,
    image: images.menuImg.MENUIMG5,
  },
];

const chefInfo: ChefInfoType[] = [
  {
    name: "Kevin Nounou",
    position: "Master chef in New York",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed nobis praesentium et excepturi laudantium ipsam",
    img: images.CHEF1,
  },
  {
    name: "Franc Austin",
    position: "Master chef in Florida",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed nobis praesentium et excepturi laudantium ipsam",
    img: images.CHEF2,
  },
  {
    name: "Taylor Roberts",
    position: "Master chef in Maiami",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed nobis praesentium et excepturi laudantium ipsam",
    img: images.CHEF3,
  },
];

const eventData: EventType[] = [
  {
    eventName: "Freedom Day Celebration",
    date: "14 October 2022",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed nobis praesentium et excepturi laudantium ipsam",
  },
  {
    eventName: "Jass Band Live Event",
    date: "16 November 2022",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed nobis praesentium et excepturi laudantium ipsam",
  },
  {
    eventName: "Wine and Steak Day",
    date: "24 November 2022",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed nobis praesentium et excepturi laudantium ipsam",
  },
  {
    eventName: "Sea Food Day",
    date: "10 December 2022",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed nobis praesentium et excepturi laudantium ipsam",
  },
  {
    eventName: "Christmas Day",
    date: "25 December 2022",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit sed nobis praesentium et excepturi laudantium ipsam",
  },
];

const testimonyData: TestimonyType[] = [
  {
    img: images.GIRL1,
    name: "Kevin Kenfack",
    text: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. ",
  },
  {
    img: images.MAN2,
    name: "Franc Nsini",
    text: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. ",
  },
  {
    img: images.MAN1,
    name: "Ndambose Daniel",
    text: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. ",
  },
  {
    img: images.GIRL2,
    name: "Christina Agie",
    text: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. ",
  },
  {
    img: images.MAN3,
    name: "Max Lilian",
    text: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. ",
  },
];

const dishes: MenuItem[] = [
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.IMG1,
    dishes: {
      desc: "Seasoned with an herb crust, served with au jus and handcarved to order.",
      title: "Soft shell crab",
      price: "$34",
    },
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.IMG2,
    dishes: {
      desc: "Usce tempus tempus maximus volutpat",
      title: "Victoria's Filet Mignon",
      price: "$14",
    },
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.IMG3,
    dishes: {
      desc: "Integer nec lacinia arcu, vel rhoncus leo aliquet.",
      title: "Fish pie",
      price: "$27",
    },
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.WhyUsImg1,
    dishes: {
      desc: "Pellentesque eros mi, faucibus tempor scelerisque nec, efficitur nec nunc.",
      title: "Prime Cuts of Beef",
      price: "$21",
    },
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.WhyUsImg2,
    dishes: {
      desc: "Our tender, juicy filet paired with a steamed lobster tail. Served with your choice of signature potato and one freshly made side.",
      title: "Miso chicken",
      price: "$18",
    },
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.WhyUsImg3,
    dishes: {
      desc: "Pellentesque eros mi, faucibus tempor scelerisque nec, efficitur nec nunc.",
      title: "Garden salad",
      price: "$33",
    },
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.LANDING1,
    dishes: {
      desc: "Fusce a tellus tellus. Praesent neque arcu, efficitur sit amet",
      title: "Salmon Riverland",
      price: "$15",
    },
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.LANDING2,
    dishes: {
      desc: "Fusce a tellus tellus. Praesent neque arcu, efficitur sit amet",
      title: "Slow-Roasted Prime Rib",
      price: "$19",
    },
  },
  {
    catergory: MenuCategory.STARTER,
    image: images.LANDING3,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Fried Potatoes",
      price: "$27",
    },
  },
  {
    catergory: MenuCategory.STARTER,
    image: images.LANDING4,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Steak Filet",
      price: "$24",
    },
  },
  {
    catergory: MenuCategory.STARTER,
    image: images.IMG1,
    dishes: {
      desc: "Etiam fermentum justo nec auctor pretium",
      title: "Meatball tagliatelle",
      price: "$22",
    },
  },
  {
    catergory: MenuCategory.STARTER,
    image: images.LANDING1,
    dishes: {
      desc: "Etiam tempus felis eros, id lobortis turpis",
      title: "Doner Burger",
      price: "$11",
    },
  },
  {
    catergory: MenuCategory.DESSERTS,
    image: images.WhyUsImg1,
    dishes: {
      desc: "Cum sociis natoque penatibus et magnis",
      title: "Cayenne Shrimp",
      price: "$26",
    },
  },
  {
    catergory: MenuCategory.DESSERTS,
    image: images.IMG2,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Soft shell crab",
      price: "$61",
    },
  },
  {
    catergory: MenuCategory.DESSERTS,
    image: images.LANDING2,
    dishes: {
      desc: "usce tempus tempus maximus volutpat",
      title: "Creme Brulee",
      price: "$34",
    },
  },
  {
    catergory: MenuCategory.DESSERTS,
    image: images.WhyUsImg2,
    dishes: {
      desc: "Etiam tempus felis eros, id lobortis turpis",
      title: "Tarte Tatin",
      price: "$21",
    },
  },
  {
    catergory: MenuCategory.DESSERTS,
    image: images.LANDING3,
    dishes: {
      desc: "usce tempus tempus maximus volutpat",
      title: "Lemon Meringue",
      price: "$13",
    },
  },
  {
    catergory: MenuCategory.SEAFOOD,
    image: images.IMG3,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Lobster with melted mozarella",
      price: "$16",
    },
  },
  {
    catergory: MenuCategory.SEAFOOD,
    image: images.WhyUsImg3,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Filet De Saumon",
      price: "$44",
    },
  },
  {
    catergory: MenuCategory.SEAFOOD,
    image: images.LANDING4,
    dishes: {
      desc: "Etiam tempus felis eros, id lobortis turpis",
      title: "Butterfly fried shrimps platter",
      price: "$35",
    },
  },
  {
    catergory: MenuCategory.SEAFOOD,
    image: images.IMG1,
    dishes: {
      desc: "Etiam tempus felis eros, id lobortis turpis",
      title: "Chapel Down",
      price: "$43",
    },
  },
  {
    catergory: MenuCategory.DRINKS,
    image: images.WhyUsImg1,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Kiwi Coctail",
      price: "$16",
    },
  },
  {
    catergory: MenuCategory.DRINKS,
    image: images.IMG2,
    dishes: {
      desc: "usce tempus tempus maximus volutpat",
      title: "Red Mojitos",
      price: "$19",
    },
  },
  {
    catergory: MenuCategory.DRINKS,
    image: images.WhyUsImg2,
    dishes: {
      desc: "usce tempus tempus maximus volutpat",
      title: "Italian Soup",
      price: "$12",
    },
  },
  {
    catergory: MenuCategory.DRINKS,
    image: images.LANDING1,
    dishes: {
      desc: "Etiam tempus felis eros, id lobortis turpis",
      title: "Summer Beer",
      price: "$13",
    },
  },
  {
    catergory: MenuCategory.DRINKS,
    image: images.IMG3,
    dishes: {
      desc: "usce tempus tempus maximus volutpat",
      title: "Cabernet Sauvignon",
      price: "$08",
    },
  },
];

const dishesDetailInfo: DishInfoType[] = [
  {
    name: "Pasta Receipt",
    date: "12 may 2024",
    image: images.WhyUsImg2,
    desc: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. Sed viverra dolor sed dolor placerat ornare ut . Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae.",
    views: 567,
    num_comment: 3,
  },
  {
    name: "Burger Big Daddy Receipt",
    date: "12 Jan 2025",
    image: images.WhyUsImg1,
    desc: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. Sed viverra dolor sed dolor placerat ornare ut . Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae.",
    views: 227,
    num_comment: 3,
  },
  {
    name: "The Secret Ingredient",
    date: "02 Feb 2025",
    image: images.WhyUsImg3,
    desc: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. Sed viverra dolor sed dolor placerat ornare ut . Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae.",
    views: 567,
    num_comment: 3,
  },
  {
    name: "Jazz Band Bingo",
    date: "03 Apr 2025",
    image: images.IMG3,
    desc: "Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. Praesent eu massa vel diam laoreet elementum ac sed felis. Donec suscipit ultricies risus sed mollis. Donec volutpat porta risus posuere imperdiet. Sed viverra dolor sed dolor placerat ornare ut . Integer iaculis tellus nulla, quis imperdiet magna venenatis vitae.",
    views: 687,
    num_comment: 10,
  },
];

const cartItemImgList: CartImgItem[] = [
  {
    image: images.LANDING2,
    title: "Snowy Mountains Trip",
    date: "3 Feb 2023",
    num_comment: 0,
  },
  {
    image: images.LANDING1,
    title: "Snowy Mountains Trip",
    date: "04 Avril 2023",
    num_comment: 0,
  },
  {
    image: images.LANDING4,
    title: "Snowy Mountains Trip",
    date: "15 Dev 2023",
    num_comment: 0,
  },
];

const tags: Array<string> = [
  "lifeStyle",
  "Travel",
  "Trip",
  "Outdoor",
  "Camping",
  "Photos",
  "Adventure",
];

const dishCategoryList: CartCategoryType[] = [
  { text: "Seafood", num: 14 },
  { text: "Drinks", num: 22 },
  { text: "Desserts", num: 10 },
  { text: "Starter", num: 9 },
  { text: "Main Dishes", num: 5 },
];

const cartSocialMediaIconList: Array<string> = [
  "line-md:facebook",
  "ic:twotone-tiktok",
  "bxl:instagram-alt",
  "formkit:linkedin",
  "simple-icons:indeed",
];

const shopItems: DishDetailType[] = [
  {
    dishe: {
      title: "Soft shell crab",
      desc: "Seasoned with an herb crust, served with au jus and handcarved to order.",
      price: "$29",
    },
    catergory: [dishCategoryList[0].text, dishCategoryList[4].text],
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    num_shop: 256,
    num_views: 567,
    image: images.SHOP.ArticleImg1,
  },
  {
    dishe: {
      title: "Fish pie",
      desc: "Our tender, juicy filet paired with a steamed tempor lobster tail.",
      price: "$62",
    },
    catergory: [dishCategoryList[3].text, dishCategoryList[2].text],
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    num_shop: 137,
    num_views: 394,
    image: images.SHOP.ArticleImg2,
  },
  {
    dishe: {
      title: "Victoria's Filet Mignon",
      desc: "Pellentesque eros mi, faucibus tempor scelerisque nec, efficitur nec nunc.",
      price: "$18",
    },
    catergory: [dishCategoryList[0].text],
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    num_shop: 345,
    num_views: 893,
    image: images.SHOP.ArticleImg3,
  },
  {
    dishe: {
      title: "Prime Cuts of Beef",
      desc: "Granny help you treat yourself with a empor scelerisque different meal everyday.",
      price: "$31",
    },
    catergory: [dishCategoryList[2].text, dishCategoryList[3].text],
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    num_shop: 43,
    num_views: 139,
    image: images.SHOP.ArticleImg4,
  },
  {
    dishe: {
      title: "Miso chicken",
      desc: "Seasoned with an herb crust, served with au empor scelerisque jus and handcarved to order.",
      price: "$67",
    },
    catergory: [
      dishCategoryList[3].text,
      dishCategoryList[0].text,
      dishCategoryList[2].text,
    ],
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    num_shop: 134,
    num_views: 452,
    image: images.SHOP.ArticleImg5,
  },
  {
    dishe: {
      title: "Salmon Riverland",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
      price: "$29",
    },
    catergory: [dishCategoryList[2].text, dishCategoryList[1].text],
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    num_shop: 145,
    num_views: 675,
    image: images.SHOP.ArticleImg6,
  },
  {
    dishe: {
      title: "Slow-Roasted Prime Rib",
      desc: "Seasoned with an herb crust, served with au jus and handcarved to order, crust, served .",
      price: "$44",
    },
    catergory: [dishCategoryList[4].text],
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    num_shop: 233,
    num_views: 457,
    image: images.SHOP.ArticleImg7,
  },
  {
    dishe: {
      title: "Meatball tagliatelle",
      desc: "Granny help you treat yourself with a empor scelerisque different meal everyday.",
      price: "$39",
    },
    catergory: [dishCategoryList[0].text, dishCategoryList[1].text],
    longDesc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare sem sed quam tempus aliquet vitae eget dolor. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Proin eu ultrices libero. Curabitur vulputate vestibulum elementum. Suspendisse id neque a nibh mollis blandit. Quisque varius eros ac purus dignissim. Praesent eros turpis, commodo vel justo at, pulvinar mollis eros. Mauris aliquet eu quam id ornare. Morbi ac quam enim. Cras vitae nulla condimentum, semper dolor non, faucibus dolor. Vivamus adipiscing eros quis orci fringilla, sed pretium lectus viverra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    num_shop: 133,
    num_views: 456,
    image: images.WhyUsImg3,
  },
];

const comments: CommentType[] = [
  {
    name: "Liza Svenik",
    date: "Ferbuary 02, 2025 at 07:39 am",
    image: images.MAN3,
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.",
  },
  {
    name: "Anty",
    date: "January 02, 2025 at 07:39 am",
    image: images.GIRL2,
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo.",
  },
];

export {
  cartSocialMediaIconList,
  dishCategoryList,
  cartItemImgList,
  tags,
  dropDownMenuData,
  cartData,
  people,
  time,
  whyUsData,
  menuData,
  chefInfo,
  eventData,
  testimonyData,
  dishes,
  dishesDetailInfo,
  shopItems,
  comments
};
