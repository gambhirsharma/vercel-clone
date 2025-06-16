"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    // Registration logic goes here
    alert(`Sign up with email: ${email}, password: ${password}`)
  }

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow">
      <form onSubmit={handleSignUp} className="space-y-4">
        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <Button type="submit" className="w-full">
          Sign up
        </Button>
      </form>
    </div>
  )
}
