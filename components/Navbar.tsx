import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/LogoShiva.jpg" alt="logo" width={100} height={2} />
        </Link>
        <div className="flex items-center gap-5 text-black">
          <Link href="/">
            <span className="text-6 font-sans max-sm:hidden">Create</span>
          </Link>

          <Link href="/">
            <span className="text-6 font-sans max-sm:hidden">Logout</span>
          </Link>

          <Link href="/">
            <span className="text-6 font-sans max-sm:hidden">Username</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
