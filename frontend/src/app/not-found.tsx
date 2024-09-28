"use client"
import Link from "next/link";
import { redirect } from "next/navigation";

export default function notFound() {
  return (
    <div className="min-h-svh flex justify-center items-center flex-col gap-2">
        <h1 className="text-7xl font-poppins font-bold">404</h1>
        <h2 className="text-2xl font-poppins font-semibold">Sorry, we couldn&apos;t find this page.</h2>
        <p className="text-center font-poppins">But don&apos;t worry, you can find plenty of other things on our homepage.</p>
        <Link href="/"> 
        <button className="border p-2 rounded hover:bg-blue-400">Back to homepage</button>
        </Link>
    </div>
  )
}
