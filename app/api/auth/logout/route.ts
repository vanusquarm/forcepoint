import { authOptions } from "@/auth";
import { getServerSession } from "next-auth"
import { getIdToken } from "@/utils/sessionTokenAccessor"

export async function GET() {
  const session = await getServerSession(authOptions);

  // Error handling for environment variables
  if (!process.env.END_SESSION_URL || !process.env.NEXTAUTH_URL) {
    throw new Error(
      "END_SESSION_URL or NEXTAUTH_URL is not defined, please define it in your .env file"
    );
  }

  if (session) {
    const idToken = await getIdToken();

    // this will log out the user on Keycloak side
    let url = `${
      process.env.END_SESSION_URL
    }?id_token_hint=${idToken}&post_logout_redirect_uri=${encodeURIComponent(
      process.env.NEXTAUTH_URL ?? ""
    )}`;

    try {
      await fetch(url, { method: "GET" });
    } catch (err) {
      console.error(err);
      return new Response(null, { status: 500 });
    }
  }
  return new Response(null, { status: 200 });
}

