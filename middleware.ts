import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'es']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip static files and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.\w+$/)
  ) {
    return NextResponse.next()
  }

  // Redirect /en/* to /* (strip explicit en prefix)
  if (pathname.startsWith('/en/') || pathname === '/en') {
    const newPath = pathname.replace(/^\/en/, '') || '/'
    return NextResponse.redirect(new URL(newPath, request.url), 308)
  }

  // Check if path already has /es/ prefix
  const hasEsPrefix = pathname.startsWith('/es/') || pathname === '/es'

  // Rewrite clean English paths to /en/ internally for App Router
  if (!hasEsPrefix) {
    const url = request.nextUrl.clone()
    url.pathname = `/en${pathname === '/' ? '' : pathname}`
    return NextResponse.rewrite(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/:path*'],
}
