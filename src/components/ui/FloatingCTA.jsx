export const FloatingCTA = () => {
  return (
    <button
      className="
        fixed
        right-8
        bottom-8
        z-50

        h-28
        w-28

        rounded-full

        bg-cyan-400
        text-black

        font-bold
        uppercase

        flex
        items-center
        justify-center

        text-center

        leading-tight

        transition-all
        duration-300

        hover:scale-105
        hidden md:flex
      ">
      Start
      <br />A Project
    </button>
  );
};
