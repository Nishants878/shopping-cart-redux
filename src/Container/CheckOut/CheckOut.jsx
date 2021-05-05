import React from 'react'
import classes from './CheckOut.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutCard from '../../Components/CheckoutCard/CheckoutCard'



export default function CheckOut() {

    let  productCount = useSelector((state) => state.productCart);
    let temp = productCount[0]
     
    
    return (
        <div className={classes.MainContainer}>
        <h1 className={classes.Title}>
          Shopping Bag
        </h1>
        <div className={classes.ProductWrapper}>
          <div className={classes.CardList}>
              <h3>Total items: 2</h3>
              <CheckoutCard/>
          </div>
        </div>
        
       </div>
    )
}
