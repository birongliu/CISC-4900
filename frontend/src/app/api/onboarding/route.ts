import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const ctx = await request.json()
  const response = await fetch(`${process.env.API_URL}/api/aiResponse`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: ctx }),
  })
  if(response.status !== 200) { 
    return NextResponse.json({ data: { message: 'Error' }}, { status: 500 });
  }
  const data = await response.json();
  return NextResponse.json({ data: data, status: 200 });
}