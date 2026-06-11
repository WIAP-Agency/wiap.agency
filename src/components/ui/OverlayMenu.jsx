import { useLayoutEffect, useRef } from "react";
import { Container } from "../layout/Container";
import gsap from "gsap";

const menuItems = [
  "Home",
  "About",
  "What We Do",
  "Capabilities",
  "Process",
  "Contact",
];

export const OverlayMenu = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const itemsRef = useRef([]);
  const footerRef = useRef(null);

  const timeline = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      timeline.current = gsap.timeline({
        paused: true,
      });

      timeline.current
        .fromTo(
          overlayRef.current,
          {
            yPercent: -100,
          },
          {
            yPercent: 0,
            duration: 0.9,
            ease: "expo.inOut",
          },
        )

        .from(
          itemsRef.current,
          {
            opacity: 0,
            y: 40,
            stagger: 0.08,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.4",
        )

        .from(
          footerRef.current,
          {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power3.out",
          },
          "-=0.3",
        );
    });

    return () => ctx.revert();
  }, []);

  useLayoutEffect(() => {
    if (!timeline.current) return;

    if (isOpen) {
      timeline.current.play();
    } else {
      timeline.current.reverse();
    }
  }, [isOpen]);

  return (
    <div
      ref={overlayRef}
      className="
        fixed
        inset-0

        z-[90]

        bg-[#050816]

        will-change-transform
      ">
      <Container size="wide">
        <div
          className="
          h-full
          flex
          flex-col
          justify-between
          px-8
          md:px-16
          py-32
          gap-10
        ">
          <div className="space-y-10">
            {menuItems.map((item, index) => (
              <button
                key={item}
                ref={(el) => (itemsRef.current[index] = el)}
                onClick={onClose}
                className="
                block
                text-left
                font-space
                text-4xl
                md:text-7xl
                text-white/80
                hover:text-cyan-400
                transition-colors
                duration-300
              ">
                <span
                  className="
                  mr-6
                  text-cyan-400
                  text-lg
                ">
                  0{index + 1}
                </span>

                {item}
              </button>
            ))}
          </div>

          <div
            ref={footerRef}
            className="
            flex
            flex-col
            md:flex-row

            justify-between

            gap-10
          ">
            <p className="text-white/40">Based in Lagos, Nigeria.</p>

            <button
              onClick={onClose}
              className="
              font-space

              text-2xl

              text-white

              hover:text-cyan-400

              transition-colors
            ">
              Let's Build Together →
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
