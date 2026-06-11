import { Container } from "../components/layout/Container";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

import webImage from "/capabilities/web.png";
import mobileImage from "/capabilities/paygridfx-mobile.png";

const capabilitiesList = [
  {
    number: "01",
    title: "Web Development",
    image: webImage,
  },

  {
    number: "02",
    title: "Mobile Applications",
    image: mobileImage,
  },

  {
    number: "03",
    title: "Product Design",
    image: webImage,
  },

  {
    number: "04",
    title: "AI Integration",
    image: webImage,
  },

  {
    number: "05",
    title: "Technology Consulting",
    image: webImage,
  },
];

export const Capabilities = () => {
  const sectionRef = useRef(null);
  const previewRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(null);

  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (isMobile) return;

    const preview = previewRef.current;

    gsap.set(preview, {
      opacity: 0,
      scale: 0,
    });

    const handleMove = (e) => {
      if (activeIndex === null) return;

      const bounds = sectionRef.current.getBoundingClientRect();

      gsap.to(preview, {
        x: e.clientX - bounds.left + 40,
        y: e.clientY - bounds.top - 100,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const section = sectionRef.current;

    section.addEventListener("mousemove", handleMove);

    return () => {
      section.removeEventListener("mousemove", handleMove);
    };
  }, [activeIndex, isMobile]);

  useLayoutEffect(() => {
    if (isMobile) return;

    if (activeIndex !== null) {
      gsap.to(previewRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.4)",
      });
    } else {
      gsap.to(previewRef.current, {
        opacity: 0,
        scale: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [activeIndex, isMobile]);

  return (
    <section ref={sectionRef} className="py-32 relative">
      <Container size="default">
        {/* Header */}

        <div className="mb-24 text-center">
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
            Selected Capabilities
          </span>

          <h2 className="font-space text-5xl md:text-7xl mt-6 leading-[0.95]">
            Crafted To Solve
            <br />
            Complex Problems.
          </h2>
        </div>

        {/* Capabilities */}

        <div className="space-y-6">
          {capabilitiesList.map((capability, index) => {
            const isActive = activeIndex === index;

            return (
              <div key={capability.number} className="border-b border-white/10">
                <button
                  onMouseEnter={() => !isMobile && setActiveIndex(index)}
                  onMouseLeave={() => !isMobile && setActiveIndex(null)}
                  onClick={() => {
                    if (isMobile) {
                      setActiveIndex(isActive ? null : index);
                    }
                  }}
                  className="
                      group

                      w-full

                      flex
                      items-center

                      gap-8

                      py-8

                      text-left

                      cursor-pointer
                    ">
                  <span
                    className={`
                        text-lg

                        transition-colors
                        duration-300

                        ${isActive ? "text-cyan-400" : "text-white/30"}
                      `}>
                    {capability.number}
                  </span>

                  <h3
                    className={`
                        font-space

                        text-3xl
                        md:text-6xl

                        leading-[0.95]

                        transition-all
                        duration-300

                        ${isActive ? "text-white" : "text-white/50"}
                      `}>
                    {capability.title}
                  </h3>
                </button>

                {/* Mobile Preview */}

                {isMobile && isActive && (
                  <div className="pb-8">
                    <img
                      src={capability.image}
                      alt={capability.title}
                      className="
                          w-full

                          max-w-sm

                          mx-auto

                          object-contain
                        "
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>

      {/* Desktop Cursor Preview */}

      <div
        ref={previewRef}
        className="
          absolute
          top-0
          left-0

          pointer-events-none

          z-50

          hidden
          lg:block
        ">
        {activeIndex !== null && (
          <div
            className="
              overflow-hidden

              rounded-[32px]

              border
              border-white/10

              bg-[#090F1A]

              shadow-2xl
            ">
            <img
              src={capabilitiesList[activeIndex].image}
              alt={capabilitiesList[activeIndex].title}
              className="
                w-[250px]

                h-auto

                object-contain
              "
            />
          </div>
        )}
      </div>
    </section>
  );
};
