import { NextRequest, NextResponse } from 'next/server'

export function proxy(req: NextRequest) {
  if (req.nextUrl.pathname.startsWith('/api/yani')) return NextResponse.next()

  const token = req.cookies.get('yummy_token')?.value
  const isAuthPage = req.nextUrl.pathname === '/auth'

  if (isAuthPage && token) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/auth'],
}
