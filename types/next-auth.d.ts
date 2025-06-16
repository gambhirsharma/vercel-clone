// next-auth.d.ts
// import { Session } from "next-auth";
//
// declare module "next-auth" {
//   interface Session {
//     accessToken?: string; 
//   }
// }
// next-auth.d.ts
// import { DefaultSession } from 'next-auth';
//
// declare module 'next-auth' {
//   interface Session extends DefaultSession {
//     accessToken: string;
//     refreshToken: string;
//   }
// }


// declare module "next-auth" {
//   /**
//    * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
//    */
//   interface Session {
//     user:{
//       access_token: any & DefaultSession["user"];
//     }
//   }
//
//   interface User {
//       access_token: any
//      & DefaultSession["user"];
//   }
// }
//
// declare module "next-auth/jwt" {
//   /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
//   interface JWT {
//     /** OpenID ID Token */
//     access_token?: string;
//   }
// }
