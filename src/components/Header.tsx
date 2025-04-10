"use client";

import { Menu } from "lucide-react";
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
    name: "About Us",
    path: "/about",
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
    name: "Call For Papers",
    path: "/papers",
  },
  {
    name: "Registration",
    path: "/registrations",
  },
  {
    name: "Important Dates",
    path: "/#importantDates",
  },
  {
    name: "Venue",
    path: "/venue",
  },
  {
    name: "Awardees",
    path: "/awardees",
  }
];

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMenu(false);
  }, [pathName]);

  return (
    <header className="w-full md:h-[14vh] h-[10vh] sticky z-50 bg-white top-0 left-0 flex items-center justify-between md:pl-[1vw] md:pr-[1vw] border-b-[2px]">
      <div className="flex items-center justify-start w-fit gap-0 animate-animate-appear">
        <Image
          src={"/images/logo.png"}
          width={120}
          height={120}
          alt=""
          className=" cursor-pointer md:h-auto mt-2 md:w-[7vw] w-[27vw] h-[11vh] object-contain"
          onClick={() => router.push("/")}
        />
      </div>
      <nav
        className={`md:w-[65vw] w-full ${
          !menu ? "hidden" : "block"
        } md:flex h-[100vh] md:h-[10vh] pt-10 transition-all duration-300 flex md:flex-row flex-col bg-white backdrop-blur-md md:relative absolute bg-opacity-80 md:top-0 top-[10vh] left-0 items-center animate-animate-appear md:justify-center overflow-hidden justify-start md:pt-0 md:gap-12 gap-8 text-[1rem] font-[600] text-gray-600`}
      >
        {pages.map((page) => (
          <div
            key={page.name}
            onClick={() => router.push(page.path)}
            className={`hover:text-primary w-max transition-colors text-sm cursor-pointer duration-300 relative after:absolute after:bottom-[-5px] after:left-0 ${
              pathName === page.path ? "after:w-full text-primary" : "after:w-0"
            } after:h-[3px] after:bg-primary hover:after:w-full after:transition-all after:duration-300 after:rounded-full`}
          >
            {page.name}
          </div>
        ))}
        <Link
          href={"/schedule"}
          className={`animate-text animate-scaleUp hover:scale-110 transition-all bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-sm font-black`}
        >
          Schedule
        </Link>
      </nav>
      <div className="w-fit flex items-center justify-end gap-3">
        <Image
          src={"/images/iem-logo.png"}
          width={100}
          height={20}
          alt=""
          className=" cursor-pointer hidden md:block"
          onClick={() => window.open("https://iem.edu.in/", "__blank")}
        />
        <Image
          src={"/images/uem-logo.png"}
          width={100}
          height={20}
          alt=""
          className=" cursor-pointer hidden md:block"
          onClick={() =>
            window.open("https://uem.edu.in/uem-kolkata/", "__blank")
          }
        />
      </div>
      <Menu
        className="md:hidden mr-3 cursor-pointer"
        onClick={() => setMenu((prev) => !prev)}
      />
    </header>
  );
};
