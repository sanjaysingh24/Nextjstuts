import { NextResponse } from "next/server";

export async function POST(request) {
    let payload = await request.json();

    if (!payload.name) {
        return NextResponse.json({ message: "Name not found" }, { status: 400 });
    }

    return NextResponse.json({ message: "Successfully saved" }, { status: 200 });
}
