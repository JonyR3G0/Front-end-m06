import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  
  const {login} = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    // Preventing the page refresh via the e object
    e.preventDefault();

    // Using the callback via useAuth
    login( () => {
          navigate("/user/webUser")
    } )
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="User" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">LogIn</button>
      </form>
    </>
  );
};
