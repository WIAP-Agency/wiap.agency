import { Container } from "../components/layout/Container";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "WEB.",
    description:
      "High-performance websites, web applications and digital experiences engineered for growth.",
    glow: "bg-cyan-500",
  },

  {
    number: "02",
    title: "MOBILE.",
    description:
      "Native and cross-platform mobile applications designed around real user behavior.",
    glow: "bg-blue-500",
  },

  {
    number: "03",
    title: "DESIGN.",
    description:
      "Intuitive interfaces and product experiences that connect business goals with user needs.",
    glow: "bg-violet-500",
  },

  {
    number: "04",
    title: "AI.",
    description:
      "Intelligent automation and AI-powered workflows that improve efficiency and decision-making.",
    glow: "bg-emerald-500",
  },

  {
    number: "05",
    title: "CONSULT.",
    description:
      "Technology strategy and digital transformation guidance for ambitious businesses.",
    glow: "bg-amber-500",
  },
];

export const WhatWeDo = () => {
  const cardsRef = useRef([]);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current;

      cards.forEach((card, index) => {
        if (index === cards.length - 1) return;

        gsap.to(card, {
          scale: 0.96,
          transformOrigin: "center top",

          ease: "none",

          scrollTrigger: {
            trigger: cards[index + 1],
            start: "top bottom",
            end: "top top",
            scrub: 0.5,
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="py-32">
      <Container size="wide">
        {/* Header */}

        <div className="mb-24">
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
            What We Do
          </span>

          <h2 className="font-space text-5xl md:text-7xl mt-6 leading-[0.95]">
            End-to-End
            <br />
            Digital Execution.
          </h2>
        </div>

        {/* Stack */}

        <div className="relative">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="
                sticky
                top-32

                mb-12

                min-h-[350px]

                overflow-hidden

                rounded-[40px]

                border
                border-white/10

                bg-[#0D111B]

                p-12
                md:p-20
              ">
              {/* Glow */}

              <div
                className={`
                  absolute

                  -top-32
                  -right-32

                  h-[400px]
                  w-[400px]

                  rounded-full

                  blur-[140px]

                  opacity-[0.08]

                  pointer-events-none

                  ${service.glow}
                `}
              />

              {/* Content */}

              <div className="relative z-10 flex md:flex-row flex-col justify-between md:items-end h-full">
                <div>
                  <span className="text-sm text-white/30">
                    {service.number}
                  </span>

                  <h3 className="font-space text-5xl md:text-8xl mt-6 leading-[0.9]">
                    {service.title}
                  </h3>
                </div>

                <div className="mt-16 flex justify-end">
                  <p className="max-w-xl text-lg text-white/60 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
