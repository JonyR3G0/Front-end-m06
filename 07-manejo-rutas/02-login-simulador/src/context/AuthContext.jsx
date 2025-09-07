// 1. Create the context
import { useContext, useState } from "react"

const AuthContext = useContext()

// 3. Creating a personalized hook
export function useAuth() {
    return useContext(AuthContext)
}

// 2.Creating the provider
export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const login = (callback) => {
    setIsAuth(true);
    callback();
  };

    const logout = () => {
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>{children}</AuthContext.Provider>
  );
}
