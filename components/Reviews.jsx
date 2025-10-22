import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import React from "react";

function Reviews() {
  return (
    <div
      id="testimonial"
      className="p-4 my-6 mt-2 md:mt-12 w-full flex flex-col items-center justify-center gap-4"
    >
      <div className="relative w-full">
        <div className="absolute -top-20 -right-10 h-[150px] w-[200px] md:w-[500px] md:h-[200px] opacity-60 bg-purple-950 blur-3xl"></div>
        <div className="w-full flex flex-col items-center justify-center max-md:pt-12">
          <div className="w-[155px] p-0.5 gap-2 rounded-full px-4 bg-neutral-50/5 border-2 border-neutral-800/40 items-center justify-center flex">
            <span className="p-1.5 rounded-full ml-2 animate-pulse bg-indigo-800"></span>
            <p className="text-slate-100 py-1 rounded-full text-md font-semibold w-full text-center">
              Testimonial
            </p>
          </div>
          <p className="text-4xl md:text-3xl text-slate-50 mt-2 text-center">
            Success Stories From <br />
            Our Clients
          </p>
          <p className="text-md text-slate-300 mt-3 text-center">
            Explore how we create a measurable results for every client we
            serve.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 w-full mt-8 relative">
        <div className="absolute -bottom-25 -left-10 h-[150px] w-[200px] md:w-[500px] md:h-[200px] opacity-60 bg-purple-950 blur-3xl"></div>
        {reviews.map((person, index) => (
          <div key={index} className="md:w-[50%]">
            <Quote className="size-8 mb-2" fill="purple" />
            <p className="text-lg font-semibold md:font-bold text-center text-slate-200 mb-4">
              "{person.review}"
            </p>
            <div className="flex items-center justify-between py-4 border-t-2 border-neutral-900">
              <div className="flex gap-2 items-center">
                <Image
                  src={person.image}
                  alt="world image"
                  width={2000}
                  height={2000}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col leading-5">
                  <p className="text-slate-50 font-semibold text-sm">
                    {person.name}
                  </p>
                  <p className="text-slate-300 text-xs">{person.work}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-purple-950/60 rounded-full p-1">
                  <ChevronLeft className="text-slate-200 size-4" />
                </button>
                <button className="bg-purple-950/60 rounded-full p-1">
                  <ChevronRight className="text-slate-200 size-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;

const reviews = [
  {
    name: "John Snow",
    work: "Freelancing",
    review:
      "Excellent customer support and a very secure service. Highly recommended for daily finance, it feels like having a personal finance advisor in my pocket.",
    image: "/images/person1.jpg",
  },
];
