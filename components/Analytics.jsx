import { MedalIcon, Users, Verified } from "lucide-react";
import React from "react";

function Analytics() {
  return (
    <div className="p-4 w-full mt-12">
      <p className="text-2xl text-center text-slate-300 font-bold">
        We empower real people{" "}
        <span className="font-normal">to grow their wealth</span>
      </p>
      <div className="flex gap-4 md:gap-8 items-center justify-center mt-6">
        <section className="flex gap-1 items-center justify-center">
          <span className="p-2 rounded-full bg-neutral-50/10">
            <Users className="text-slate-200 size-4" fill="white" />
          </span>
          <p className="text-3xl font-semibold text-slate-50">98%</p>
        </section>

        <section className="flex gap-1 items-center justify-center">
          <span className="p-2 rounded-full bg-neutral-50/10">
            <MedalIcon className="text-slate-200 size-4" />
          </span>
          <p className="text-3xl font-semibold text-slate-50">50M+</p>
        </section>

        <section className="flex gap-1 items-center justify-center">
          <span className="p-2 rounded-full bg-neutral-50/10">
            <Verified className="text-slate-200 size-4" />
          </span>
          <p className="text-3xl font-semibold text-slate-50">100%</p>
        </section>
      </div>
    </div>
  );
}

export default Analytics;
