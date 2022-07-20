import React, { useState } from 'react'

interface ITodoInputProps{
 onClick :(value:string)=>void;
}


const TodoInput = ({onClick}:ITodoInputProps) => {

 const [text,setText] = useState('');


 const changeHandler:React.
 ChangeEventHandler<HTMLInputElement> =(e)=>{
setText(e.target.value);
 }

 const handleAdd:React.
 MouseEventHandler<HTMLButtonElement> =()=>{
onClick(text) 
setText(' ')
 }
  return (
    <div>
     <input type= {"text"} value={text} onChange={changeHandler}/>
     <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default TodoInput