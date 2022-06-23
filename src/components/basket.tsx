import React, {useContext} from 'react'
import { ProductContext } from '../context/productContext';

const BasketComponent = () => {
  const state = useContext(ProductContext)
  const basket = state?.basket

  const priceList = basket?.map((item: any) => item.price)
  const totalAmount = priceList?.reduce((a, b)=> a + b,0)

  const durationList = basket?.map((item: any) => item.duration)
  const totalDuration = durationList?.reduce((a, b)=> a + b,0)

  return (
    <div style={{
      display: basket && basket?.length > 0 ? "flex" : "none",
      width: "100vw",
      flexFlow: "row",
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "whitesmoke",
      position: "fixed",
      bottom: "0",
    }}>
      <span style={{
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "10%"
      }}>
        <h4>Montant total :</h4>
        {totalAmount} €
      </span>
      <span style={{
        display: "flex",
        flexFlow: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "10%"
      }}>
        <h4>Durée totale :</h4>
        {totalDuration} minutes
      </span>
    </div>
  )
}

export default BasketComponent