"use client"

import { useState } from "react"
import LogIn from "./LogIn"
import SignIn from "./SignIn"
import { Button } from "@/components/ui/button"

export default function AuthForm() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow">
      <div className="flex justify-center mb-6 gap-2">
        <Button
          variant={mode === 'login' ? 'default' : 'outline'}
          onClick={() => setMode('login')}
        >
          Log In
        </Button>
        <Button
          variant={mode === 'signup' ? 'default' : 'outline'}
          onClick={() => setMode('signup')}
        >
          Sign Up
        </Button>
      </div>
      {mode === 'login' ? <LogIn /> : <SignIn />}
    </div>
  )
} 
