import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="w-full flex flex-col justify-center md:flex-row gap-4 px-4 mt-6 mb-4">
      {/* left section of the hero/ top section in small devices */}
      <section>
        <div className="w-[250px] p-0.5 rounded-full px-1 bg-black/20 border-2 border-indigo-950 items-center justify-center flex">
          <span className="h-3 w-3 -z-10 rounded-full ml-2 animate-pulse bg-indigo-900"></span>
          <p className=" text-slate-100 py-1 rounded-full text-md font-semibold w-full text-center">
            Your Finance Fully, Optimized
          </p>
        </div>
        <p className="text-5xl w-fulls md:text-3xl text-slate-200 tracking-tight  mt-4">
          Stay Ahead With Latest Financial Analytics
        </p>
        <p className="text-slate-300 text-base mt-8">
          Take control of your money with real-time finance tracking and
          intuitive Analytics designed to grow your wealth effortlessly
        </p>
        <div className="w-full mt-8 flex items-center gap-4">
          <button
            type="button"
            className="w-[180px] px-2 py-3 font-semibold text-slate-50 rounded-full bg-gradient-to-r from-purple-950 to-purple-700"
          >
            GET STARTED
          </button>
          <button
            type="button"
            className="w-[180px] px-2 py-3 font-semibold text-slate-50 rounded-full border-2 border-slate-800"
          >
            LEARN MORE
          </button>
        </div>
      </section>
      {/* right section of the hero/ buttom section in small devices */}
      <section className="flex flex-col md:flex-row gap-4 w-full max-md:mt-12">
        <Image
          src="/images/dashboard2.jpg"
          alt="dashboard image"
          width={2000}
          height={2000}
          className=" object-cover rounded-lg translate-x-12"
        />
        <Image
          src="/images/visa2.png"
          alt="visa card image"
          width={2000}
          height={2000}
          className="object-cover md:hidden -translate-x-12"
        />
      </section>
    </div>
  );
}

export default Hero;
