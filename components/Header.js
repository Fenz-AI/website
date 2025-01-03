import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="navbar bg-gray">
      <div className="navbar-start px-3">
        <Image
          src="/images/logo2.png"
          alt="Logo"
          width={60}
          height={40}
          objectFit="contain"
        />
      </div>
      <div className="navbar-end">
        <div className="px-6 text-2xl">
          <Link href="/">Home</Link>
        </div>
        <div className="px-6 text-2xl">
          <Link href="/blog">Blog</Link>
        </div>
        <div className="px-6 text-2xl">
          <Link href="/about">About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
