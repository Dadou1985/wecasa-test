import React, {useState, createContext, useEffect} from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Product, ProductContextType, ProductContextProviderProps } from '../types/contextTypes';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export const ProductContext = createContext<ProductContextType | null>(null)

export const ProductContextProvider = ({children}: ProductContextProviderProps) => {
    const [product, setProduct] = useState<Product | null>(null)
    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [filter, setFilter] = useState<string>("Homme")
    const [basket, setBasket] = useState<Product | Object[]>([])

  useEffect(() => {
    fetch('https://www.wecasa.fr/api/techtest/universe')
    .then(res => res.json())
    .then(data => setProduct(data.categories.filter((category: { title: string; }) => category.title === filter)))

    return setIsLoading(false)
  }, [filter])

  const handleChangeFilter = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value)
}
    
    return(
        <ProductContext.Provider value={{product, setProduct, basket, setBasket}}>
          <header style={{
              display: "flex",
              flexFlow: "row",
              justifyContent: "space-around",
              alignItems: "center",
              padding: "2vh 0vh 2vh 0vh"
          }}>
              <img 
              src="https://www.wecasa.fr/assets/wecasa-social-logo-1b7d4061128ed672ca25a962469022d37e790ef445c4151ed588a1cae1d7cf93.jpg" 
              alt="wecasa-logo"
              style={{width: "5vw"}} />
              <FormControl style={{width: "10vw"}}>
                <InputLabel id="demo-simple-select-label">Catégories</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  label="Catégorie"
                  onChange={handleChangeFilter}
                >
                  <MenuItem value="Homme">Homme</MenuItem>
                  <MenuItem value="Femme">Femme</MenuItem>
                  <MenuItem value="Enfant">Enfant</MenuItem>
                </Select>
              </FormControl>
          </header>
            {isLoading ? <Box sx={{ display: 'flex' }}>
                             <CircularProgress />
                        </Box> : children}
        </ProductContext.Provider>
    )
}