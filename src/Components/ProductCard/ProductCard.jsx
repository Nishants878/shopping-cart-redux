import React from 'react'
import classes from './ProductCard.module.css';


import { useDispatch } from 'react-redux';
import { productAdded } from '../../redux/reducer'



export default function ProductCard(props) {

    const dispatch = useDispatch();
    const handler = () =>{
       dispatch(
           productAdded({
               id:props.id,
               titlePrice:props.titlePrice,
               img:props.img,
               count:props.count +1
           })
       )
    }
    console.log(props)
    return (
        <div className={classes.MainContainer}>
           <div style={{background:"#EBEAEF" }} className={classes.container}>
        <div style={{background:props.color }} className={[classes.card, classes.card1].join(' ')}>
            <div className={classes.imgBx}>
               <img src={props.img} alt="Shoe"/>
            </div>
            <div className={classes.ContentBox}>
                <h2>₹{props.titlePrice}</h2>
                <div onClick={handler}  className={classes.Link} >Buy</div>
                </div>
               
        </div>
       
    </div>  
        </div>
    )
}
