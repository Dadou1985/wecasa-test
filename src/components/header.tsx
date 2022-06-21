import React, {useState, useContext} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ProductContext } from '../context/productContext';
import { Product } from '../types/contextTypes';


const Header = () => {
    const [filter, setFilter] = useState("Homme")
    const product = useContext(ProductContext)

    const handleChangeFilter = (event: SelectChangeEvent<string>) => {
        let productFiltered = product?.product?.filter(product => product.title === filter)
        setFilter(event.target.value)
    }

  return (
    <div style={{
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
    </div>
  )
}

export default Header