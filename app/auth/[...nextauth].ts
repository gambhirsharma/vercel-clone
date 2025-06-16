import NextAuth from "next-auth"
import type { NextAuthOptions } from "next-auth"
import { config } from "@/utils/auth"

// export const authOptions: NextAuthOptions = {
//   // your configs
// }

// export default NextAuth(authOptions)
export default NextAuth(config)
