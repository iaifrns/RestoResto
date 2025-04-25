import { MenuCategory } from "../enum/menu";
import { ChefInfoType } from "../types/chefInfoType";
import { ItemStructureType } from "../types/inputType";
import { Dishe, MenuItem, MenuType } from "../types/menuType";
import { EventType } from "../types/occation";
import { TestimonyType } from "../types/testimonyType";
import { WhyUsType } from "../types/whyUsType";
import { images } from "./images";
import routesPath from "./routes";

const dropDownMenuData: Record<string, Array<Record<string, string>>> = {
  menu: [{text: "MENU1", to: routesPath.DEFAULTMENU}, {text: "MENU2", to: ''}, {text: "MENU3", to: ''}],
  pages: [
    {text: "SHOP", to: ''},
    {text: "PRODUCT SINGLE", to: ''},
    {text: "CART", to: ''},
    {text: "GALLERY", to: ''},
    {text: "BLOG SINGLE", to: ''},
    {text: "404", to: ''},
    {text: "COMING SOON", to: ''}
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
    catergory: "Main dishes",
    dishes: mainDisheData,
    image: images.menuImg.MENUIMG1,
  },
  {
    catergory: "Starter",
    dishes: StarterData,
    image: images.menuImg.MENUIMG2,
  },
  {
    catergory: "Desserts",
    dishes: mainDisheData,
    image: images.menuImg.MENUIMG3,
  },
  {
    catergory: "Sea Food",
    dishes: mainDisheData,
    image: images.menuImg.MENUIMG4,
  },
  {
    catergory: "Drinks",
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
      price: "$34"
    }
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.IMG2,
    dishes: {
      desc: "Usce tempus tempus maximus volutpat",
      title: "Victoria's Filet Mignon",
      price: "$14"
    }
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.IMG3,
    dishes: {
      desc: "Integer nec lacinia arcu, vel rhoncus leo aliquet.",
      title: "Fish pie",
      price: "$27"
    }
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.WhyUsImg1,
    dishes: {
      desc: "Pellentesque eros mi, faucibus tempor scelerisque nec, efficitur nec nunc.",
      title: "Prime Cuts of Beef",
      price: "$21"
    }
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.WhyUsImg2,
    dishes: {
      desc: "Our tender, juicy filet paired with a steamed lobster tail. Served with your choice of signature potato and one freshly made side.",
      title: "Miso chicken",
      price: "$18"
    }
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.WhyUsImg3,
    dishes: {
      desc: "Pellentesque eros mi, faucibus tempor scelerisque nec, efficitur nec nunc.",
      title: "Garden salad",
      price: "$33"
    }
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.LANDING1,
    dishes: {
      desc: "Fusce a tellus tellus. Praesent neque arcu, efficitur sit amet",
      title: "Salmon Riverland",
      price: "$15"
    }
  },
  {
    catergory: MenuCategory.MAINDISHES,
    image: images.LANDING2,
    dishes: {
      desc: "Fusce a tellus tellus. Praesent neque arcu, efficitur sit amet",
      title: "Slow-Roasted Prime Rib",
      price: "$19"
    }
  },
  {
    catergory: MenuCategory.STARTER,
    image: images.LANDING3,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Fried Potatoes",
      price: "$27"
    }
  },
  {
    catergory: MenuCategory.STARTER,
    image: images.LANDING4,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Steak Filet",
      price: "$24"
    }
  },
  {
    catergory: MenuCategory.STARTER,
    image: images.IMG1,
    dishes: {
      desc: "Etiam fermentum justo nec auctor pretium",
      title: "Meatball tagliatelle",
      price: "$22"
    }
  },
  {
    catergory: MenuCategory.STARTER,
    image: images.LANDING1,
    dishes: {
      desc: "Etiam tempus felis eros, id lobortis turpis",
      title: "Doner Burger",
      price: "$11"
    }
  },
  {
    catergory: MenuCategory.DESSERTS,
    image: images.WhyUsImg1,
    dishes: {
      desc: "Cum sociis natoque penatibus et magnis",
      title: "Cayenne Shrimp",
      price: "$26"
    }
  },
  {
    catergory: MenuCategory.DESSERTS,
    image: images.IMG2,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Soft shell crab",
      price: "$61"
    }
  },
  {
    catergory: MenuCategory.DESSERTS,
    image: images.LANDING2,
    dishes: {
      desc: "usce tempus tempus maximus volutpat",
      title: "Creme Brulee",
      price: "$34"
    }
  },
  {
    catergory: MenuCategory.DESSERTS,
    image: images.WhyUsImg2,
    dishes: {
      desc: "Etiam tempus felis eros, id lobortis turpis",
      title: "Tarte Tatin",
      price: "$21"
    }
  },
  {
    catergory: MenuCategory.DESSERTS,
    image: images.LANDING3,
    dishes: {
      desc: "usce tempus tempus maximus volutpat",
      title: "Lemon Meringue",
      price: "$13"
    }
  },
  {
    catergory: MenuCategory.SEAFOOD,
    image: images.IMG3,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Lobster with melted mozarella",
      price: "$16"
    }
  },
  {
    catergory: MenuCategory.SEAFOOD,
    image: images.WhyUsImg3,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Filet De Saumon",
      price: "$44"
    }
  },
  {
    catergory: MenuCategory.SEAFOOD,
    image: images.LANDING4,
    dishes: {
      desc: "Etiam tempus felis eros, id lobortis turpis",
      title: "Butterfly fried shrimps platter",
      price: "$35"
    }
  },
  {
    catergory: MenuCategory.SEAFOOD,
    image: images.IMG1,
    dishes: {
      desc: "Etiam tempus felis eros, id lobortis turpis",
      title: "Chapel Down",
      price: "$43"
    }
  },
  {
    catergory: MenuCategory.DRINKS,
    image: images.WhyUsImg1,
    dishes: {
      desc: "Granny help you treat yourself with a different meal everyday",
      title: "Kiwi Coctail",
      price: "$16"
    }
  },
  {
    catergory: MenuCategory.DRINKS,
    image: images.IMG2,
    dishes: {
      desc: "usce tempus tempus maximus volutpat",
      title: "Red Mojitos",
      price: "$19"
    }
  },
  {
    catergory: MenuCategory.DRINKS,
    image: images.WhyUsImg2,
    dishes: {
      desc: "usce tempus tempus maximus volutpat",
      title: "Italian Soup",
      price: "$12"
    }
  },
  {
    catergory: MenuCategory.DRINKS,
    image: images.LANDING1,
    dishes: {
      desc: "Etiam tempus felis eros, id lobortis turpis",
      title: "Summer Beer",
      price: "$13"
    }
  },
  {
    catergory: MenuCategory.DRINKS,
    image: images.IMG3,
    dishes: {
      desc: "usce tempus tempus maximus volutpat",
      title: "Cabernet Sauvignon",
      price: "$08"
    }
  },
]

export {
  dropDownMenuData,
  cartData,
  people,
  time,
  whyUsData,
  menuData,
  chefInfo,
  eventData,
  testimonyData,
  dishes
};
