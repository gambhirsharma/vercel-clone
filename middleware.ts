import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getToken } from 'next-auth/jwt'

// This secret should match NEXTAUTH_SECRET in your .env
const secret = process.env.NEXTAUTH_SECRET

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret })
  const { pathname } = req.nextUrl

  // If user is not logged in and tries to access /dashboard, redirect to /
  if (!token && pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // If user is logged in and tries to access the home page, redirect to /dashboard
  if (token && pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url))
  }

  // Allow the request to proceed
  return NextResponse.next()
}

// Specify the paths where the middleware should run
export const config = {
  matcher: ['/', '/dashboard/:path*'],
} 
