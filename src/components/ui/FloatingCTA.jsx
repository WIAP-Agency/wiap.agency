import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const FloatingCTA = () => {
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Idle float
      gsap.to(ctaRef.current, {
        y: 6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Footer interaction
      gsap.to(ctaRef.current, {
        opacity: 0,
        scale: 0.8,

        scrollTrigger: {
          trigger: "footer",

          start: "top bottom",

          end: "top center",

          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <button
      ref={ctaRef}
      className="
        group
        hidden
        md:flex
        align-center
        justify-center
        fixed
        bottom-8
        right-8
        z-40
        h-32
        w-32
        rounded-full
        bg-cyan-400
        text-black
        font-semibold
        uppercase
        transition-transform
        duration-300
        hover:scale-110
        cursor-pointer
      ">
      <div
        className="
          absolute
          inset-0

          rounded-full

          bg-cyan-400

          blur-2xl

          opacity-20

          transition-opacity
          duration-300

          group-hover:opacity-40
        "
      />

      <span
        className="
          relative
          z-10

          flex
          h-full
          items-center
          justify-center

          text-center
          text-xl
          font-black
          floating-text

          leading-tight
        ">
        Let's
        <br />
        Build
      </span>
    </button>
  );
};
