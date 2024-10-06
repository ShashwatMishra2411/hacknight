import React from "react";
import { faqs } from "@/constants/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <div className="flex flex-col md:px-20 px-10 w-full">
      <h1 className="p-20 alata-regular whitespace-nowrap lg:text-8xl sm:text-6xl text-4xl font-extrabold text-transparent bg-coming bg-clip-text uppercase text-center">
        FAQs
      </h1>
      <Accordion
        className="w-full flex flex-col gap-10"
        type="single"
        collapsible
      >
        {faqs.map((faq, index) => {
          return (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-2xl border-0"
            >
              <AccordionTrigger className="bg-gradient-to-r flex justify-center hover:no-underline opacity-80 from-[#F90F00] to-[#FF5C00] border-0 rounded-2xl text-white text-xl font-bold rounded-b-none p-6">
                <span className="opacity-100">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="bg-gradient-to-r flex justify-center hover:no-underline opacity-70 from-[#F90F00] to-[#FF5C00] border-0 rounded-2xl text-white text-base rounded-t-none p-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
