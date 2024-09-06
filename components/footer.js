import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Fenz AI. All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Contact
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;