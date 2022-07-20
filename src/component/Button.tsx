import React from 'react'

interface IButtonPros{
 label:string;
 handleClick :()=> void;
}

const Button = (props:IButtonPros) => {

 const {label,handleClick} = props
  return (
   <button onClick={handleClick}>{label}</button>
    )
}

export default Button