import React from 'react'
import Image from './Images/AdobeStock_338951876_Preview.jpeg'
import classes from './Header.module.css'
import HeaderButton from './HeaderButton'
const Header = () => {
  return (
   <>
    <header className={classes.header}>
       <div className='left_header'>
          <h2>ReactMeals</h2>
       </div>
       <div className='right_header'> 
      <HeaderButton></HeaderButton>
       </div> 
    </header>
    <div className={classes.img}>
    <img src={Image} alt='food_image'></img>
    </div> 
     </>
  )
}

export default Header
