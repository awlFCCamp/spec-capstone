"use client";
import { SessionProvider } from "next-auth/react";

type authProps = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: authProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;
