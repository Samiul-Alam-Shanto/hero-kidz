"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { LogOut, LogIn } from "lucide-react";

const AuthButtons = () => {
  const { status } = useSession();

  if (status === "loading") {
    return <div className="h-10 w-24 rounded-md bg-base-200 animate-pulse" />;
  }

  return (
    <div className="flex items-center gap-3">
      {status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="
            inline-flex items-center gap-2
            rounded-md px-4 py-2.5 text-sm font-medium
            bg-primary text-primary-content
            transition-all duration-200
            hover:opacity-90 hover:scale-[0.98]
            focus:outline-none focus:ring-2 focus:ring-primary/40
          "
        >
          <LogOut size={16} />
          Logout
        </button>
      ) : (
        <Link
          href="/login"
          className="
            inline-flex items-center gap-2
            rounded-md px-4 py-2.5 text-sm font-medium
            border border-primary text-primary
            transition-all duration-200
            hover:bg-primary hover:text-primary-content
            hover:scale-[0.98]
            focus:outline-none focus:ring-2 focus:ring-primary/40
          "
        >
          <LogIn size={16} />
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthButtons;
