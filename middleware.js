import { NextResponse } from 'next/server'

export function middleware(request) {
  // Define the allowed paths
  /*
  const allowedPaths = ['/ai-detector', '/api/predict/text']
  
  // Check if the requested path is in the allowed list
  if (!allowedPaths.some(path => request.nextUrl.pathname.startsWith(path))) {
    // If the path is not allowed, redirect to the /ai-detector page
    return NextResponse.redirect(new URL('/ai-detector', request.url))
  }
  
  // If the path is allowed, continue with the request
  */
  return NextResponse.next()
}

// Configure which paths the middleware should run on
/*
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
*/