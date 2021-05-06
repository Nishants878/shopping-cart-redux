import React, {useEffect, useState} from 'react'
import classes from './CheckOut.module.css';
import {  useSelector, useDispatch } from 'react-redux';
import CheckoutCard from '../../Components/CheckoutCard/CheckoutCard';

import { checkOutAct } from '../../redux/reducer';
import { useHistory } from 'react-router-dom'



export default function CheckOut(props) {

    let  productCount = useSelector((state) => state.productCart);
    let totalNumber = productCount.length;
   const history = useHistory()
   const dispatch = useDispatch()
  
    
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

  

    useEffect(() =>{
         setCart(productCount);
         document.title = "Cart";

        const totalForCurrentProduct = productCount.map((item) =>{
            return item.count*item.titlePrice
        });
        const totalAddition = totalForCurrentProduct.reduce((acc, val) =>{
            return acc + val
        },0)

      
        setTotalPrice(totalAddition);
        

    },[productCount]);


    const checkOutHandler = () =>{
        dispatch(
            checkOutAct({
                val:"check"
            })
        );

        alert("Order Placed");
        history.push("/");
    }

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
                     return <CheckoutCard id={item.id} key={item.key} titlePrice={item.titlePrice} img={item.img}  />
                 })
             }
          </div>
          <div className={classes.OrderBxWrapper}>
              <h3>Total Amount</h3>
              <p>Amount: Rs<span className={classes.Bold}>{totalPrice}</span></p>
              <button onClick={checkOutHandler} className={classes.PlaceOrder}>Place Order</button>
          </div>
        </div>
        
       </div>
    )
}
