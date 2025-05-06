import Link from "next/link";
import { ShoppingBag } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 px-4">
      <div className="max-w-7xl px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Logo and Description */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">SwapSpot</span>
          </Link>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-start md:justify-end gap-6 text-sm">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="#" className="hover:text-white transition">
            About
          </Link>
          <Link href="/products" className="hover:text-white transition">
            Products
          </Link>
          <Link href="#" className="hover:text-white transition">
            Contact
          </Link>
          <Link href="#" className="hover:text-white transition">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
