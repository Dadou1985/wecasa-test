import React, { useState, useContext, useRef, MutableRefObject } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Product } from '../types/contextTypes';
import { ProductContext } from '../context/productContext';

type PrestationObject = {
  reference: string,
  title: string,
  duration: number,
  price: number
}

const Prestation = () => {
    const state = useContext(ProductContext)
    console.log(state?.product && state?.product[0].prestations)
    console.log("basket", state?.basket)
    const currentBasket: MutableRefObject<PrestationObject[]> = useRef([])
    
    const productList = state?.product && state?.product[0].prestations

    const handleAddProduct = (item: PrestationObject) => {
       currentBasket?.current.push(item)
       console.log("++++++++", currentBasket.current)
       return state?.setBasket(currentBasket.current)
    }

    const handleRemoveProduct = (ref: string) => {
       const itemIndex = currentBasket?.current.findIndex((item: PrestationObject) => item.reference === ref)
       console.log("--------", currentBasket.current.splice(itemIndex, 1))
       return state?.setBasket(currentBasket.current.splice(itemIndex, 1))
    }

  return (
    <div style={{
      display: "flex",
      flexFlow: "row wrap",
      padding: "2%"
    }}>
        {productList?.map((data: any) => {
          return (
            <Card style={{width: "20vw", height: "40vh", margin: "1%"}} key={data.reference}>
            <CardMedia
              component="img"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
              style={{height: "60%"}}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {data.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <div style={{
                  display: "flex",
                  flexFlow: "row",
                  justifyContent: "space-between"
                }}>
                  <span>Prix: {data.price} €</span>
                  <span>Durée: {data.duration} min</span>
                </div>
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleAddProduct(data)}>Ajouter</Button>
              <Button size="small" onClick={() => handleRemoveProduct(data.reference)}>Supprimer</Button>
            </CardActions>
          </Card>
          )
        })}
    </div>
  )
}

export default Prestation