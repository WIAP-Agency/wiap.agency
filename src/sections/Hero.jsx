import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <Container size="wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
              Web Innovation & Application Projects
            </span>

            <h1 className="font-space font-bold text-7xl md:text-[8rem] leading-[0.9] mt-6">
              Design.
              <br />
              Build.
              <br />
              Scale.
            </h1>
            <p className="text-lg text-white/60 max-w-2xl mt-8">
              We partner with ambitious businesses to design, build and scale
              digital products, websites, mobile applications and AI-powered
              systems.
            </p>
            <div className="flex gap-4 mt-10">
              <Button>Start a Project</Button>
              <Button variant="secondary">Our Services</Button>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative h-[600px]">
            <div className="absolute inset-0 bg-cyan-500/10 blur-[120px]" />

            <div className="absolute top-0 right-0 w-[320px] h-[420px] rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md rotate-6" />

            <div className="absolute bottom-0 left-0 w-[380px] h-[500px] rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md -rotate-6" />

            <div className="absolute top-[140px] left-[120px] w-[300px] h-[380px] rounded-[32px] bg-slate-900 border border-cyan-500/20 backdrop-blur-md" />
          </div>
        </div>
      </Container>
    </section>
  );
};
