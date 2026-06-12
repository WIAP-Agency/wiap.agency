// src/components/ui/BackgroundEffects.jsx

export const BackgroundEffects = () => {
  return (
    <>
      {/* Mesh Gradient */}
      <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
        <div className="mesh mesh-1" />

        <div className="mesh mesh-2" />

        <div className="mesh mesh-3" />
      </div>

      {/* White Noise */}
      <div
        className="
          fixed
          inset-0
          -z-10

          pointer-events-none

          opacity-[0.025]
        "
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160' viewBox='0 0 160 160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
        }}
      />
    </>
  );
};
