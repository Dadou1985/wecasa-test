export type Product = {
    reference: string,
    title: string,
    prestations: Array<Object>
  }[]

export type Basket = {
    reference: string,
    title: string,
    duration: number,
    price: number
  }[]

export type ProductContextType = {
    product: Product | null
    setProduct: React.Dispatch<React.SetStateAction<Product | null>>
    basket: Basket | Object[]
    setBasket: React.Dispatch<React.SetStateAction<Basket | Object[]>>
    filter: string
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

export type ProductContextProviderProps = {
    children: React.ReactNode
}