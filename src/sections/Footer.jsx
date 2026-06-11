import { Container } from "../components/layout/Container";

export const Footer = () => {
  return (
    <footer className="pt-24 pb-10 border-t border-white/10">
      <Container size="wide">
        <div className="grid md:grid-cols-4 gap-16">
          {/* Brand */}

          <div>
            <h3 className="font-space text-3xl">WIAP</h3>

            <p className="mt-2 text-sm uppercase tracking-[0.15em] text-white/40">
              Web Innovation & Application Projects
            </p>

            <p className="mt-8 text-white/60 leading-relaxed max-w-sm">
              Designing and engineering digital products for ambitious
              businesses.
            </p>
          </div>

          {/* Explore */}

          <div>
            <h4 className="font-space text-lg mb-6">Explore</h4>

            <ul className="space-y-4 text-white/60">
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-white transition">
                  What We Do
                </a>
              </li>

              <li>
                <a href="#capabilities" className="hover:text-white transition">
                  Capabilities
                </a>
              </li>

              <li>
                <a href="#process" className="hover:text-white transition">
                  Process
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}

          <div>
            <h4 className="font-space text-lg mb-6">Connect</h4>

            <ul className="space-y-4 text-white/60">
              <li>
                <a
                  href="https://linkedin.com/company/wiap-agency"
                  className="hover:text-white transition">
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="https://x.com/wiap_agency"
                  className="hover:text-white transition">
                  X / Twitter
                </a>
              </li>

              <li>
                <a
                  href="https://instagram.com/wiap_agency"
                  className="hover:text-white transition">
                  Instagram
                </a>
              </li>

              <li>
                <a
                  href="mailto:hello@wiap.agency"
                  className="hover:text-white transition">
                  hello@wiap.agency
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}

          <div>
            <h4 className="font-space text-lg mb-6">Ready?</h4>

            <a
              href="#cta"
              className="
                inline-flex
                items-center
                text-2xl

                font-space

                hover:text-cyan-400

                transition
              ">
              Start a Project →
            </a>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} WIAP.
          </p>

          <p className="text-sm text-white/40">
            Built in Lagos, Nigeria. Designed with intention.
          </p>
        </div>
      </Container>
    </footer>
  );
};
