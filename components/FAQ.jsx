"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

function FAQ() {
  const [isOpen, setisOpen] = useState(null);

  const handleOpen = (id) => {
    setisOpen(isOpen === id ? null : id);
  };

  return (
    <div id="FAQ" className="w-full px-4">
      <div className="w-full flex flex-col items-center justify-center max-md:pt-12">
        <div className="w-[155px] p-0.5 rounded-full px-4 bg-neutral-50/5 border-2 border-neutral-800/40 items-center justify-center flex">
          <span className="p-1.5 rounded-full animate-pulse bg-indigo-800"></span>
          <p className="text-slate-100 py-1 rounded-full text-md font-semibold w-full text-center">
            FAQ
          </p>
        </div>
        <p className="text-4xl md:text-3xl text-slate-50 mt-2 text-center">
          Frequently Asked Questions
        </p>
        <p className="text-md text-slate-300 mt-3 text-center">
          We help to track of your expenses and income. it shows a flow of
          records over a specific period of time{" "}
          <br className="hidden md:flex" /> such as weekly, monthly or yearly.
        </p>
      </div>

      <div className="w-full flex flex-col items-center justify-center gap-2 my-8">
        {QuestionCards.map((question, index) => (
          <div
            key={index}
            className="w-full md:w-[50%] relative px-4 py-4 rounded-xl overflow-hidden border-2 border-neutral-800/70 items-center flex flex-col"
          >
            <div className=" w-full flex items-center justify-between ">
              <p className="text-md font-bold text-slate-200">
                {question.question}
              </p>
              <button onClick={() => handleOpen(index)}>
                {isOpen === index ? (
                  <Minus className="text-slate-200 size-5" />
                ) : (
                  <Plus className="text-slate-200 size-5" />
                )}
              </button>
            </div>
            {isOpen === index && (
              <div className="mt-4 w-full text-sm text-slate-200">
                {question.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center w-full py-4 ">
        <div className="w-full md:w-[50%] bg-white/5 relative px-4 py-4 rounded-xl overflow-hidden border-1 border-neutral-800/30 items-center flex flex-col">
          <p className="font-bold text-xl w-full text-slate-100">
            You Have Different Questions?
          </p>
          <p className="text-sm text-slate-200 my-4">
            Our team will answer all your questions. we ensure a quick response.
          </p>
          <button className="w-[120px] self-start font-semibold text-sm rounded-full p-1 py-2 bg-white/5 text-slate-100 mt-4">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default FAQ;

const QuestionCards = [
  {
    id: 1,
    question: "How do i create an account here?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam labore numquam nobis cum, delectus accusantium expedita sint ipsa libero possimus pariatur eos fugit deserunt ex voluptas et consequuntur consequatur sit magnam deleniti, iure voluptatibus. Nam officiis ab quisquam.",
  },
  {
    id: 2,
    question: "Can i track expenses and income easily?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam labore numquam nobis cum, delectus accusantium expedita sint ipsa libero possimus pariatur eos fugit deserunt ex voluptas et consequuntur consequatur sit magnam deleniti, iure voluptatibus. Nam officiis ab quisquam.",
  },
  {
    id: 3,
    question: "Is there a subscription or monthly fee?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam labore numquam nobis cum, delectus accusantium expedita sint ipsa libero possimus pariatur eos fugit deserunt ex voluptas et consequuntur consequatur sit magnam deleniti, iure voluptatibus. Nam officiis ab quisquam.",
  },
  {
    id: 4,
    question: "Can i set monthly spending limit here?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam labore numquam nobis cum, delectus accusantium expedita sint ipsa libero possimus pariatur eos fugit deserunt ex voluptas et consequuntur consequatur sit magnam deleniti, iure voluptatibus. Nam officiis ab quisquam.",
  },
  {
    id: 5,
    question: "Can i connect my bank account securely?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ullam labore numquam nobis cum, delectus accusantium expedita sint ipsa libero possimus pariatur eos fugit deserunt ex voluptas et consequuntur consequatur sit magnam deleniti, iure voluptatibus. Nam officiis ab quisquam.",
  },
];
