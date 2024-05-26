//Un controlled form using useRef

import { useRef } from "react";

const Ucform=()=>{
    const contactForm=useRef(null);
    const handleSubmit=(e)=>{
        e.preventDefault();
        const form=new FormData(contactForm.current);
        for(const value of form.values()){
            console.log(value);
        }
    };

    return(
        <div>
            <form ref={contactForm}>
            < input type="text" name="fname"/>
            <br/>
            < input type="text" name="lname"/>
            < input type="submit" onClick={(e)=>{handleSubmit(e)}}/>
            <br/>
            <input type="radio" name="gender" value="male"/>
            <label>male</label>
            <input type="radio" name="gender" value="female"/>
            <label>female</label>
            </form>


        </div>
    )
}

export default Ucform;