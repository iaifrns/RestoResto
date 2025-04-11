interface DefaultWhyUsType {
    image: string,
    title: string,
    desc: string
}

interface HoverWhyUsType {
    icon: string,
    text: string
}

export interface WhyUsType {
    default: DefaultWhyUsType,
    hover: HoverWhyUsType
}