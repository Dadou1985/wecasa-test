export type Product = {
    reference: string,
    title: string,
    prestations: Array<Object>
  }[]

export type ProductContextType = {
    product: Product | null
    setProduct: React.Dispatch<React.SetStateAction<Product | null>>
}

export type ProductContextProviderProps = {
    children: React.ReactNode
}