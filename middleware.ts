import { NextRequest, NextResponse } from "next/server";
import { verifyJwtToken } from "@/lib/auth";

const AUTH_PAGES: string[] = ["/authForm"];

const isAuthPages = (url: string): boolean => AUTH_PAGES.some((page) => url.startsWith(page));

export async function middleware(request: NextRequest): Promise<NextResponse | typeof NextResponse.next> {
  // const { url, nextUrl, cookies } = request;
  // const { value: token } = cookies.get("token") ?? { value: null };
  // const hasVerifiedToken = token && (await verifyJwtToken(token));
  // const isAuthPageRequested = isAuthPages(nextUrl.pathname);

  // console.log('yes you are fucking using me you fucktard ->', token)

  // if (isAuthPageRequested) {
  //   if (!hasVerifiedToken) {
  //     const response = NextResponse.next();
  //     response.cookies.delete("token");
  //     return response;
  //   }
  //   const response = NextResponse.redirect(new URL(`/`, url));
  //   return response;
  // }

  // if (!hasVerifiedToken) {
  //   const searchParams = new URLSearchParams(nextUrl.searchParams);
  //   searchParams.set("next", nextUrl.pathname);
  //   // const response = NextResponse.redirect(
  //   //   new URL(`/authForm?${searchParams}`, url)
  //   // );
  //       const response = NextResponse.redirect(
  //     new URL(`/authForm`, url)
  //   );
  //   response.cookies.delete("token");
  //   return response;
  // }

  return NextResponse.next();
}

export const config = { matcher: ["/","/login", "/protected/:path*"] };