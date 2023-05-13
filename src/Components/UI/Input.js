import React from 'react'
import classes from './Input.module.css'

// {type:'text'} when we use {...props.input} in input field that - type:'text' get added to that input field when we use spread operator on an input element.

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input}/>
    </div>
  )
}

export default Input
