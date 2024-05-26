import {useContext} from 'react'
import { UserContext } from '../contexts/index'

const Account = () => {
    const context= useContext(UserContext);
    if(!context) throw new Error("Context is not wrapped inside provider");
    const {user,setUser}= context;
    
  return (
    <div>
        Account{JSON.stringify(user)}
        <button onClick={()=>{
            setUser({
                name:" Naruto Uzumaki",
                email:"naruto@sinobi.com",
                role :["Hokage"],
            });
        }}>Update User</button>
        </div>
  );
};

export default Account;