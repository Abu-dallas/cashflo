import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";

function Features() {
  return (
    <div className="w-full p-4 flex items-center justify-center flex-col mt-12">
      <div className=" p-0.5 gap-2 rounded-full px-4 bg-neutral-50/5 border-2 border-neutral-800/40 items-center justify-center flex">
        <span className="h-3 w-3 rounded-full ml-2 animate-pulse bg-indigo-800"></span>
        <p className=" text-slate-100 py-1 rounded-full text-md font-semibold w-full text-center">
          Features
        </p>
      </div>
      <div className="w-full mt-3">
        <p className="text-4xl md:text-3xl text-slate-50 text-center">
          Discover Our Advance Analytical Tools
        </p>
        <p className="text-md text-slate-300 text-center mt-6">
          Manage your money confidently every day that simplify, track and grow
          your finances effortlessly
        </p>
      </div>
      <div className=" w-full flex flex-col md:flex-row items-center justify-center gap-4 mt-6">
        <section className="w-full flex flex-col gap-3 border border-neutral-50/10 rounded-2xl overflow-hidden">
          <div className=" w-full h-[200px] relative  overflow-hidden  rounded-2xl flex flex-col p-4 py-8">
            <div className="w-[50%] h-[50%] bg-purple-800 opacity-70 absolute top-0 left-0 blur-3xl"></div>
            <div className="w-full  flex items-center justify-between">
              <div className="absolute top-0 right-4 border border-neutral-300/10 flex items-center gap-2 px-2 py-1 rounded-xl">
                <Image
                  src="/images/person1.jpg"
                  alt="world image"
                  width={2000}
                  height={2000}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col leading-5">
                  <p className="text-slate-300 font-semibold text-xs">
                    John Doe
                  </p>
                  <p className="text-slate-300 text-xs">johndoe@gmail.com</p>
                </div>
                <span className="p-1 px-2 rounded-lg bg-green-400 font-semibold text-xs text-slate-50">
                  Approved
                </span>
              </div>
            </div>

            <div className="w-full  flex items-center justify-between">
              <div className="absolute top-12 -right-3 border border-neutral-300/10 flex items-center gap-2 px-2 py-1 rounded-xl">
                <Image
                  src="/images/person2.jpg"
                  alt="world image"
                  width={2000}
                  height={2000}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col leading-5">
                  <p className="text-slate-300 font-semibold text-xs">
                    Aliyu Usman
                  </p>
                  <p className="text-slate-300 text-xs">aliyuusman@gmail.com</p>
                </div>
                <span className="p-1 px-2 rounded-lg bg-green-400 font-semibold text-xs text-slate-50">
                  Approved
                </span>
              </div>
            </div>

            <div className="w-full  flex items-center justify-between">
              <div className="absolute top-24 -right-4 border border-neutral-300/10 flex items-center gap-2 px-2 py-1 rounded-xl">
                <Image
                  src="/images/person3.jpg"
                  alt="world image"
                  width={2000}
                  height={2000}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col leading-5">
                  <p className="text-slate-300 font-semibold text-xs">
                    John Snow
                  </p>
                  <p className="text-slate-300 text-xs">johnsnow@gmail.com</p>
                </div>
                <span className="p-1 px-2 rounded-lg bg-red-400 font-semibold text-xs text-slate-50">
                  Pending
                </span>
              </div>
            </div>

            <div className="w-full  flex items-center justify-between">
              <div className="absolute top-36 -right-12 border border-neutral-300/10 flex items-center gap-2 px-2 py-1 rounded-xl">
                <Image
                  src="/images/person4.jpg"
                  alt="world image"
                  width={2000}
                  height={2000}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col leading-5">
                  <p className="text-slate-300 font-semibold text-xs">
                    Garba Yakubu
                  </p>
                  <p className="text-slate-300 text-xs">gyakubu14@gmail.com</p>
                </div>
                <span className="p-1 px-2 rounded-lg bg-green-400 font-semibold text-xs text-slate-50">
                  Approved
                </span>
              </div>
            </div>
          </div>
          <div className="w-full pl-4 mb-4 flex items-center justify-between relative">
            <div>
              <p className="text-slate-200 font-semibold text-lg">
                Split Payment in Seconds
              </p>
              <p className="text-slate-200 text-xs">
                Manage your money confidently every day that simplify, track and
                grow your finances effortlessly
              </p>
            </div>
            <div className="w-full  flex items-center justify-between -rotate-12">
              <div className="absolute -top-12 md:-top-3 -right-5 border border-neutral-300/10 flex items-center gap-2 px-2 py-1 rounded-xl">
                <Image
                  src="/images/person1.jpg"
                  alt="world image"
                  width={2000}
                  height={2000}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col leading-5">
                  <p className="text-slate-300 font-semibold text-xs">
                    Usman Yahaya
                  </p>
                  <p className="text-slate-300 text-xs">
                    usmanyahaya@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="relative mt-4 h-[300px] py-4 px-4 gap-2 rounded-3xl overflow-hidden bg-neutral-50/5 border-2 border-neutral-800/40">
          <div className="absolute -z-10 left-0 top-0 w-full h-[540%] rounded-b-full bg-white/5"></div>
          <div className="absolute -z-10 left-0 bottom-0 w-full h-[50%] rounded-t-full border border-neutral-50/5"></div>
          <p className="text-xl font-semibold text-slate-50 text-center">
            Transfer Money in Any Currency
          </p>
          <p className="text-sm text-slate-200 text-center">
            Manage your money confidently every day that simplify, track and
            grow your finances effortlessly
          </p>
          <span className="p-1.5 bg-purple-600 rounded-full absolute top-[42%] left-[45%]">
            <Image
              src="/images/user.png"
              alt="user icon"
              width={2000}
              height={2000}
              className="size-8"
            />
          </span>
          <span className="p-2 bg-purple-500/20 rounded-full absolute top-[30%] left-[65%]">
            <Image
              src="/images/master.jpg"
              alt="user icon"
              width={2000}
              height={2000}
              className="size-5 rounded"
            />
          </span>
          <span className="p-2 bg-purple-500/20 rounded-full absolute top-[45%] left-[75%]">
            <Image
              src="/images/visa.jpg"
              alt="user icon"
              width={2000}
              height={2000}
              className="size-5 rounded"
            />
          </span>
          <span className="p-2 bg-purple-500/20 rounded-full absolute top-[65%] left-[65%]">
            <Image
              src="/images/paypal.jpg"
              alt="user icon"
              width={2000}
              height={2000}
              className="size-5 rounded"
            />
          </span>
          <span className="p-2 bg-purple-500/20 rounded-full absolute bottom-[25%] left-[35%]">
            <Image
              src="/images/payoneer.jpg"
              alt="user icon"
              width={2000}
              height={2000}
              className="size-5 rounded"
            />
          </span>
          <span className="p-2 bg-purple-500/20 rounded-full absolute bottom-[40%] left-[15%]">
            <Image
              src="/images/express.jpg"
              alt="user icon"
              width={2000}
              height={2000}
              className="size-5 rounded"
            />
          </span>
          <span className="p-2 bg-purple-500/20 rounded-full absolute top-[30%] left-[25%]">
            <Image
              src="/images/master.jpg"
              alt="user icon"
              width={2000}
              height={2000}
              className="size-5 rounded"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Features;

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
