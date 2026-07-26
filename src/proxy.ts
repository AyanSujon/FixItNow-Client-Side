import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import jwt, { JwtPayload } from "jsonwebtoken";


const AUTH_ROUTES =["/login", "/register"]
const PUBLIC_ROUTES = ["/", "/browse-services", "/find-technicians", "/how-it-works"]
// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname; 




const accessToken = request.cookies.get("accessToken")?.value;

const decodedToken = accessToken ? jwt.decode(accessToken) as JwtPayload : null; 

console.log(decodedToken, " proxy")

let userRole = null;

if(decodedToken){
  userRole = decodedToken.role;
}

// user in logged in and trying to access login or register page, redirect to dashboard or root home page
if(accessToken && AUTH_ROUTES.includes(pathname)){
  if(userRole === "CUSTOMER"){
    return NextResponse.redirect(new URL("/dashboard/customer", request.url));
  }else if(userRole === "ADMIN"){
    return NextResponse.redirect(new URL("/dashboard/admin", request.url));
  }else if(userRole === "TECHNICIAN"){
    return NextResponse.redirect(new URL("/dashboard/technician", request.url));
  }else{
    return NextResponse.redirect(new URL("/", request.url));
  }
}


const isPublicRoutes = PUBLIC_ROUTES.some((route)=> pathname === route || pathname.startsWith(route + "/"));
const isAuthRoutes = AUTH_ROUTES.some((route)=> pathname === route || pathname.startsWith(route + "/"));


// Authenticated Pages Protection : Authorization is not handle yet.
if(!accessToken && !isPublicRoutes && !isAuthRoutes){
  return NextResponse.redirect(new URL("/login", request.url));
}

// Authorization: Role based access control 
if(pathname.startsWith("/dashboard/customer") && userRole !== "CUSTOMER"){
  return NextResponse.redirect(new URL("/", request.url));
}else if(pathname.startsWith("/dashboard/admin") && userRole !== "ADMIN"){
  return NextResponse.redirect(new URL("/", request.url));
}else if(pathname.startsWith("/dashboard/technician") && userRole !== "TECHNICIAN"){
  return NextResponse.redirect(new URL("/", request.url));
}









  // return NextResponse.redirect(new URL('/', request.url))
return NextResponse.next();

}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
    matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    '/((?!api|_next/static|favicon.ico|_next/image|.*\\.png$).*)',
  ],
}