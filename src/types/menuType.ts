export interface Dishe {
    title: string,
    desc: string,
    price: string
}

export interface MenuType {
    catergory: string,
    dishes: Dishe[],
    image: string
}

export interface MenuItem {
    catergory: string,
    dishes: Dishe,
    image: string
}

export interface DishDetailType {
    dishe: Dishe,
    catergory: string[],
    longDesc: string,
    num_views: number,
    num_shop: number,
    image: string
}