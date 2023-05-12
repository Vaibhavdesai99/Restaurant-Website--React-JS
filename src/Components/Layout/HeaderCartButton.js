import React from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
const HeaderCartButton = () => {
  return (
    <div>
      <button className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Order</span>
        <span className={classes.amt}>3</span>
      </button>
    </div>
  )
}

export default HeaderCartButton
