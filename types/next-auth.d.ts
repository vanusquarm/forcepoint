import { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    access_token: string;
    id_token: string;
    error: string;
    roles: string[];
    preferred_username?: string;
    groups?: string[];
    user: {
      /** Oauth access token */
      access_token?: string;
    } & DefaultSession["user"];
  }
  // interface Profile {
  //   groups?: string[];
  // }
}

declare module "next-auth/jwt" {
  interface JWT {
    id_token?: string;
    provider?: string;
    access_token?: string;
    expires_at: number;
    refresh_token: string;
    error?: string;
    preferred_username?: string;
    groups?: string[];
    decoded: {
      sub: string;
      realm_access: RealmAccess;
    } & DefaultJWT;
  } 
}

interface RealmAccess {
  roles: Array<string>;
}