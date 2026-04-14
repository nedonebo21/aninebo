import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'

async function proxyRequest(req: NextRequest) {
  const path = req.nextUrl.pathname.replace('/api/yani/', '')

  const url = `https://api.yani.tv/${path}${req.nextUrl.search}`

  const res = await fetch(url, {
    method: req.method,
    headers: {
      'X-Application': process.env.NEXT_PUBLIC_API_TOKEN || '',
      'Content-Type': 'application/json',
      Cookie: req.headers.get('cookie') || '',
      Authorization: req.headers.get('authorization') ?? '',
    },
    body: ['POST', 'PATCH', 'PUT'].includes(req.method || '') ? await req.text() : undefined,
  })

  const text = await res.text()

  let body: object | null = null

  try {
    body = JSON.parse(text)
  } catch {
    return new Response(text, { status: res.status })
  }

  const response = NextResponse.json(body, { status: res.status })

  const cookies = res.headers.getSetCookie()

  cookies.forEach(cookie => {
    response.headers.append('Set-Cookie', cookie)
  })

  return response
}

export const GET = proxyRequest
export const POST = proxyRequest
export const PATCH = proxyRequest
export const PUT = proxyRequest
export const DELETE = proxyRequest
