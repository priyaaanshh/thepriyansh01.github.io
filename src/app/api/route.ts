// app/api/route.js 👈🏽

import { NextRequest, NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: NextRequest) {
    // Do whatever you want
    console.log("get request called")
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// To handle a POST request to /api
export async function POST(request: NextRequest) {
    // Do whatever you want
    console.log("post request called")
    return NextResponse.json({ message: "Hello World" }, { status: 200 });
}

// Same logic to add a `PATCH`, `DELETE`...