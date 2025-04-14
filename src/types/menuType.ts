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