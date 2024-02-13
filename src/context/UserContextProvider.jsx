import React from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const [age, setAge] = React.useState(20);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
