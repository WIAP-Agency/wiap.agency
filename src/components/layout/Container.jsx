export const Container = ({ children, size = "default", className = "" }) => {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-[1600px]",
    full: "max-w-full",
  };

  return (
    <div
      className={`
        mx-auto
        px-6
        md:px-10
        lg:px-16
        ${sizes[size]}
        ${className}
      `}>
      {children}
    </div>
  );
};
