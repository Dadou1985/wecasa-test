import React, { useState, useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Divider from '@mui/material/Divider';
import { Product } from '../types/contextTypes';
import { ProductContext } from '../context/productContext';

const Prestation = () => {
    const product = useContext(ProductContext)
    console.log(product?.product && product?.product[0].prestations)


  return (
    <div>
        {}
    </div>
  )
}

export default Prestation