import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";

export const CTA = () => {
  return (
    <section className="py-40">
      <Container size="narrow">
        <div className="text-center">
          <h2 className="font-space text-5xl md:text-7xl leading-[1]">
            Let's Build Something
            <br />
            Meaningful.
          </h2>

          <p className="max-w-2xl mx-auto mt-10 text-lg text-white/60 leading-relaxed">
            Whether you're launching a new product, modernizing an existing
            platform, or exploring how automation can transform your business,
            we'd love to hear about what you're building.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Button>Start a Project</Button>

            <Button variant="secondary">Book a Consultation</Button>
          </div>

          <p className="mt-8 text-sm text-white/40">
            No pressure. No obligations. Just a conversation.
          </p>
        </div>
      </Container>
    </section>
  );
};
