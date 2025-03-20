"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", href: "/" },
  { name: "Leaderboard", href: "/leaderboard" },
  { name: "Demo", href: "https://demo.fenz.ai" },
  { name: "Blog", href: "/blog" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 dark:bg-gray-900 z-50 rounded-lg">
      <Image
        src="/images/logo2.png"
        alt="Logo"
        width={30}
        height={30}
        objectFit="contain"
      />
      <div className="flex space-x-4">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 ${pathname === link.href ? "font-bold" : ""}`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;