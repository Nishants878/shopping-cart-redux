import React, {useEffect, useState} from 'react'
import classes from './CheckOut.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutCard from '../../Components/CheckoutCard/CheckoutCard'



export default function CheckOut() {

    let  productCount = useSelector((state) => state.productCart);
    let totalNumber = productCount.length
    
    const [cart, setCart] = useState([])

    useEffect(() =>{
         setCart(productCount)
    },[productCount])

    return (
        <div className={classes.MainContainer}>
        <h1 className={classes.Title}>
          Shopping Bag
        </h1>
        <div className={classes.ProductWrapper}>
          <div className={classes.CardList}>
              <h3>Total items: {totalNumber}</h3>
              {
                 cart.map((item) =>{
                     return <CheckoutCard id={item.id} key={item.key} titlePrice={item.titlePrice} img={item.img} />
                 })
             }
          </div>
          <div className={classes.OrderBxWrapper}>
              <h3>Total Amount</h3>
              <p>Amount: Rs<span className={classes.Bold}>9598</span></p>
              <button className={classes.PlaceOrder}>Place Order</button>
          </div>
        </div>
        
       </div>
    )
}
