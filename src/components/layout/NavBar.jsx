import { Container } from "./Container";
import { Button } from "../ui/Button";
import logo from "../../assets/WIAP logo.png";
import { Moon } from "lucide-react";

export const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <Container size="wide">
        <div className="py-8 flex items-center justify-between">
          {/* LEFT */}
          <div className="flex items-center gap-4">
            <img src={logo} alt="WIAP" className="w-12" />

            <div className="hidden md:block">
              <p className="text-sm font-semibold">WIAP</p>

              <p className="text-[10px] uppercase tracking-[0.15em] text-white/50">
                Web Innovation & Application Projects
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-8">
            {/* Theme */}
            <button className=" w-14 h-8 rounded-full border border-white/10 flex items-center justify-center hover:border-cyan-400 transition">
              <Moon size={24} />
            </button>

            {/* Menu */}
            <button className="group">
              <div className="space-y-2">
                <div className="h-[2px] w-8 bg-white transition" />
                <div className="h-[2px] w-8 bg-white transition" />
              </div>
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
