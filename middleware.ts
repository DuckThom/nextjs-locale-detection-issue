import {NextRequest, NextResponse} from "next/server";

export function middleware(req: NextRequest) {
    const targetRewrite = req.nextUrl.searchParams.has('working') ? 'test2' : 'test1'

    console.log('------------------------------')
    console.log('middleware URL', req.nextUrl.pathname)
    console.log('middleware locale', req.nextUrl.locale)

    return NextResponse.rewrite(new URL(`/${req.nextUrl.locale}/${targetRewrite}`, req.url));
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)',
    ],
}