import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest){
    const authenticated = false

    if(request.nextUrl.pathname.startsWith('/dashboard' ) && !authenticated){
        return NextResponse.redirect(new URL('/posts', request.url))
    }

    return NextResponse.next()
}
