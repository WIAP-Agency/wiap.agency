import { Container } from "../components/layout/Container";

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
  return (
    <section className="py-32">
      <Container size="narrow">
        <div className="mb-20">
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
            Our Process
          </span>

          <h2 className="font-space text-5xl md:text-7xl mt-6">
            Simple.
            <br />
            Intentional.
            <br />
            Effective.
          </h2>
        </div>

        <div>
          {steps.map((step) => (
            <div
              key={step.number}
              className="
                py-12
                border-t
                border-white/10
              ">
              <div className="flex flex-col md:flex-row gap-10">
                <span className="text-white/40">{step.number}</span>

                <div>
                  <h3 className="font-space text-4xl md:text-6xl">
                    {step.title}
                  </h3>

                  <p className="mt-6 text-lg text-white/60 max-w-2xl">
                    {step.description}
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
