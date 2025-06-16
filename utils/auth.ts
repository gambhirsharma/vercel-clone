import { getServerSession } from "next-auth"

import GithubProvider from "next-auth/providers/github"
import type { GetServerSidePropsContext, NextApiRequest, NextApiResponse } from "next"
import type { NextAuthOptions } from "next-auth"


export const config = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
      authorization: {
        params: {
          scope: "read:user repo"
        }
      }
      
    }),
  ],
    callbacks: {
    async jwt({ token, account }) {
      if (account) {
        console.log("GitHub Access Token:", account.access_token);
        token.accessToken = account.access_token;  // Store the GitHub access token
         // token.id = account.userId
      }
      return token;
    },

// async session({ session, token}) {
//     session.accessToken = token.accessToken
//     return session
//     }
    async session({ session, token }) {
      if (token?.accessToken) session.accessToken = token.accessToken

      return session
    },

  }

} satisfies NextAuthOptions

export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config)
}

declare module "next-auth" {
  interface Session {
    accessToken?: string
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string
  }
}

// export const {
//   handlers: { GET, POST },
//   signIn,
//   signOut,
// } = NextAuth(config);
