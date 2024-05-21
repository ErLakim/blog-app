import React from 'react';
import axios from "axios";
import { useState,useEffect } from 'react';

const UseEff = () => {
    const [post,setPost]= useState([]);
    useEffect(()=>{
        const fetchData= async() => {
            try{
                const {data}= await axios("https://dummyjson.com/posts");
            setPost(data.posts);

            }catch(e){
                console.log(e);
            }
        };
        fetchData();
    },[]);
  return (
    <div>{JSON.stringify(post)}</div>
  )
};

export default UseEff;