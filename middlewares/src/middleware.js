import React from 'react'
import { NextResponse } from 'next/server';
const middleware = (request) => {
    // if(request.nextUrl.pathname!="/login"){
        
    return NextResponse.redirect(new URL("/login",request.url))
    // }

    
        
}
export const config={
matcher:["/about/:path*"]
}
export default middleware
