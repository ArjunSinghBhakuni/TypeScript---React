import React, { useState } from 'react'

interface ITodoItem {
  id:number;
  title:string;
  status:boolean;
  handleDelete :(id:number)=>void
  handleUpdate:(id:number,title:string)=>void
}

const TodoItem = ({id,title,status,handleDelete,handleUpdate}:ITodoItem)=> {
const [newText ,setNewText] = useState('')
const [textStatus,setTextStatus] = useState(false)
  const handleCheck:React.
  ChangeEventHandler<HTMLInputElement>  =(e)=>{
    setNewText(e.target.value)

  }
const update =(id:number,newText:string)=>{
  handleUpdate(id,newText)
  
  setTextStatus(!textStatus)
  setNewText(' ')
}
 

 
 
  return (
   <div style={{display:"flex", margin:"auto", width:"200px", justifyContent:"space-around"}}>
  {
textStatus? <div>
<input  type='text' value={newText} onChange={(e)=>setNewText(e.target.value)} />
 <button onClick={()=>update(id,newText)}>Update</button>
  </div>
: <div>

    <input type="checkbox" onChange={handleCheck}   />
    <span>{title}</span>
   
   <button onClick={()=>setTextStatus(!textStatus)}>edit</button>
   <button onClick={()=>handleDelete(id)} >delete</button>
    </div>  

}
   </div>
  )
}

export default TodoItem