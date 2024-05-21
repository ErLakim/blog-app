import React from 'react'
import { useState } from 'react';
export const Button = () => {
   
    const [car,setCar]= useState({
        brand:"ford",
        model:"black",
        launch:"2000"
    });

    const [cars,setCars]= useState(["tesla x","nexon","neta v"]);
    const updateNexon=()=>{
    setCars((cars)=>{
        cars[1]="tata Nexon";
        return[...cars];
    });
};
  return (<>
  {car.brand}
  <button
   onClick={()=>
    setCar((prev)=>{return {...prev,brand:"FORDRanger"};
         })
        }>Change Brand
    </button>
    <hr/>
    {cars.length>0 && cars.map((cars)=>{
        return <li key={cars}>{cars}</li>
    })}
    <button onClick={updateNexon}>Change nexon to tata nexon</button>
  </>
     );
};

export default Button;
