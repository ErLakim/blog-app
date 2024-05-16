import React, { useState } from 'react';

const AboutUs=()=>{
      const [name, setName] = useState('');
      const [result, setResult] = useState('');
    
      const sendForm = () => {
        const user = "You're user";
        const admin = "You're admin";
    
        const message = name === "Lakim" ? admin : user;
        setResult(message);
      };
    
      return (
        <div>
          <input placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={sendForm}>Check</button>
          <p>{result}</p>
        </div>
      );
    };

export default AboutUs;