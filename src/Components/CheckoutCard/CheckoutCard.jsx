import React, { useState, useEffect } from 'react'
import classes from './CheckoutCard.module.css';

import plus from '../../Assest/Icons/add.svg';
import minus from '../../Assest/Icons/minus.svg';
import { deleteProduct, incrementProduct, amountAdder } from '../../redux/reducer';
import { useDispatch, useSelector } from 'react-redux'


export default function CheckoutCard(props) {

    const [quantity, setQuantity] = useState(1)
    const [amount, setAmount] = useState(0)

    const dispatch = useDispatch()
   let product = useSelector((state) => state.productCart);
   let productQuantity = product.find((user) => user.id === props.id);

    useEffect(() =>{

        

        if(productQuantity){
          
            setQuantity(productQuantity.count);
            setAmount(productQuantity.count * productQuantity.titlePrice );
          
           };

        
          
    },[productQuantity]);

    

  
    const removeProduct = () =>{
        dispatch(
            deleteProduct({
                id: props.id
            })
        )
    };

    const incrementHandler = () =>{
        dispatch(
            incrementProduct({
                id: props.id
            })
        )
    };


    


    return (
        <div className={classes.MainContainer}>
            <div className={classes.ImageWrapper}>
            <img src={props.img} alt="Shoe"/>
            </div>
            <div className={classes.TextContentWrapper}>
            <h4>Nike Shoe</h4>
            <div className={classes.IncDecWrapper}>
               <div onClick={removeProduct} className={classes.Decrement}>
                   <img src={minus} alt="minus"/>
               </div>
               <p>{quantity}</p>
               <div onClick={incrementHandler} className={classes.Increment}>
               <img src={plus} alt="plus"/>
               </div>
            </div>
            <p>Amount: Rs {amount}</p>
            </div>
            
        </div>
    )
}

