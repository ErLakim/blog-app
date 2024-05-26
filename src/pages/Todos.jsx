import React from 'react'
import { memo } from 'react';
const Todos = ({todos=[],addTodo}) => {
    console.log("Todos render");
  return (
<div>
{todos.map((todo,index)=>{
    return <div key={index}>{todo}</div>;
})}
<button onClick={addTodo}>Add new Todo</button>
</div>
);
};

export default Todos;