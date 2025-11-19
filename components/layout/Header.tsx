// components/layout/Header.tsx

import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col gap-3">

        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">MyProperty</Link>
        </div>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search properties..."
          className="p-2 rounded text-black"
        />

        {/* Accommodation Types */}
        <nav className="flex gap-4 text-sm">
          <button>Rooms</button>
          <button>Mansion</button>
          <button>Countryside</button>
          <button>Apartment</button>
        </nav>

        {/* Sign In / Sign Up */}
        <div className="flex gap-4 text-sm">
          <Link href="/signin">Sign In</Link>
          <Link href="/signup">Sign Up</Link>
        </div>

      </div>
    </header>
  );
};

export default Header;
