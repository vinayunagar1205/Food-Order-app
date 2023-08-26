import React, {Fragment} from 'react'
import mealsImg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'


export default function Header(props) {

 
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>FOOD ZONE</h1>
            <HeaderCartButton onOpening={props.onOpening}/>
        </header>
        <div className={classes['main-image']}>
            <img  src={mealsImg} alt=' Delicious Food'/>
        </div>
    </Fragment>
  )
}
