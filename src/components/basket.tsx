import React, {useContext} from 'react'
import { ProductContext } from '../context/productContext';
import "../css/basket.css"

const BasketComponent = () => {
  const state = useContext(ProductContext)
  const basket = state?.basket

  const priceList = basket?.map((item: any) => item.price)
  const totalAmount = priceList?.reduce((a, b)=> a + b,0)

  const durationList = basket?.map((item: any) => item.duration)
  const totalDuration = durationList?.reduce((a, b)=> a + b,0)

  return (
    <div style={{display: basket && basket?.length > 0 ? "flex" : "none"}}
    className='basket-container'>
      <span className='basket-box'>
        <h4 data-testid="heading-1">Montant total :</h4>
        {totalAmount} €
      </span>
      <span className='basket-box'>
        <h4 data-testid="heading-2">Durée totale :</h4>
        {totalDuration} minutes
      </span>
    </div>
  )
}

export default BasketComponent