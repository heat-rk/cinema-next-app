import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-red-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-white text-2xl font-bold transition-all duration-300 hover:text-black">
            The Red Cinema
          </span>
        </Link>
      </div>
    </header>
  );
};