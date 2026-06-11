import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const Hero = () => {
  const heroRef = useRef(null);

  const eyebrowRef = useRef(null);

  const titleRefs = useRef([]);

  const bodyRef = useRef(null);

  const buttonsRef = useRef(null);

  const visualRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(heroRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.9,
        delay: 0.1,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="
        min-h-screen

        flex
        items-center

        pt-32
        pb-20

        overflow-hidden
      ">
      <Container size="wide">
        <div
          className="
            grid
            lg:grid-cols-2

            gap-20
            lg:gap-16

            items-center
          ">
          {/* LEFT */}

          <div>
            <span
              ref={eyebrowRef}
              className="
                text-cyan-400

                uppercase

                tracking-[0.2em]

                text-xs
                md:text-sm
              ">
              Web Innovation & Application Projects
            </span>

            <h1
              className="
                font-space
                font-bold

                text-6xl
                sm:text-7xl
                md:text-8xl
                lg:text-9xl

                leading-[0.9]

                mt-6
              ">
              {["Design.", "Build.", "Scale."].map((line, index) => (
                <div key={line} ref={(el) => (titleRefs.current[index] = el)}>
                  {line}
                </div>
              ))}
            </h1>

            <p
              ref={bodyRef}
              className="
                text-lg

                text-white/60

                max-w-2xl

                mt-8
              ">
              We partner with ambitious businesses to design, build and scale
              digital products, websites, mobile applications and AI-powered
              systems.
            </p>

            <div
              ref={buttonsRef}
              className="
                flex

                flex-col
                sm:flex-row

                gap-4

                mt-10
              ">
              <Button>Start a Project</Button>

              <Button variant="secondary">Our Services</Button>
            </div>
          </div>

          {/* RIGHT */}

          <div
            ref={visualRef}
            className="
              relative

              h-[420px]
              sm:h-[500px]
              lg:h-[600px]

              w-full

              max-w-[500px]

              mx-auto
            ">
            {/* Glow */}

            <div
              className="
                absolute
                inset-0

                bg-cyan-500/10

                blur-[120px]
              "
            />

            {/* Card 1 */}

            <div
              className="
                absolute

                top-0
                right-0

                w-[220px]
                h-[300px]

                sm:w-[260px]
                sm:h-[340px]

                lg:w-[320px]
                lg:h-[420px]

                rounded-[32px]

                bg-white/5

                border
                border-white/10

                backdrop-blur-md

                rotate-6
              "
            />

            {/* Card 2 */}

            <div
              className="
                absolute

                bottom-0
                left-0

                w-[240px]
                h-[320px]

                sm:w-[300px]
                sm:h-[400px]

                lg:w-[380px]
                lg:h-[500px]

                rounded-[32px]

                bg-white/5

                border
                border-white/10

                backdrop-blur-md

                -rotate-6
              "
            />

            {/* Card 3 */}

            <div
              className="
                absolute

                top-[90px]
                left-1/2

                -translate-x-1/2

                lg:top-[140px]
                lg:left-[120px]

                lg:translate-x-0

                w-[200px]
                h-[260px]

                sm:w-[240px]
                sm:h-[320px]

                lg:w-[300px]
                lg:h-[380px]

                rounded-[32px]

                bg-slate-900

                border
                border-cyan-500/20

                backdrop-blur-md
              "
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
