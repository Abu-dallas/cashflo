import { Check } from "lucide-react";
import React from "react";

function Pricing() {
  return (
    <div id="pricing" className="w-full px-4 py-6 ">
      <div className="w-full flex flex-col items-center justify-center max-md:pt-12">
        <div className="w-[155px] p-0.5 gap-2 rounded-full px-4 bg-neutral-50/5 border-2 border-neutral-800/40 items-center justify-center flex">
          <span className="p-1.5 rounded-full ml-2 animate-pulse bg-indigo-800"></span>
          <p className="text-slate-100 py-1 rounded-full text-md font-semibold w-full text-center">
            Our Plans
          </p>
        </div>
        <p className="text-4xl md:text-3xl text-slate-50 mt-2 text-center">
          Explore Our Pricing Plans
        </p>
        <p className="text-md text-slate-300 mt-3 text-center">
          We help to track of your expenses and income. it shows a flow of
          records over a specific period of time{" "}
          <br className="hidden md:flex" /> such as weekly, monthly or yearly.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 flex-col md:flex-row mt-12 overflow-hidden">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full relative px-6 py-4 rounded-3xl overflow-hidden bg-neutral-50/5 border-2 border-neutral-800/70 items-center flex flex-col"
          >
            <div className="absolute bottom-0 left-0 w-full h-[40%] bg-white -z-10 blur-3xl opacity-5"></div>
            <p className=" text-slate-100 py-1 rounded-full text-2xl font-bold w-full">
              {card.title}
            </p>
            <p className="text-sm text-slate-300 w-full">{card.desc}</p>
            <p className=" text-slate-100 py-1 rounded-full text-4xl w-full font-semibold mt-2">
              ${card.price}
            </p>
            <p className="text-sm text-slate-300 w-full">
              Monthly Subscription
            </p>
            <button className="w-full font-semibold text-lg rounded-full p-2 bg-white/5 text-slate-100 mt-4">
              Get Started
            </button>
            <p className="text-sm text-slate-300 w-full my-2">Includes</p>
            <div className="flex gap-1 flex-col w-full">
              {card.features.map((feature, index) => (
                <div key={index} className="flex gap-3 items-center">
                  <span className="border-2 border-neutral-50/50 w-6 h-6 rounded-full flex items-center justify-center">
                    <Check className="size-3 text-slate-50" />
                  </span>
                  <p className=" text-slate-100 py-1 rounded-full text-md w-full">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-300 w-full my-4">
              You can easily cancel anytime
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;

const cards = [
  {
    title: "Basic Plan",
    desc: "Ideal for getting started",
    price: "49",
    features: [
      "Track income and expenses",
      "Cash flow management",
      "Set saving goals",
      "Monthly spending reports",
      "Email notificcations",
    ],
  },
  {
    title: "Business Plan",
    desc: "Ideal for businesses",
    price: "179",
    features: [
      "Everything in basic plan",
      "Multi-user access with role",
      "Advance financial report",
      "Dashbord account manager",
      "Custom dashboard integration",
    ],
  },
  {
    title: "Premium Plan",
    desc: "Ideal for businesses",
    price: "299",
    features: [
      "Everything in Business plan",
      "Multi-user task manager",
      "Custom UI design",
      "Recurring income & expenses tracking",
      "Export financial reports",
    ],
  },
];
