import createMiddleware from 'next-intl/middleware'
import { routing } from './src/i18n/routing'
import type { NextRequest } from 'next/server'

const intlMiddleware = createMiddleware(routing)

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Skip middleware for Next.js internals and static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('/favicon') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|css|js|woff|woff2)$/)
  ) {
    return
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2)).*)',
  ],
}
