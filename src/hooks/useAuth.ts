import { useState } from "react";

export const useAuth = () => {
  const [auth, _setAuth] = useState<string | null>(localStorage.getItem("user"));

  function setAuth(user: string | null) {
    if (user) {
      localStorage.setItem("user", user);
    } else {
      localStorage.removeItem("user");
    }
    _setAuth(user);
  }

  return { auth, setAuth };
};
