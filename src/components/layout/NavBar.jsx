import { useEffect, useState } from "react";
import { Moon } from "lucide-react";

import { Container } from "./Container";
import { OverlayMenu } from "../ui/OverlayMenu";

import logo from "../../assets/WIAP logo.png";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
    fixed
    top-0
    left-0
    w-full

    z-[100]

    transition-all
    duration-500

    ${
      isScrolled
        ? `
          bg-[#050816]/60
          backdrop-blur-xl
        `
        : "bg-transparent"
    }
  `}>
        <Container size="wide">
          <div
            className="
              py-8
              flex
              items-center
              justify-between
            ">
            {/* LEFT */}
            <div className="flex items-center gap-4">
              <img src={logo} alt="WIAP" className="w-12" />

              <div className="hidden md:block">
                <p className="text-sm font-semibold">WIAP</p>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.15em]
                    text-white/50
                  ">
                  Web Innovation & Application Projects
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-8">
              {/* Theme Toggle */}
              <button
                className="
                  w-14
                  h-8

                  rounded-full

                  border
                  border-white/10

                  flex
                  items-center
                  justify-center

                  hover:border-cyan-400

                  transition
                ">
                <Moon size={18} />
              </button>

              {/* Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="
                  relative
                  w-10
                  h-10
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  z-[110]
                "
                aria-label="Toggle Menu">
                <span
                  className={`
                    absolute

                    w-6
                    h-[2px]

                    bg-white

                    transition-all
                    duration-300

                    ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}
                  `}
                />

                <span
                  className={`
                    absolute

                    w-6
                    h-[2px]

                    bg-white

                    transition-all
                    duration-300

                    ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}
                  `}
                />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};
