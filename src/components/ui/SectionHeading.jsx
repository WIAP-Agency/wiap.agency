export const SectionHeading = ({ eyebrow, title, description }) => {
  return (
    <div className="max-w-4xl">
      {eyebrow && (
        <p className="uppercase tracking-[0.2em] text-sm text-cyan-400 mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="font-space text-5xl md:text-7xl leading-none">{title}</h2>

      {description && (
        <p className="mt-8 text-lg text-white/60 max-w-2xl">{description}</p>
      )}
    </div>
  );
};
