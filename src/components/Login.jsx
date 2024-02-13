import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && password) {
      console.log(userName + " " + password);
      setUser({ userName, password });
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl">Login</h2>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Username"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        required
        className="border-2 border-black p-3 rounded-lg m-5"
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="border-2 border-black p-3 rounded-lg m-5"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="p-7 bg-green-600 rounded-lg text-3xl text-white mb-4"
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
