import Link from "next/link";

const Header = () => {
  return (
    <header className="navbar bg-base-100">
      <div className="navbar-start px-3">Logo</div>
      <div className="navbar-end">
        <div className="px-3">
          <Link href="/">Home</Link>
        </div>
        <div className="px-3">
          <Link href="/blog">Blog</Link>
        </div>
        <div className="px-3">
          <Link href="/about">About</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
