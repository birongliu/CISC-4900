import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const ctx = await request.json()
  console.log("hello??", `${process.env.API_URL}/api/aiResponse"`)
  const response = await fetch(`${process.env.API_URL}/api/aiResponse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'hello world' }),
  })
  const data = await response.json();
  return NextResponse.json({ data: data, status: 200 });
}