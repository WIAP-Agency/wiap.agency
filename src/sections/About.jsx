import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";

export const About = () => {
  return (
    <section className="py-32">
      <Container size="narrow">
        <div className="space-y-10">
          {/* LABEL */}
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
            About WIAP
          </span>

          {/* HEADLINE */}
          <h2 className="font-space text-5xl md:text-7xl leading-[1]">
            A long-standing vision,
            <br />
            finally given a name.
          </h2>

          {/* COPY */}
          <div className="space-y-8 text-lg text-white/70 leading-relaxed max-w-3xl">
            <p>
              WIAP, pronounced "WE APP", stands for Web Innovation & Application
              Projects. More than a name, it represents a belief that technology
              should solve real problems, create opportunities, and move
              businesses forward.
            </p>
            <p>
              Founded in Lagos, Nigeria, WIAP was created with a simple
              ambition: to build a modern digital product studio capable of
              delivering world-class solutions without geographical limitations.
              We partner with startups, founders, and businesses looking to
              transform ideas into scalable digital products.
            </p>
            <p>
              From websites and mobile applications to AI-powered automation and
              digital transformation initiatives, our work sits at the
              intersection of strategy, design, and engineering. Every project
              is approached with the same objective: creating solutions that are
              useful, scalable, and built to last.
            </p>
            <p>
              Our vision is clear — to become one of Africa's leading technology
              agencies while helping businesses around the world embrace the
              future of digital innovation.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-6">
            <Button>Our Approach</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};
