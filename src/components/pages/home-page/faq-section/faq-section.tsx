// components/FaqSection.tsx
"use client";
import { faqData } from "@/data/faq-data";

export function FaqSection() {
  return (
    <div className="bg-gradient-to-b from-neutral-950 via-neutral-950 border-t border-neutral-800 shadow-inner to-neutral-950">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <h2 className="text-4xl font-semibold tracking-tight text-orange-500 sm:text-5xl">
          Frequently asked questions
        </h2>
        <dl className="mt-20 divide-y divide-white/10">
          {faqData.map((faq) => (
            <div
              key={faq.question}
              className="py-8 first:pt-0 last:pb-0 lg:grid lg:grid-cols-12 lg:gap-8"
            >
              <dt className="text-base/7 font-semibold text-white lg:col-span-5">
                {faq.question}
              </dt>
              <dd className="mt-4 lg:col-span-7 lg:mt-0">
                <p className="text-base/7 text-gray-400">{faq.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
