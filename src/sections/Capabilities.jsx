import { useState } from "react";
import { Container } from "../components/layout/Container";

const capabilities = [
  {
    id: "01",
    title: "Web Experiences",
    description:
      "Modern websites, platforms and digital products built for performance and growth.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },

  {
    id: "02",
    title: "Mobile Applications",
    description:
      "Beautiful and intuitive mobile products designed around user behavior.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  },

  {
    id: "03",
    title: "Product Design",
    description:
      "User-focused interfaces, design systems and digital experiences.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
  },

  {
    id: "04",
    title: "AI Automation",
    description:
      "Workflow automation and intelligent systems that improve efficiency.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },

  {
    id: "05",
    title: "Technology Consulting",
    description:
      "Strategic guidance for businesses navigating digital transformation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
];

export const Capabilities = () => {
  const [active, setActive] = useState(capabilities[0]);

  return (
    <section className="py-32">
      <Container size="wide">
        <div className="mb-20">
          <span className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
            Selected Capabilities
          </span>

          <h2 className="font-space text-5xl md:text-7xl mt-6">
            What We Help
            <br />
            Businesses Build.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <div>
            {capabilities.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActive(item)}
                className="
                  border-b
                  border-white/10
                  py-8
                  cursor-pointer
                  group
                ">
                <div className="flex gap-6">
                  <span className="text-white/40">{item.id}</span>

                  <div>
                    <h3 className="font-space text-3xl md:text-5xl group-hover:text-cyan-400 transition">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-white/60 max-w-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}

          <div>
            <div className="relative overflow-hidden rounded-[32px] border border-white/10">
              <img
                src={active.image}
                alt={active.title}
                className="
                  w-full
                  h-[650px]
                  object-cover
                  transition-all
                  duration-500
                "
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
