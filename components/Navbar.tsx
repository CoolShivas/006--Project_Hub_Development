import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/LogoShiva.jpg" alt="logo" width={100} height={2} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              {/* If user is already LogIn then it he/she is able to see this pages */}
              <Link href="/">
                <span className="text-6 font-sans max-sm:hidden">Create</span>
              </Link>

              <Link href="/">
                <span className="text-6 font-sans max-sm:hidden">Logout</span>
              </Link>

              <Link href="/">
                <span className="text-6 font-sans max-sm:hidden">
                  {/* Username */}
                  {/* Instead of username getting the LogIn/SignUp user actual name from GitHub account on navbar. */}
                  {session.user?.name}
                </span>
              </Link>
            </>
          ) : (
            <>
              {/* Else first SignUp to move instead */}
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
              >
                <button type="submit" className="text-6 font-sans">
                  Login
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
