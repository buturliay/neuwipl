'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Can I join even if I don’t know if I’m going to law school post grad?",
    answer: "Yes! Law school or not, as long as you have an interest in a career in law, you are welcome to join!",
  },
  {
    question: "Can I join at any point in the semester?",
    answer: "Yes! We have a rolling membership system. You can join at any point during the year by filling out the form under “How to Join”.",
  },
  {
    question: "How much are membership dues?",
    answer: "Women in Pre-Law is free for all members.",
  },
  {
    question: "How do I join the Slack and mailing list?",
    answer: "Check out our LinkTree!",
  },
  {
    question: "Can I be a woman in pre-law even if I’m not in Boston because of co-op?",
    answer: "Yes! Fill out our remote member form to have remote access to our meetings.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="w-full px-6 py-20 scroll-mt-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-semibold text-gray-900 uppercase mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl bg-white hover:shadow-lg transition-shadow duration-200 border border-pink-500"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center text-left px-6 py-5 text-m font-medium text-black"
                  aria-expanded={isOpen}
                >
                  {faq.question}
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-gray-700 text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
