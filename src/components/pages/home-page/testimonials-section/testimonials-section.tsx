"use client";

import { motion } from "framer-motion";
import {
  blurredWaterfallList,
  blurredWaterfallItem,
} from "@/lib/animation-variants";
import Image from "next/image";

export default function TestimonialsSection() {
  return (
    <div className="overflow-hidden bg-neutral-950 py-16 relative">
      <Image
        src="/images/homepage-background-orange.png"
        fill
        priority
        alt="dotted background"
        className="opacity-40 mt-32 object-contain z-10"
      />
      <div className="mx-auto w-full max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none z-50 lg:gap-y-8">
          {/* LEFT SIDE: Content */}
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Our people
            </h2>
            <p className="mt-6 text-xl/8 text-gray-300">
              Quasi est quaerat. Sit molestiae et. Provident ad dolorem
              occaecati eos iste. Soluta rerum quidem minus ut molestiae velit
              error quod. Excepturi quidem expedita molestias quas.
            </p>
            <p className="mt-6 text-base/7 text-gray-400">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat. Quasi aperiam sit non sit neque reprehenderit.
            </p>
            <div className="mt-10 flex">
              <a
                href="#"
                className="rounded-md bg-orange-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              >
                Join our team
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Images with stagger */}
          <motion.div
            variants={blurredWaterfallList}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            <motion.div
              variants={blurredWaterfallItem}
              className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none z-50 lg:self-end"
            >
              <video
                className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-800 object-cover max-sm:w-120"
                autoPlay
                muted
                loop
                playsInline
                poster="/video/posters/hero-poster.webp"
              >
                <source src="/video/hero/video-hero-low.mp4" type="video/mp4" />
              </video>
            </motion.div>

            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
              <motion.div
                variants={blurredWaterfallItem}
                className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto"
              >
                <img
                  alt=""
                  src="/images/woman-training-athletics-macaque.webp"
                  className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-800 object-cover"
                />
              </motion.div>

              <motion.div
                variants={blurredWaterfallItem}
                className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none z-50"
              >
                <img
                  alt=""
                  src="/images/animated-card-grid/image-card-training.webp"
                  className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-800 object-cover max-sm:w-120"
                />
              </motion.div>

              <motion.div
                variants={blurredWaterfallItem}
                className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none z-50"
              >
                <img
                  alt=""
                  src="/images/animated-card-grid/image-card-nutrition.webp"
                  className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-800 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
