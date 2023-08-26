import React, { useEffect, useState } from 'react'
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import { useContext } from 'react';
import CartContext  from '../../Store/cart-context';



export default function HeaderCartButton(props) {
    const [btnHighlight, setBtnHighlight]  = useState(false)
    const cartCtx =  useContext (CartContext);
    
    const { items } = cartCtx
    
   const numberOfCartItems = cartCtx?.item?.reduce((curNumber, index)=>{
    return Math.floor((curNumber + index.amount));
    
   }, 0);


   const btnClasses = `${classes.button} ${btnHighlight ? classes.bump: ''}`

   useEffect(()=>{
      if(items?.length === 0){
        return
      }
      setBtnHighlight(true)

      const timer = setTimeout(()=>{
        setBtnHighlight(false)
      },100)
      
      return()=>{
        clearTimeout(timer)
      }
   },[items])
   
   
  return (
    <button className={btnClasses} onClick={props.onOpening}>
        <span className={classes.icon}><CartIcon /></span>
        <span >Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
} 
