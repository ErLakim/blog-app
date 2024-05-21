import React from 'react'
import { useEffect,useState } from 'react';
import moment  from 'moment';

const Timer = () => {

    const [count,setCount]=useState(7884000);
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count-1);
        },1000);
    });
  return (
    <div>Timer till DASHAIN {moment().endOf('day').fromNow()}</div>
  )
}

export default Timer