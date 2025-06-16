"use client"

import { signIn, signOut } from "next-auth/react"

// import { getServerSession } from "next-auth/next"
import {auth} from "@/utils/auth"

export default function AuthButton() {
  const { data: session, status } =  auth()
  

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (!session) {
    return (
      <button
        onClick={() => signIn("github")}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Sign in with GitHub
      </button>
    )
  }

  return (
    <div className="flex items-center gap-4">
      <span>Signed in as {session.user?.name || session.user?.email}</span>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Sign out
      </button>
    </div>
  )
}
