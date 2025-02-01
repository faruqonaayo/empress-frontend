"use client";

import Image from "next/image";
import { IoCallOutline } from "react-icons/io5";
import SearchDropdown from "./search-drop-down";
import WishlistDropdown from "./wishlist-drop-down";
import UserDropdown from "./user-drop-down";
import CartDropdown from "./cart-drop-down";
import { useEffect, useState } from "react";
import EmpressLogo from "../../../public/empress_logo.png";
import Link from "next/link";

export default function NavBar() {
  const [scrolledIntro, setScrolledIntro] = useState(false);

  const handleScroll = () => {
    const introHeight = document.getElementById("introduction").offsetHeight;

    if (window.scrollY > introHeight) {
      setScrolledIntro(true);
    } else {
      setScrolledIntro(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`py-2 transition-colors duration-300 ${
        scrolledIntro ? "bg-blue-900 text-white" : "bg-white text-black"
      }`}
    >
      <nav className="flex justify-between items-center px-4 h-[60px]">
        {/* Contact Us */}
        <Link
          href="/contact"
          className="flex items-center cursor-pointer hover:bg-gray-200 py-2 rounded-full"
        >
          <IoCallOutline size={22} className="mx-2" />
        </Link>

        {/* Empress Logo */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
        >
          <Image src={EmpressLogo} width={80} height={80} alt="Empress Logo" />
        </Link>

        {/* Icons Section */}
        <div className="flex items-center text-xl space-x-10 mx-2">
          <SearchDropdown />
          <div className="cursor-pointer">
            <WishlistDropdown />
          </div>
          <div className="cursor-pointer">
            <UserDropdown />
          </div>
          <div className="cursor-pointer">
            <CartDropdown />
          </div>
        </div>
      </nav>
    </div>
  );
}
