'use client';
import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { signOut } from 'next-auth/react';
import Link from 'next/link';

// You may want to pass session/user as props for client components

export type sessionUser = {
  name: string; 
  email: string;
  image: string;
}

interface NavBarProps {
  user: sessionUser | null;
}

const NavBar: React.FC<NavBarProps> = ({ user }: NavBarProps) => {
  return (
    <nav className="w-full px-6 py-3 border-b shadow-sm bg-white flex items-center justify-between">
      <h1 className="text-xl font-bold tracking-tight">Vercel<span className="text-primary">.clone</span></h1>
      <div className="flex items-center gap-4">
        {user ? (
          <>
            <Button variant="outline" className="hover:bg-primary/10" onClick={() => signOut({ callbackUrl: "/" })}>Logout</Button>
            {user?.image && (
              <Image
                src={user.image}
                height={40}
                width={40}
                alt={`${user.name}'s Profile picture'`}
                className="rounded-full border shadow-sm object-cover"
              />
            )}
          </>
        ) : (
          <>
            <Link href="/">
              <Button variant="outline" className="hover:bg-primary/10">Login</Button>
            </Link>
            <Link href="/">
              <Button variant="default">Sign Up</Button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
