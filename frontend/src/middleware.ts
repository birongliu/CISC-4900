import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher(["/", "/(api|trpc)(.*)"]);

export default clerkMiddleware((auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = auth();


  if(!userId && !isPublicRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  if(userId &&
    !sessionClaims?.metadata?.onboardingComplete &&
    req.nextUrl.pathname !== '/onboarding') {
    const url = new URL("/onboarding", req.url);
    return NextResponse.redirect(url);
  }



  if (userId && !isPublicRoute(req)) {
    return NextResponse.next()
  }

})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}