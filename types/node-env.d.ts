// types/node-env.d.ts
declare namespace NodeJS {
  export interface ProcessEnv {
    KEYCLOAK_CLIENT_ID: string;
    KEYCLOAK_CLIENT_SECRET: string;
    KEYCLOAK_ISSUER: string;
    KEYCLOAK_ADMIN_URL: string;

    REFRESH_TOKEN_URL: string;
    NEXT_PUBLIC_AUTH_TOKEN_KEY: string;
    CHECKOUT_API: string;
  }
}
