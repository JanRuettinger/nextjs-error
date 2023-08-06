import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import {cookies} from 'next/headers'

export async function GET(request: Request) {
    const requestURL = new URL(request.url)
    const code = requestURL.searchParams.get("code")

    if(code){
        const supabase = createRouteHandlerClient({cookies})
        await supabase.auth.exchangeCodeForSession(code)
        console.log("code", code)
    }

    return NextResponse.redirect(requestURL.origin)
}