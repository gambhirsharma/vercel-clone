"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function LogIn() {
  const [email, setEmail] = useState("")

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    await signIn("email", { email })
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow">
      <form onSubmit={handleEmailSignIn} className="space-y-4">
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">
          Sign in with Email
        </Button>
      </form>
      <div className="my-4 flex items-center">
        <div className="flex-grow border-t" />
        <span className="mx-2 text-gray-400">or</span>
        <div className="flex-grow border-t" />
      </div>
      <Button
        variant="outline"
        className="w-full flex items-center justify-center gap-2"
        onClick={() => signIn("github")}
        type="button"
      >
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"
          />
        </svg>
        Sign in with GitHub
      </Button>
    </div>
  )
}
