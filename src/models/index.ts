export interface IProduct {
    icon: string
    id: number
    title: string
    description: string
    size: 'standart' | 'double'
    price: number
    vegan: boolean
}