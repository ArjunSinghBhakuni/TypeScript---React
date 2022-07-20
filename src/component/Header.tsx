import React, { Children } from 'react'
import { JsxAttribute } from 'typescript'


interface IHeaderProps{
 label?:string;
 children?:JSX.Element | JSX.Element[];
}
const Header = ({label="Counter", children}:IHeaderProps) => {

  return (
   <>
    <h1>{label}</h1>
    {children}
   </>
  )
}

export default Header