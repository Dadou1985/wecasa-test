import React, {useState, createContext, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Product, Basket, ProductContextType, ProductContextProviderProps } from '../types/contextTypes';
import Header from '../components/header';

export const ProductContext = createContext<ProductContextType | null>(null)

export const ProductContextProvider = ({children}: ProductContextProviderProps) => {
    const [product, setProduct] = useState<Product | null>(null)
    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [filter, setFilter] = useState<string>("Homme")
    const [basket, setBasket] = useState<Basket | object[]>([])

  useEffect(() => {
    fetch('https://www.wecasa.fr/api/techtest/universe')
    .then(res => res.json())
    .then(data => setProduct(data.categories.filter((category: { title: string; }) => category.title === filter)))

    return setIsLoading(false)
  }, [filter])
    
    return(
        <ProductContext.Provider value={{product, setProduct, basket, setBasket, filter, setFilter}}>
          <Header />
            {isLoading ? <Box sx={{ display: 'flex' }}>
                             <CircularProgress />
                        </Box> : children}
        </ProductContext.Provider>
    )
}