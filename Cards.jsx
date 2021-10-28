import React from "react";
import { useState } from "react/cjs/react.development";

const Cards = ()=>{

    const  [name, setName] = useState("");

    const [fullName, setFullName]= useState(); 
     const inputBox = (event)=>{
         console.log("event.target.value")
         setName(event.target.value);
     };

     const onSubmit=()=>{
         setFullName(name);
     }
    return (
        <>
        <div>
        <h1>Hello {fullName}</h1>
        <input type="text" placeholder="Enter Your Name"  onChange={inputBox} value={name}     />
        <button onClick={onSubmit}>Click me 💥 </button>   
        </div>
        </>
    );
};


export default Cards;