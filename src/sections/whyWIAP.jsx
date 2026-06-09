import { useState } from "react";
import { Container } from "../components/layout/Container";
import { Plus, Minus } from "lucide-react";

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

export const WhyWIAP = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-32">
      <Container size="default">
        <div className="mb-20">
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
            Why WIAP
          </span>

          <h2 className="font-space text-5xl md:text-7xl mt-6">
            Built For Ambitious
            <br />
            Businesses.
          </h2>
        </div>

        <div className="border-t border-white/10">
          {reasons.map((reason, index) => {
            const isActive = active === index;

            return (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => setActive(index)}
                  className="
                    w-full
                    py-8

                    flex
                    items-center
                    justify-between

                    text-left
                  ">
                  <h3 className="font-space text-2xl md:text-4xl">
                    {reason.title}
                  </h3>

                  {isActive ? <Minus size={24} /> : <Plus size={24} />}
                </button>

                {isActive && (
                  <div className="pb-8 max-w-3xl">
                    <p className="text-lg text-white/60 leading-relaxed">
                      {reason.content}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
