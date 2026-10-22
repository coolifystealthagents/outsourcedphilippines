import { NextRequest, NextResponse } from 'next/server';

const canonicalHost = 'outsourcedphilippines.com';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const forwardedHost = (request.headers.get('x-forwarded-host') || request.headers.get('host') || '').split(':')[0].toLowerCase();
  const cfVisitor = request.headers.get('cf-visitor');
  let visitorProto = '';
  if (cfVisitor) {
    try {
      visitorProto = String(JSON.parse(cfVisitor).scheme || '').toLowerCase();
    } catch {
      visitorProto = '';
    }
  }
  const forwardedProto = (visitorProto || request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '')).split(',')[0].trim().toLowerCase();
  const isProductionHost = forwardedHost === canonicalHost || forwardedHost === `www.${canonicalHost}`;

  if (url.pathname === '/contact') {
    url.pathname = '/contact-us';
    if (isProductionHost) {
      url.protocol = 'https:';
      url.host = canonicalHost;
      url.port = '';
    }
    return NextResponse.redirect(url, 308);
  }

  if (isProductionHost && (forwardedHost.startsWith('www.') || forwardedProto !== 'https')) {
    url.protocol = 'https:';
    url.host = canonicalHost;
    url.port = '';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
