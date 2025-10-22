"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function NavBar() {
  const [Open, setOpen] = useState(false);
  return (
    <div className="w-full p-6  md:py-6  flex items-center justify-between relative">
      <div
        className={` transition-all duration-300 ${
          Open
            ? "w-full md:hidden fixed left-0 top-16 p-2 flex justify-center z-50"
            : "w-full md:hidden fixed left-0 top-16 p-2 flex justify-center z-50 -translate-y-[200%]"
        }`}
      >
        <div className="w-full py-4 bg-gradient-to-r from-cyan-700/80 from-[20%] to-white  p-4 rounded-2xl z-50">
          <div className="flex flex-col items-center justify-center">
            <Link
              href="#pricing"
              className="text-cyan-950 text-md font-semibold hover:text-slate-950"
            >
              Pricing
            </Link>
            <Link
              href="#about"
              className="text-cyan-950 text-md font-semibold hover:text-slate-950"
            >
              About
            </Link>
            <Link
              href="#testimonial"
              className="text-cyan-950 text-md font-semibold hover:text-slate-950"
            >
              Testimonial
            </Link>
            <Link
              href="#FAQ"
              className="text-cyan-950 text-md font-semibold hover:text-slate-950"
            >
              FAQ
            </Link>
            <button className="py-2 px-4 mt-6 rounded-full bg-cyan-950 text-white font-semibold text-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
      {/* LOGO */}
      <div className="flex items-center gap-3">
        <p className="text-slate-50 font-bold text-3xl tracking-tighter">
          Cashflo
        </p>
      </div>
      {/* Nav Links for tablet and Desktop */}
      <div className="text-lg hidden md:flex items-center justify-center gap-3">
        {NavLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="font-semibold text-slate-50"
          >
            {link.title}
          </Link>
        ))}
      </div>
      {/* Nav Links for mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!Open)}
          className="bg-purple-300/10 border-2 border-purple-500/20 p-2 rounded-full"
        >
          {Open ? (
            <X className="size-4 text-slate-50" />
          ) : (
            <Menu className="size-4 text-slate-50" />
          )}
        </button>
      </div>
    </div>
  );
}

export default NavBar;

const NavLinks = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "FAQ",
    href: "#faq",
  },
];
