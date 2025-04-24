import { NextRequest, NextResponse } from "next/server";
import { getCurrentUser } from "./services/AuthService";

const authRoute = ["/auth"];

export const middleware = async (req: NextRequest) => {
  const { pathname } = req.nextUrl;
  const userInfo = await getCurrentUser();

  if (!userInfo) {
    if (authRoute.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(
          `${process.env.NEXT_PUBLIC_BASE_URL}/auth?redirectPath=${pathname}`,
          req.url
        )
      );
    }
  }
};

export const config = {
  matcher: ["/dashboard/:path", "/cart"],
};
