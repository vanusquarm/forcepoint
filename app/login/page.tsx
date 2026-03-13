"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Login() {
  const { data: session, status } = useSession();

  useEffect(() => {
    // Clear session of auto-logout due to session expiration
    if (
      status != "loading" &&
      session &&
      session?.error === "RefreshAccessTokenError"
    ) {
      signOut({ redirect: false });
    }
    signIn("keycloak");
  }, [session, status]);

  return <></>
}

