import React from 'react'
import classes from './CheckoutCard.module.css';
import logo from '../../Assest//Icons/airmax.png';
import plus from '../../Assest/Icons/add.svg';
import minus from '../../Assest/Icons/minus.svg'
export default function CheckoutCard(props) {
    return (
        <div className={classes.MainContainer}>
            <div className={classes.ImageWrapper}>
            <img src={props.img} alt="Shoe"/>
            </div>
            <div className={classes.TextContentWrapper}>
            <h4>Nike Shoe</h4>
            <div className={classes.IncDecWrapper}>
               <div className={classes.Decrement}>
                   <img src={minus} alt="minus"/>
               </div>
               <p>01</p>
               <div className={classes.Increment}>
               <img src={plus} alt="plus"/>
               </div>
            </div>
            <p>Amount: Rs {props.titlePrice}</p>
            </div>
            
        </div>
    )
}

