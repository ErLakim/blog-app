import { useState } from "react";
import Table from '../components/Table';


const Login =()=>{
    const headers=['Name','Age','Email'];
    const [data,setData]= useState([
      { name: 'Lakim', age: 25, email: 'lakim@example.com' },
      { name: 'Naruto', age: 30, email: 'naruto@example.com' }
    ]);
    
    return<>
    Login Page is here
    <div>
      <h1>Login Page</h1>
      <Table headers={headers} data={data}/>
    </div>
    </>;
};
export default Login;