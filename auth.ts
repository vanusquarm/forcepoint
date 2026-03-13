import type { NextAuthOptions, Session } from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";
import { JWT } from "next-auth/jwt";
import { encrypt } from "@/utils/encryption";
import { jwtDecode } from "jwt-decode";
import { Routes } from "./config/routes";

export const authOptions: NextAuthOptions = {
  // debug: true,
  pages: {
    signIn: Routes.login,
    error: Routes.login,
  },
  session: {
    strategy: "jwt",
    maxAge: 1 * 60, // 1 minute
  },
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account, profile }) {
      const nowTimeStamp = Math.floor(Date.now() / 1000);

      if (account) {
        // account is only available the first time this callback is called on a new session (after the user signs in)
        token.decoded = jwtDecode(account?.access_token!);
        token.access_token = account.access_token!;
        token.id_token = account.id_token!;
        token.expires_at = account.expires_at!;
        token.refresh_token = account.refresh_token!;
        return token;
      } else if (nowTimeStamp < (token.expires_at as number)) {
        // token has not expired yet, return it
        return token;
      } else {
        // token is expired, try to refresh it
        console.log("Token has expired. Will refresh...");
        try {
          const refreshedToken = await refreshAccessToken(token);
          console.log("Token is refreshed.");
          return refreshedToken;
        } catch (error) {
          console.error("Error refreshing access token", error);
          return { ...token, error: "RefreshAccessTokenError" };
        }
      }
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      // Send properties to the client
      session.access_token = encrypt(token.access_token as string);
      session.id_token = encrypt(token.id_token as string);
      session.roles = (
        token.decoded as {
          realm_access: { roles: string[] };
        }
      ).realm_access.roles;
      session.preferred_username = token?.decoded?.preferred_username;
      session.groups = token?.decoded?.groups;
      session.error = token.error as string;

      return session;
    },
    async redirect({ url, baseUrl }) {
      const parsedUrl = new URL(url, baseUrl);
      if (parsedUrl.searchParams.has("callbackUrl")) {
        return `${parsedUrl.searchParams.get("callbackUrl")}`;
      }
      if (parsedUrl.origin === baseUrl) {
        return url;
      }
      return baseUrl;
    },
  },
};

// this will refresh an expired access token, when needed
async function refreshAccessToken(token: JWT) {
  const encodedParams = new URLSearchParams();

  encodedParams.set("grant_type", "refresh_token");
  encodedParams.set("client_id", `${process.env.KEYCLOAK_CLIENT_ID}`);
  encodedParams.set("client_secret", `${process.env.KEYCLOAK_CLIENT_SECRET}`);
  encodedParams.set("refresh_token", String(token.refresh_token));
  encodedParams.set(
    "redirect_uri",
    `${process.env.NEXTAUTH_URL}/api/auth/callback`
  );
  const resp = await fetch(`${process.env.REFRESH_TOKEN_URL}`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encodedParams,
    method: "POST",
  });
  const refreshToken = await resp.json();
  if (!resp.ok) throw refreshToken;

  return {
    ...token,
    access_token: refreshToken.access_token,
    decoded: jwtDecode(refreshToken.access_token),
    id_token: refreshToken.id_token,
    expires_at: Math.floor(Date.now() / 1000) + refreshToken.expires_in,
    refresh_token: refreshToken.refresh_token,
  };
}

