import { Container } from "../components/layout/Container";

const services = [
  {
    title: "WEB.",
    description:
      "High-performance websites, web applications, SaaS platforms and digital experiences engineered for growth.",
  },
  {
    title: "MOBILE.",
    description:
      "Native and cross-platform mobile applications designed to deliver seamless user experiences.",
  },
  {
    title: "DESIGN.",
    description:
      "User experience design, design systems and digital product design that connect business goals with user needs.",
  },
  {
    title: "AI.",
    description:
      "AI-powered automation, workflow optimization and system integrations that reduce manual work.",
  },
  {
    title: "CONSULT.",
    description:
      "Technology strategy, digital transformation and product consulting for ambitious businesses.",
  },
];

export const WhatWeDo = () => {
  return (
    <section className="py-32">
      <Container size="wide">
        <div className="mb-20">
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
            What We Do
          </span>

          <h2 className="font-space text-5xl md:text-7xl mt-6">
            End-to-End
            <br />
            Digital Execution.
          </h2>
        </div>

        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                border
                border-white/10
                rounded-[32px]
                p-8
                md:p-12

                hover:border-cyan-400/50

                transition-all
                duration-500
              ">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <h3 className="font-space text-5xl md:text-7xl">
                  {service.title}
                </h3>

                <p className="max-w-xl text-white/60">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
