import React, {useEffect, useState} from 'react'
import classes from './HomePage.module.css';
import ProductCard from '../../Components/ProductCard/ProductCard'
import { cardData } from '../../Assest/Constant'


export default function HomePage() {
    console.log(cardData)

   const [cardDetails, setCardDetails] = useState([])

   useEffect(() =>{
       setCardDetails(cardData);
   },[])

    return (
        <div className={classes.MainContainer}>
         <h1 className={classes.Title}>
             Products
         </h1>
         <div className={classes.ProductWrapper}>
             {
                 cardDetails.map((item) =>{
                     return <ProductCard id={item.id} key={item.key} titlePrice={item.titlePrice} img={item.img} color={item.color} />
                 })
             }
         </div>
         
        </div>
    )
}
