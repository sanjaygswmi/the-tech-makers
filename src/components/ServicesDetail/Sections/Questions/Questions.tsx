"use client";

import { useState } from "react";

type QuestionItem = {
  question: string;
  answer: string;
};

type QuestionsProps = {
  faq: QuestionItem[];
};

const Questions = ({ faq }: QuestionsProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-10 md:flex md:gap-8" aria-labelledby="service-faq-heading">
      <div className="my-auto text-center text-[25px] font-bold md:w-1/2 md:text-[40px]">
        <h2 id="service-faq-heading" className="leading-tight">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-sm font-normal">
          Need more details? Contact us at{" "}
          <a className="underline" href="mailto:info@thetechmakers.com">
            info@thetechmakers.com
          </a>
        </p>
      </div>

      <div className="accordion mx-auto w-full px-1 py-8 md:w-1/2 md:py-4">
        {faq.map((item, index) => {
          const isOpen = activeIndex === index;
          const triggerId = `service-faq-trigger-${index}`;
          const answerId = `service-faq-answer-${index}`;

          return (
            <div className="mt-3 rounded-md border px-4" key={item.question}>
              <button
                id={triggerId}
                type="button"
                className="flex w-full items-center justify-between gap-4 py-3 text-left font-medium text-gray-800"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                aria-controls={answerId}
              >
                <span>{item.question}</span>
                <span aria-hidden="true" className="shrink-0 text-xl text-red-500">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                id={answerId}
                role="region"
                aria-labelledby={triggerId}
                className="pb-4 text-sm leading-6 text-gray-600"
                hidden={!isOpen}
              >
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Questions;
