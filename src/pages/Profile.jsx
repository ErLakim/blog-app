import {useContext} from 'react'
import { UserContext } from '../contexts/index'

const Profile = () => {
    const context= useContext(UserContext);
    if(!context) throw new Error("Context is not wrapped inside provider");
    const {user}= context;
    
  return (
    <div>
        Profile{JSON.stringify(user)}
      
        </div>
  );
};

export default Profile;