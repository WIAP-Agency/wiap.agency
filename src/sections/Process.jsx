import { Container } from "../components/layout/Container";
import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    title: "Discover.",
    description:
      "We begin by understanding your business, users and objectives to uncover the opportunities that matter most.",
  },

  {
    number: "02",
    title: "Design.",
    description:
      "We design experiences and systems that align business goals with user needs.",
  },

  {
    number: "03",
    title: "Build.",
    description:
      "From websites to mobile applications and automation systems, we engineer solutions built to perform.",
  },

  {
    number: "04",
    title: "Scale.",
    description:
      "We continue optimizing and evolving products to support long-term growth.",
  },
];

export const Process = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const trigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=400%",
        pin: true,
        scrub: 0.5,

        onUpdate: (self) => {
          const progress = self.progress;

          if (progress < 0.25) {
            setActiveStep(0);
          } else if (progress < 0.5) {
            setActiveStep(1);
          } else if (progress < 0.75) {
            setActiveStep(2);
          } else {
            setActiveStep(3);
          }
        },
      });

      return () => {
        trigger.kill();
      };
    });

    return () => {
      mm.revert();
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        min-h-screen
        lg:h-screen

        flex
        items-center

        py-24
        lg:py-0
      ">
      <Container size="narrow">
        <div className="mb-20 lg:mb-24">
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
            Our Process
          </span>

          <h2 className="font-space text-5xl md:text-7xl mt-6 leading-[0.95]">
            Simple.
            <br />
            Intentional.
            <br />
            Effective.
          </h2>
        </div>

        <div className={isMobile ? "space-y-16" : "space-y-10"}>
          {steps.map((step, index) => {
            const isActive = isMobile || activeStep === index;

            return (
              <div key={step.number}>
                <div className="flex gap-8 items-start">
                  <span
                    className={`
                      text-lg
                      transition-all
                      duration-500

                      ${isActive ? "text-cyan-400" : "text-white/20"}
                    `}>
                    {step.number}
                  </span>

                  <div>
                    <h3
                      className={`
                        font-space

                        text-4xl
                        md:text-6xl

                        leading-[0.95]

                        transition-all
                        duration-500

                        ${
                          isActive
                            ? "text-white scale-100"
                            : "text-white/20 scale-95"
                        }
                      `}>
                      {step.title}
                    </h3>

                    <div
                      className={`
                        overflow-hidden

                        transition-all
                        duration-500

                        ${
                          isActive
                            ? "max-h-[200px] opacity-100 mt-6"
                            : "max-h-0 opacity-0"
                        }
                      `}>
                      <p className="text-lg text-white/60 leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
