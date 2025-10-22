import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <>
      <div
        id="about"
        className="p-4 my-6 mt-2 md:mt-12 w-full flex flex-col items-center justify-center md:flex-row gap-4"
      >
        <div className="relative w-full">
          <div className="w-full flex flex-col justify-center max-md:pt-12">
            <div className="w-[140px] p-0.5 gap-2 rounded-full px-4 bg-neutral-50/5 border-2 border-neutral-800/40 items-center justify-center flex">
              <span className="p-1.5 rounded-full ml-2 animate-pulse bg-indigo-800"></span>
              <p className=" text-slate-100 py-1 rounded-full text-md font-semibold w-full text-center">
                About Us
              </p>
            </div>
            <p className="text-4xl md:text-3xl text-slate-50 mt-2">
              Expert Solution For Your Financial Future
            </p>
            <p className="text-md text-slate-300 mt-3">
              Our comprehensive solutions provide expert guidance in budgeting,
              expenses tracking, investment management and more.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 -ml-2 mt-4">
            <div className="p-0.5 gap-2 rounded-full items-center justify-center flex">
              <span className="h-4 w-4 rounded-full ml-2 bg-indigo-900"></span>
              <p className=" text-slate-100 py-1 text-md w-full">
                AI powered financial analysis
              </p>
            </div>

            <div className="p-0.5 gap-2 rounded-full items-center justify-center flex">
              <span className="h-4 w-4 rounded-full ml-2 bg-indigo-900"></span>
              <p className=" text-slate-100 py-1 text-md w-full">
                Fast and easy account setup
              </p>
            </div>

            <div className="p-0.5 gap-2 rounded-full items-center justify-center flex">
              <span className="h-4 w-4 rounded-full ml-2 bg-indigo-900"></span>
              <p className=" text-slate-100 py-1 text-md w-full">
                Time management and effciency
              </p>
            </div>

            <div className="p-0.5 gap-2 rounded-full items-center justify-center flex">
              <span className="h-4 w-4 rounded-full ml-2 bg-indigo-900"></span>
              <p className=" text-slate-100 py-1 text-md w-full">
                Secure and tranparent system
              </p>
            </div>
            <button className="w-[200px] my-4 ml-2 text-slate-50 font-semibold bg-purple-950/10 p-2 rounded-full border-2 border-neutral-800/70 items-center justify-center flex">
              Start 7 Days Free Trial
            </button>
          </div>
          <div className="flex items-center justify-center gap-5 py-6">
            <div className="my-4 text-slate-50 bg-purple-950/10 py-2 rounded-2xl px-4 border-2 border-neutral-800/70 items-center justify-center flex flex-col">
              <span className="font-semibold">24k+</span>
              <span className="">Business</span>
            </div>
            <div className="my-4 text-slate-50  bg-purple-950/10 py-2 rounded-2xl px-4 border-2 border-neutral-800/70 items-center justify-center flex flex-col">
              <span className="font-semibold">$16M+</span>
              <span className="text-sm">Transaction</span>
            </div>
            <div className="my-4 text-slate-50  bg-purple-950/10 py-2 rounded-2xl border-2 px-4 border-neutral-800/70 items-center justify-center flex flex-col">
              <span className="font-semibold">160M+</span>
              <span className="text-sm">Yearly</span>
            </div>
          </div>
        </div>
        <div className="w-full relative overflow-hidden pb-4">
          <Image
            src="/images/world1.jpg"
            alt="world image"
            width={2000}
            height={2000}
            className="w-full md:w-[250px] h-[200px] object-cover -z-20 mt-14 grayscale-100 opacity-5"
          />
          <div className="absolute top-0 w-full h-full bg-gradient-to-b from-purple-950/60 from-[80%] to-purple-950/5 -z-10 rounded-t-3xl"></div>
          <div className="flex items-center justify-between">
            <div className="w-[200px] -rotate-3 -translate-x-12 md:-translate-x-8 bg-indigo-300/15 border border-neutral-300/10 rounded-2xl py-2 absolute top-30">
              <p className="text-center text-slate-200 text-md">
                Total Revenue
              </p>
              <p className="text-center text-slate-200 text-2xl font-bold">
                $234.98k
              </p>
              <p className="text-center text-slate-200 text-xs mt-4 font-semibold">
                204.67%
              </p>
            </div>
            <div className="flex flex-col gap-1.5 absolute top-20 right-0">
              {users.map((user, index) => (
                <div
                  key={index}
                  className={`" border border-neutral-300/10 flex items-center gap-2 p-2 rounded-full pr-30" ${
                    index === 0
                      ? "translate-x-22 md:translate-x-20 bg-indigo-300/15 pr-24"
                      : index === 1
                      ? "translate-x-16 md:translate-x-20 bg-indigo-300/15"
                      : index === 2
                      ? "translate-x-12 md:translate-x-20 bg-indigo-300/15"
                      : ""
                  }`}
                >
                  <Image
                    src={user.image}
                    alt="world image"
                    width={2000}
                    height={2000}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex flex-col leading-5">
                    <p className="text-slate-200 font-semibold text-sm">
                      {user.name}
                    </p>
                    <p className="text-slate-200 text-xs">{user.username}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex items-center justify-center">
            <div className="w-[300px] bg-indigo-300/15 mt-8 border border-neutral-300/10 rounded-2xl px-4 pt-2 pb-3">
              <p className="text-slate-100 font-semibold text-lg">
                Trusted by 2M+ Customers
              </p>
              <div className="w-full bg-indigo-300/15 mt-2 border border-neutral-300/10 rounded-2xl px-2 py-3">
                <p className="text-slate-100 font-semibold text-sm leading-4 pt-1 pb-3">
                  Join our <span className="text-yellow-500 mb-3">+10,000</span>{" "}
                  new customers who choose our product every day!
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center -space-x-1">
                    {peoples.map((people, index) => (
                      <Image
                        key={index}
                        src={people}
                        alt="peoples images"
                        width={2000}
                        height={2000}
                        className="w-7 h-7 rounded-full"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-center gap-1">
                      <Star className="size-5 text-yellow-500" fill="orange" />
                      <Star className="size-5 text-yellow-500" fill="orange" />
                      <Star className="size-5 text-yellow-500" fill="orange" />
                      <Star className="size-5 text-yellow-500" fill="orange" />
                      <Star className="size-5 text-yellow-500" fill="orange" />
                    </div>
                    <p className="text-xs text-slate-100 font-semibold">
                      344+ Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;

const users = [
  {
    name: "Rahman Kabeer",
    image: "/images/person1.jpg",
    username: "@rahmankabeer",
  },
  {
    name: "John Snow",
    image: "/images/person2.jpg",
    username: "@johnsnow",
  },
  {
    name: "Yakubu Garba",
    image: "/images/person3.jpg",
    username: "@yakubugarba",
  },
];

const peoples = [
  "/images/person5.jpg",
  "/images/person4.jpg",
  "/images/person3.jpg",
  "/images/person2.jpg",
];
