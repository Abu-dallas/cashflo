import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-center mt-20 bg-white/10">
      <div className="w-full md:w-[70%] px-4 py-8 flex justify-between ">
        <div className="flex flex-col gap-1">
          <p className="text-slate-50 font-bold text-3xl tracking-tighter">
            Cashflo
          </p>
          <p className="text-sm text-slate-100">FAQ / Career</p>
        </div>

        <div className="flex flex-col gap-1 text-slate-200 text-xs">
          <Link href="#">Learn</Link>
          <Link href="#">Developer</Link>
          <Link href="#">App Download</Link>
          <Link href="#">Terms and Conditions</Link>
        </div>

        <div className="flex items-center gap-3 md:gap-4 self-start">
          <span className="p-1.5 rounded-full flex items-center justify-center bg-purple-700">
            <Facebook className="size-4 " />
          </span>
          <span className="p-1.5 rounded-full flex items-center justify-center bg-purple-700">
            <Instagram className="size-4 " />
          </span>
          <span className="p-1.5 rounded-full flex items-center justify-center bg-purple-700">
            <Linkedin className="size-4 " />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
