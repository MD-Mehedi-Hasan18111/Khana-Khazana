"use client";

import { AuthContext } from "@/contexts/authContext";
import React, { useState } from "react";

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
