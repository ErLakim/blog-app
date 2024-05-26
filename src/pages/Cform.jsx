// controlled form using state

import {useState} from "react";
const Cform=()=>{
    const[form,setForm]=useState({
        fname:"",
        lname:"",
    });

    const handleSubmit=()=>{
        alert(JSON.stringify(form));
    };
    
    return(
        <div>
            <form>
            <input
            type="text" id="fname" onChange={(e)=>{
                setForm((prev)=>{
                    return{
                        ...prev, fname: e.target.value,
                    };
                });

            }}/>
            <br/>
              <input
            type="text" id="lname" onChange={(e)=>{
                setForm((prev)=>{
                    return{
                        ...prev, lname: e.target.value,
                    };
                });

            }}/>

        <select name="College" id="college">
        <option value="NEC">NEC</option>
        <option value="NCIT">NCIT</option>
  
         </select>
        <input type="submit" onClick={handleSubmit}/>
            </form>
           
        </div>
    )
}

export default Cform;