import { CreditCard, Target, TrafficCone } from "lucide-react";
import React from "react";

function WhyUs() {
  return (
    <div className="w-full p-4 flex items-center justify-center flex-col mt-12">
      <div className=" p-0.5 gap-2 rounded-full px-4 bg-neutral-50/5 border-2 border-neutral-800/40 items-center justify-center flex">
        <span className="h-3 w-3 rounded-full ml-2 animate-pulse bg-indigo-800"></span>
        <p className=" text-slate-100 py-1 rounded-full text-md font-semibold w-full text-center">
          Why Choose Us
        </p>
      </div>
      <div className="w-full mt-3">
        <p className="text-4xl md:text-3xl text-slate-50 text-center">
          Built For Everyday Financial Success
        </p>
        <p className="text-md text-slate-300 text-center mt-6">
          Manage your money confidently every day that simplify, track and grow
          your finances effortlessly
        </p>
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center mt-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className=" p-6 gap-2 rounded-3xl overflow-hidden bg-neutral-50/5 border-2 border-neutral-800/40 items-center justify-center flex flex-col relative"
            >
              <div className="absolute top-0 right-0 w-[30%] h-[70px] bg-gradient-to-l from-purple-800 to-purple-950 -z-10 blur-3xl "></div>
              <span className="p-4 rounded-full bg-neutral-50/5">
                {card.icon}
              </span>
              <p className=" text-slate-100 py-1 rounded-full text-lg font-semibold w-full text-center">
                {card.title}
              </p>
              <p className="text-sm text-slate-300 text-center">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhyUs;

const cards = [
  {
    title: "Real-Time Expenses Tracking",
    desc: "Monitor every transcation instantly to stay on top of your spendings at all times",
    icon: <Target className="text-slate-200 size-4" />,
  },
  {
    title: "Real-Time Expenses Tracking",
    desc: "Monitor every transcation instantly to stay on top of your spendings at all times",
    icon: <TrafficCone className="text-slate-200 size-4" />,
  },
  {
    title: "Real-Time Expenses Tracking",
    desc: "Monitor every transcation instantly to stay on top of your spendings at all times",
    icon: <CreditCard className="text-slate-200 size-4" />,
  },
];
