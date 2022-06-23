import React, { useContext} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { ProductContext } from '../context/productContext';
import BasketModal from './basketModal';
import '../css/header.css'

const Header = () => {
    const state = useContext(ProductContext)

    const handleChangeFilter = (event: SelectChangeEvent<string>) => {
        state?.setFilter(event.target.value)
    }

  return (
    <div className='header-container'>
        <img 
        src="https://www.wecasa.fr/assets/logo-header-e394c584078509790b535eb960e4b3f4bf279350ec84089bd8f80a3a779773e7.png" 
        alt="wecasa-logo"
        className='img' />
        <div className='select-basket-container'>
          <FormControl className='select'>
            <InputLabel id="demo-simple-select-label">Catégories</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state?.filter}
              label="Catégorie"
              onChange={handleChangeFilter}
            >
              <MenuItem value="Homme">Homme</MenuItem>
              <MenuItem value="Femme">Femme</MenuItem>
              <MenuItem value="Enfant">Enfant</MenuItem>
            </Select>
          </FormControl>
          <span>
            <BasketModal />
          </span>
        </div>
    </div>
  )
}

export default Header