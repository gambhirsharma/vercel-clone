import AuthButton from "@/components/AuthButton";
import LogIn from "./auth/LogIn";
import {getServerSession}  from "next-auth/next"
import {config} from "@/utils/auth"

export default async function Home() {
 const session = await getServerSession(config)
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <AuthButton /> */}
      {/* <LogIn /> */}
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
