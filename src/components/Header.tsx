"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Tracks",
    path: "/papers",
  },
  {
    name: "Speakers",
    path: "/speakers",
  },
  {
    name: "Committee",
    path: "/committee",
  },
  {
    name: "Registration",
    path: "/registrations",
  },
  {
    name: "Venue",
    path: "/venue",
  }
];

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMenu(false);
  }, [pathName]);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`w-full h-16 fixed z-[100] top-0 left-0 flex items-center justify-between px-4 md:px-6 transition-all duration-300 ${
        scrolled 
          ? 'bg-white border-b border-gray-300 shadow-lg backdrop-blur-sm' 
          : 'bg-white/98 border-b border-gray-200 shadow-md backdrop-blur-sm'
      }`}>
        <div className="flex items-center justify-start hover-scale">
          <Image
            src={"/images/logo.png"}
            width={60}
            height={60}
            alt="IEM ICDC 2026 Logo"
            className="cursor-pointer w-[50px] h-[50px] object-contain hover-opacity smooth-transition"
            onClick={() => router.push("/")}
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-1 justify-center max-w-4xl">
          {pages.map((page, index) => (
            <div
              key={page.name}
              onClick={() => router.push(page.path)}
              className={`px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium smooth-transition cursor-pointer hover-scale relative whitespace-nowrap ${
                pathName === page.path 
                  ? "text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:rounded-full" 
                  : "text-gray-700 hover:text-primary"
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {page.name}
            </div>
          ))}
        </nav>

        {/* Partner Logos - Desktop */}
        <div className="hidden xl:flex items-center justify-end gap-2 flex-shrink-0">
          <Image
            src={"/images/iem-logo.png"}
            width={50}
            height={25}
            alt="IEM Logo"
            className="cursor-pointer hover:opacity-80 transition-opacity duration-200 object-contain h-6"
            onClick={() => window.open("https://iem.edu.in/", "_blank")}
          />
          <Image
            src={"/images/uem-logo.png"}
            width={50}
            height={25}
            alt="UEM Logo"
            className="cursor-pointer hover:opacity-80 transition-opacity duration-200 object-contain h-6"
            onClick={() => window.open("https://uem.edu.in/", "_blank")}
          />
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex-shrink-0">
          <button
            onClick={() => setMenu(!menu)}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
          >
            {menu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {menu && (
        <>
          {/* Backdrop */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/20 z-[98]"
            onClick={() => setMenu(false)}
          />
          <nav className="lg:hidden fixed top-16 left-0 w-full bg-white backdrop-blur-sm border-b border-gray-300 z-[99] shadow-lg">
            <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-4rem)] overflow-y-auto bg-white">
              {pages.map((page) => (
                <div
                  key={page.name}
                  onClick={() => {
                    router.push(page.path);
                    setMenu(false);
                  }}
                  className={`block px-3 py-2 text-sm font-medium smooth-transition cursor-pointer rounded-md ${
                    pathName === page.path ? "text-primary font-semibold bg-red-50" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {page.name}
                </div>
              ))}
            
            {/* Partner Logos - Mobile */}
            <div className="flex items-center justify-start gap-4 pt-4 border-t border-gray-200 mt-4">
              <Image
                src={"/images/iem-logo.png"}
                width={40}
                height={20}
                alt="IEM Logo"
                className="cursor-pointer hover:opacity-80 transition-opacity duration-200 object-contain h-5"
                onClick={() => window.open("https://iem.edu.in/", "_blank")}
              />
              <Image
                src={"/images/uem-logo.png"}
                width={40}
                height={20}
                alt="UEM Logo"
                className="cursor-pointer hover:opacity-80 transition-opacity duration-200 object-contain h-5"
                onClick={() => window.open("https://uem.edu.in/", "_blank")}
              />
            </div>
          </div>
        </nav>
        </>
      )}
    </>
  );
};
