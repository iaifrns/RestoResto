import { images } from "./images";

const dropDownMenuData: Record<string, Array<string>>= {
    "menu": [
        "MENU1",
        "MENU2",
        "MENU3",
    ],
    "pages": [
        "SHOP",
        "PRODUCT SINGLE",
        "CART",
        "GALLERY",
        "BLOG SINGLE",
        "404",
        "COMING SOON",
    ]
}

const cartData: Array<{name: string, price: string, quantity: number, image:string}> = [
    {
        image: images.LANDING2,
        name: "Spicy noodles",
        price: '$2.50',
        quantity: 2
    },
    {
        image: images.LANDING1,
        name: " seaf noodles",
        price: '$4.00',
        quantity: 1
    },
    {
        image: images.LANDING4,
        name: "Seasoned seafood",
        price: '$3.50',
        quantity: 2
    },
]

export { dropDownMenuData, cartData };