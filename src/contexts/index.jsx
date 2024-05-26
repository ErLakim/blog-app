import React, { useState, createContext, useEffect } from 'react';

export const UserContext = createContext(null);

const UserConsumer = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({
      name: "Naruto",
      email: "naruto@sinobi.com",
      role: ["admin"],
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserConsumer;
