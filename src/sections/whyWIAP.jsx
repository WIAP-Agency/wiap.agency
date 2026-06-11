import { useState } from "react";
import { Container } from "../components/layout/Container";
import { Plus } from "lucide-react";

const reasons = [
  {
    title: "We Think Beyond Deliverables",
    content:
      "Most agencies focus on completing projects. We focus on helping businesses achieve outcomes. Every decision is tied to growth, efficiency, user experience, or long-term value.",
  },

  {
    title: "We Build For Growth",
    content:
      "From architecture to user experience, every solution is designed with future growth in mind. We build systems that can evolve as your business evolves.",
  },

  {
    title: "We Simplify Complexity",
    content:
      "Technology should solve problems, not create them. Our approach focuses on reducing friction, improving workflows, and making digital products easier to manage.",
  },

  {
    title: "We Focus On Outcomes",
    content:
      "Beautiful design matters. Clean code matters. But business results matter most. We measure success by the impact our work creates.",
  },

  {
    title: "We Partner, Not Just Deliver",
    content:
      "We work closely with founders, startups and businesses to understand challenges, align goals and create solutions collaboratively.",
  },
];

export const whyWIAP = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32">
      <Container size="default">
        {/* Header */}

        <div className="mb-20">
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
            Why WIAP
          </span>

          <h2 className="font-space text-6xl md:text-8xl mt-6 leading-[0.95]">
            Built For Ambitious
            <br />
            Businesses.
          </h2>
        </div>

        {/* Accordion Panel */}

        <div
          className="
            max-w-5xl
            rounded-[32px]
            border
            border-white/10
            bg-[#0B1220]
            overflow-hidden
          ">
          {reasons.map((reason, index) => {
            const isActive = active === index;

            return (
              <div
                key={index}
                className="border-b border-white/10 last:border-b-0">
                <button
                  onClick={() => setActive(active === index ? null : index)}
                  className="
                    w-full
                    px-10
                    md:px-14
                    py-10
                    flex
                    items-center
                    justify-between
                    gap-6
                    text-left
                    cursor-pointer
                  ">
                  <h3 className="font-space text-2xl md:text-4xl leading-tight">
                    {reason.title}
                  </h3>

                  <div
                    className="
                      shrink-0

                      flex
                      items-center
                      justify-center

                      h-12
                      w-12

                      rounded-full

                      border
                      border-white/10
                    ">
                    <Plus
                      size={22}
                      className={`
                        transition-transform
                        duration-500
                        ease-out

                        ${isActive ? "rotate-45" : ""}
                      `}
                    />
                  </div>
                </button>

                {/* Animated Content */}

                <div
                  className={`
                    overflow-hidden

                    transition-all
                    duration-500
                    ease-out

                    ${
                      isActive
                        ? "max-h-[300px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}>
                  <div
                    className={`
                      px-10
                      md:px-14

                      pb-10

                      max-w-4xl

                      transform
                      transition-all
                      duration-500
                      ease-out

                      ${isActive ? "translate-y-0" : "-translate-y-4"}
                    `}>
                    <p className="text-lg text-white/60 leading-relaxed">
                      {reason.content}
                    </p>
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
