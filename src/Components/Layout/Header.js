import React from 'react'
import FoodImg from '../../Images/AdobeStock_338951876_Preview.jpeg'
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton'

const Header = (props) => {
  return (
   <>
   <header className={classes.header}>
      <h1>React Meals</h1>
      <HeaderCartButton></HeaderCartButton>
    
   </header>
   <div className={classes['main-image']}>
      <img src={FoodImg} alt='foodimg'></img>
   </div>
   </>
  )
}

export default Header
