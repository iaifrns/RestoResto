interface NormalInputType {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    type?: string,
}

interface ItemStructureType {
    value: string,
    text: string
}

interface SelectInputType {
    value: string,
    onChange: (e: string) => void,
    placeholder?: string,
    data: ItemStructureType[],
}

interface inputType {
    value: string,
    placeholder?: string,
    type?: string,
}

export type { NormalInputType, inputType, SelectInputType, ItemStructureType }