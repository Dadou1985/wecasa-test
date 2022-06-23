import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProductContext } from '../context/productContext';
import '../css/prestation.css'

interface PrestationObject {
  reference: string,
  title: string,
  duration: number,
  price: number
}

const Prestation = () => {
    const state = useContext(ProductContext)    
    const productList = state?.product && state?.product[0].prestations

    const handleAddProduct = (item: PrestationObject) => {
       return state?.setBasket([...state.basket, item])
    }

  return (
    <div className='global-container'>
        {productList?.map((data: any) => {
          return (
            <Card className='card-container' key={data.reference}>
            <CardMedia
              component="img"
              image="https://image.freepik.com/vecteurs-libre/creation-logo-salon-coiffure-luxe_313044-6.jpg"
              alt="barbershop-logo"
              style={{height: "70%"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div className='card-body'>
                  <span>Prix: {data.price} €</span>
                  <span>Durée: {data.duration} min</span>
                </div>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant='contained' onClick={() => handleAddProduct(data)}>Ajouter</Button>
            </CardActions>
          </Card>
          )
        })}
    </div>
  )
}

export default Prestation