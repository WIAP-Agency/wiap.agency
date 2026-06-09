import { Container } from "../components/layout/Container";

import {
  SiFigma,
  SiFramer,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiWordpress,
  SiPython,
  SiNodedotjs,
  SiOpenai,
  SiClaude,
  SiN8N,
} from "react-icons/si";

import { FaElementor, FaReact } from "react-icons/fa";
import { TbBrandAndroid } from "react-icons/tb";

import gsapLogo from "../assets/icons/gsap.svg";

const technologies = [
  {
    name: "Figma",
    icon: SiFigma,
    type: "icon",
  },
  {
    name: "Framer",
    icon: SiFramer,
    type: "icon",
  },
  {
    name: "React",
    icon: SiReact,
    type: "icon",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    type: "icon",
  },

  {
    name: "Tailwind",
    icon: SiTailwindcss,
    type: "icon",
  },
  {
    name: "GSAP",
    icon: gsapLogo,
    type: "image",
  },
  {
    name: "Flutter",
    icon: SiFlutter,
    type: "icon",
  },
  {
    name: "React Native",
    icon: FaReact,
    type: "icon",
  },

  {
    name: "Android",
    icon: TbBrandAndroid,
    type: "icon",
  },
  {
    name: "WordPress",
    icon: SiWordpress,
    type: "icon",
  },
  {
    name: "Elementor",
    icon: FaElementor,
    type: "icon",
  },
  {
    name: "Python",
    icon: SiPython,
    type: "icon",
  },

  {
    name: "Node.js",
    icon: SiNodedotjs,
    type: "icon",
  },
  {
    name: "OpenAI",
    icon: SiOpenai,
    type: "icon",
  },
  {
    name: "Claude",
    icon: SiClaude,
    type: "icon",
  },
  {
    name: "n8n",
    icon: SiN8N,
    type: "icon",
  },
];

export const Technologies = () => {
  return (
    <section className="py-32">
      <Container size="wide">
        {/* Header */}

        <div className="max-w-3xl mx-auto text-center mb-24">
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
            Technologies
          </span>

          <h2 className="font-space text-5xl md:text-7xl mt-6">
            Built with
            <br />
            modern tools.
          </h2>

          <p className="mt-8 text-lg text-white/60 leading-relaxed">
            Technology should serve the product, not define it. We choose tools
            based on the problems we're solving — prioritizing performance,
            scalability and long-term maintainability.
          </p>
        </div>

        {/* Technologies Grid */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <div
                key={tech.name}
                className="
                  group

                  flex
                  flex-col
                  items-center

                  gap-5

                  opacity-40

                  hover:opacity-100

                  transition-all
                  duration-300
                ">
                {tech.type === "icon" ? (
                  <Icon
                    className="
                      text-[3rem]

                      group-hover:-translate-y-1
                      group-hover:scale-105

                      transition-all
                      duration-300
                    "
                  />
                ) : (
                  <img
                    src={Icon}
                    alt={tech.name}
                    className="
                      w-12
                      h-12
                      object-contain

                      group-hover:-translate-y-1
                      group-hover:scale-105

                      transition-all
                      duration-300
                    "
                  />
                )}

                <span
                  className="
                    text-sm

                    tracking-wide

                    text-white/70

                    group-hover:text-white

                    transition-colors
                    duration-300
                  ">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
