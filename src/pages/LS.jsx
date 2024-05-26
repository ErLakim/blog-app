import{useState} from 'react';

const LS=()=>{
    const [data,setData]=useState("");
//APi bata token fetch garne ya bata
    const storeInLs=()=>{
localStorage.setItem("access_token",data);
    };
    const deleteInLs=()=>{
        localStorage.removeItem("access_token");
            };

            return(
                <div>
                    LS
                    <input placeholder="Enter Your token"
                    onChange={(e)=>setData(e.target.value)}/>
                    <button onClick={storeInLs}>Store in LS</button>
                    <button onClick={deleteInLs}>LogOut</button>

                </div>
            )

};

export default LS;