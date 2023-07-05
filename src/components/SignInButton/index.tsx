"use client";
import { Fingerprint, LogOut } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Loading } from "../Loading";

export function SignInButton() {
  // const { data: session, status } = useSession();
  // const router = useRouter();

  // if (status === "loading") {
  //   return <Loading size={20} />;
  // }

  // return session ? (
  //   <button
  //     className="flex items-center align-middle rounded-full border-0 box-border md:p-1"
  //     type="button"
  //     onClick={() => signOut({ callbackUrl: "/login" })}
  //   >
  //     <LogOut className="text-white" size={35} />
  //   </button>
  // ) : (
  return (
    <button
      className="flex flex-row items-center align-middle rounded-full bg-white border-0 p-1 box-border h-8 md:p-2"
      type="button"
    >
      <Fingerprint className="text-blue-950 md:pr-3" size={30} />
      <span className="font-sans hidden md:flex">Entrar</span>
    </button>
  );
}
