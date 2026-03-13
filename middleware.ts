import withAuth from 'next-auth/middleware';
import { Routes } from './config/routes';
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

const secret = process.env.NEXTAUTH_SECRET;

export const useAuthorization = async (req: NextRequest) => {
  const token = await getToken({ req, secret });

  // Check if the user is authenticated
  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  // Extract role from the token
  const userRoles = token.decoded.realm_access.roles;

  // Define role-based access for protected routes
  const protectedRoutes = ["/admin", "/settings"];
  const currentRoute = req.nextUrl.pathname;

  // Role-based protection
  if (protectedRoutes.includes(currentRoute)) {
    if (currentRoute === "/admin" && !userRoles.includes("admin")) {
      return NextResponse.redirect(new URL("/403", req.url)); // 403 Forbidden page
    }

    if (currentRoute === "/settings" && !userRoles.includes("super_user")) {
      return NextResponse.redirect(new URL("/403", req.url));
    }
  }

  return NextResponse.next();
};

export default withAuth(useAuthorization, {
  pages: {
    signIn: Routes.login,
    error: Routes.login,
  },
});

export const config = {
  // restricted routes
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
    "/analytics",
    "/",
    "/transactions",
    "/settings",
    "/transaction-issues",
    "/services",
    "/dashboard"
  ],
};
