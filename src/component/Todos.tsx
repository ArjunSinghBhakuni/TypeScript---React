import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { getEnvironmentData } from "worker_threads";
import Header from "./Header";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

interface ITodoItem {
  id: number;
  title: string;
  status: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const handleAdd = (title: string) => {
    const payload = {
      title,
      status: false,
    };

    axios.post("http://localhost:8080/todos", payload).then(getData);

    //setTodos([...todos,payload])
  };

  const handleDelete = (id: number) => {
  
    axios.delete(`http://localhost:8080/todos/${id}`).then((r)=>console.log(r.data))
  getData()
  };

  const handleUpdate =(id:number,title:string)=>{
console.log(id,title)
if(title){

  axios.patch(`http://localhost:8080/todos/${id}`,{title})
  getData()  
}
}
  

  const getData = () => {
    axios
      .get("http://localhost:8080/todos")
      // .then({data}:{data:ITodoItem[]}=>
      // {
      //   setTodos(data)
      // })
      .then((r: AxiosResponse<ITodoItem[]>) => {
        const { data } = r;
        setTodos(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header label="Todos" />
      <TodoInput onClick={handleAdd} />
      {todos.length > 0 &&
        todos.map((item) => (
          <TodoItem handleUpdate={handleUpdate} key={item.id} {...item} handleDelete={handleDelete} />
        ))}
    </div>
  );
};

export default Todos;
