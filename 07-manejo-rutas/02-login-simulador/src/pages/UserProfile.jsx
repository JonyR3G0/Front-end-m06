import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const UserProfile = () => {
  const { id } = useParams();
  const { logout } = useAuth();

  return (
    <div>
      <h1>UserProfile {id}</h1>
      <button onClick={logout}>Salir</button>
    </div>
  );
};
