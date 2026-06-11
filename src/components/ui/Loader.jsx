import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import wiapLogo from "../../assets/WIAP logo.png";

export const Loader = ({ onComplete }) => {
  const loaderRef = useRef(null);
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete?.();
      },
    });

    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      },
    )

      .to(
        logoRef.current,
        {
          opacity: 0.7,
          duration: 0.4,
        },
        "+=0.6",
      )

      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.9,
        ease: "expo.inOut",
      });

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="
        fixed
        inset-0
        z-[9999]

        flex
        items-center
        justify-center

        bg-[#050816]
      ">
      <img
        ref={logoRef}
        src={wiapLogo}
        alt="WIAP"
        className="
          w-[180px]
          md:w-[280px]

          select-none
          pointer-events-none
        "
      />
    </div>
  );
};
