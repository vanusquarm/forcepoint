"use client";

import { signOut, useSession } from "next-auth/react";
import { useEffect } from "react";
import Spinner from "./spinners/spinner";

export default function AuthStatus({
  children,
  wrapperStyle,
}: {
  children: React.ReactNode;
  wrapperStyle?: string;
}) {
  const { data, status } = useSession();

  async function keycloakLogout() {
    try {
      await fetch("/api/auth/logout", { method: "GET" });
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  }

  useEffect(() => {
    if (
      status !== "loading" &&
      data &&
      data?.error === "RefreshAccessTokenError"
    ) {
      keycloakLogout().then(() => signOut());
    }
  }, [data, status]);

  if (status === "authenticated" || status === "unauthenticated")
    return children;

  if (status === "loading")
    return (
      <div className={wrapperStyle}>
        <Spinner/>
      </div>
    );
}
