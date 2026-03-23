import { NextRequest, NextResponse } from 'next/server'

async function proxyRequest(req: NextRequest) {
  const path = req.nextUrl.pathname.replace('/api/yani/', '')
  const url = `https://api.yani.tv/${path}${req.nextUrl.search}`

  const fetchOptions: RequestInit = {
    method: req.method,
    headers: {
      'X-Application': process.env.NEXT_PUBLIC_API_TOKEN || '',
      'Content-Type': 'application/json',
    },
  }

  if (['POST', 'PATCH', 'PUT'].includes(req.method || '')) {
    fetchOptions.body = await req.text()
  }

  const res = await fetch(url, fetchOptions)
  const text = await res.text()

  try {
    return NextResponse.json(JSON.parse(text))
  } catch {
    return new Response(text, { status: res.status })
  }
}

export async function GET(req: NextRequest) {
  return proxyRequest(req)
}
export async function POST(req: NextRequest) {
  return proxyRequest(req)
}
export async function PATCH(req: NextRequest) {
  return proxyRequest(req)
}
export async function PUT(req: NextRequest) {
  return proxyRequest(req)
}
export async function DELETE(req: NextRequest) {
  return proxyRequest(req)
}
