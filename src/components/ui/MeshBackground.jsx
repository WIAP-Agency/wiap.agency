import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const MeshBackground = () => {
  const meshRef = useRef(null);

  useLayoutEffect(() => {
    const blobs = meshRef.current.children;

    const ctx = gsap.context(() => {
      gsap.to(blobs[0], {
        x: 250,
        y: 150,
        scale: 1.4,
        duration: 22,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(blobs[1], {
        x: -200,
        y: 120,
        scale: 1.25,
        duration: 26,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(blobs[2], {
        x: 180,
        y: -120,
        scale: 1.35,
        duration: 20,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      gsap.to(blobs, {
        rotation: 15,
        duration: 40,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div
        ref={meshRef}
        className="
          fixed
          inset-0
          -z-20
          overflow-hidden
          pointer-events-none
        ">
        <div
          className="
            absolute
            top-[-20%]
            left-[-10%]

            h-[800px]
            w-[800px]

            rounded-full

            bg-cyan-500/10

            blur-[220px]
          "
        />

        <div
          className="
            absolute
            top-[10%]
            right-[-20%]

            h-[900px]
            w-[900px]

            rounded-full

            bg-blue-500/15

            blur-[250px]
          "
        />

        <div
          className="
            absolute
            bottom-[-30%]
            left-[20%]

            h-[700px]
            w-[700px]

            rounded-full

            bg-sky-400/5

            blur-[220px]
          "
        />
      </div>

      <div
        className="
          fixed
          inset-0
          -z-10

          opacity-[0.03]

          pointer-events-none
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
};
