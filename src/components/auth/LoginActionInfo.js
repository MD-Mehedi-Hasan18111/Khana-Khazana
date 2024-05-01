"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const LoginActionInfo = () => {
  const { auth, setAuth } = useAuth();
  const router = useRouter();

  const logout = () => {
    setAuth(null);
    router.push("/login");
  };

  return (
    <div>
      {auth ? (
        <div className="flex items-center space-x-0.5">
          <p className="mx-2">
            Hello, <span className="font-[600]">{auth?.firstName}</span>
          </p>
          <button
            onClick={logout}
            className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center"
          >
            Log out
          </button>
        </div>
      ) : (
        <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
          <Link href="/login">Login</Link>
        </li>
      )}
    </div>
  );
};

export default LoginActionInfo;
