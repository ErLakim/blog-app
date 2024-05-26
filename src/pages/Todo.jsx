import {useState,useCallback, useMemo} from "react";
import Todos from"./Todos";

const Todo=()=>{
    const[count,setCount]=useState(0);
    const[todos,setTodos]=useState([]);

    const increment=()=>{
        setCount((c)=> c+1);
    };
    const addTodo=useCallback(()=>{
        setTodos((t)=>[...t, "New Todo"]);
    },[]);

    console.log("Count Down");

    const expensiveCalculation =(num)=>{
        for( let i=0; i<=1000000000; i++){
            num +=1;
        }
        return num;
    };

    const calculation= useMemo(()=> expensiveCalculation(count),[count]);

    return(
        <div>
            Count: {count} &nbsp;
            <button onClick={increment}>+</button>
            {calculation}
            <br/>
            <Todos todos={todos} addTodo={addTodo}/>
        </div>
    );
};

export default Todo;
