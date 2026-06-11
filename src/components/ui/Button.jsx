export const Button = ({ children, variant = "primary" }) => {
  const styles = {
    primary: "bg-cyan-400 text-black hover:scale-[1.03]",

    secondary: "border border-white/10 text-white hover:border-cyan-400",
  };

  return (
    <button
      className={`
        px-6
        py-3
        rounded-full
        transition-all
        duration-300
        cursor-pointer
        ${styles[variant]}
      `}>
      {children}
    </button>
  );
};
