import { AuthContext } from "@/contexts/authContext";
import { useContext } from "react";

export const useAuth = () => {
  const { auth, setAuth } = useContext(AuthContext);

  return { auth, setAuth };
};
