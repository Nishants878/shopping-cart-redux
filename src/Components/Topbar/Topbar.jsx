import React from 'react'
import classes from './Topbar.module.css';
import {Link} from 'react-router-dom';
import cart from '../../Assest/Icons/cart.svg'
import {  useSelector } from 'react-redux';





export default function Topbar() {


    let  productCount = useSelector((state) => state.productCart);
     let circleNumber = productCount.length;
   


    return (
        <div className={classes.MainContainer}>
        <div className={classes.NavBar}>
            <div className={classes.LeftFlexContainer}>
                  <div className={classes.NavMenuWrapper}>
                  <Link className={classes.IconAndLinkWrapper} to="/">
                     
                     <p className={classes.PageLinkName}>Home</p>
                     </Link>
                     <Link className={classes.IconAndLinkWrapper} to="#">
                     
                     <p className={classes.PageLinkName}>Contact Us</p>
                  
                     </Link>
                     <Link className={classes.IconAndLinkWrapper} to="#">
                     
                     <p className={classes.PageLinkName}>Help</p>
                  
                     </Link>
                  </div>
            </div>
            <div className={classes.RightFlexContainer}>
                <Link to="/cart" className={classes.ShoppingCartWrapper}>
                    <div className={classes.ProductsIndicatorWrapper}>
                        <p>{circleNumber}</p>
                    </div>
                    <div className={classes.CartContainer}>
                        
                    <img src={cart} alt="cart"/>
                    </div>
              
                </Link>
         
            </div>
        </div>
             
         </div>
    )
}
