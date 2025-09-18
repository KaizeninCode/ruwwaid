"use client";
import React from "react";
import Link from "next/link";

const MobileNav = () => {
    const toggleMenu = () => {
        const menu = document.getElementById('menu');
        menu?.classList.toggle('hidden');
    }

  const navlinks = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about-us" },
    { name: "Our Services", href: "#our-services" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <header className="py-4 w-full flex justify-between items-center lg:hidden shadow-xl">
      <div className="flex justify-between w-full items-center">
        <img src="/ruwwad-icon-transparent.png" alt="Ruwwad Limited Logo" className="w-12 h-8"/>
        <h1 className="text-lg font-bold">Ruwwad Limited</h1>
        <div className="text-[#151e27] mr-6" onClick={toggleMenu}> &#9776;</div>
      </div>
      {/* menu overlay */}
      <div id='menu' className="transition duration-1000 ease-in-out hidden absolute right-4 top-0 p-4 bg-stone-200 rounded-lg shadow-lg w-[150px] h-fit mt-12">
        <ul className="flex flex-col gap-4">
          {navlinks.map((link, i) => (
            <Link
              href={link.href}
              key={i}
              className="text-sm"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default MobileNav;