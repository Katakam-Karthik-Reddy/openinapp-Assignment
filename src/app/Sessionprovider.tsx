"use client";
import { Session } from "next-auth";
import { SessionProvider as Provider } from "next-auth/react";

interface props {
  children: React.ReactNode;
  session: Session | null;
}

const Sessionprovider: React.FC<props> = ({ children, session }) => {
  return <Provider>{children}</Provider>;
};

export default Sessionprovider;
