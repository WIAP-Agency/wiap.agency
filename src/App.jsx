import { NavBar } from "./components/layout/NavBar";
import { Hero } from "./sections/Hero";
import { FloatingCTA } from "./components/ui/FloatingCTA";
import { About } from "./sections/About";
import { WhatWeDo } from "./sections/WhatWeDo";
import { WhyWIAP } from "./sections/whyWIAP";
import { Capabilities } from "./sections/Capabilities";
import { Process } from "./sections/Process";
import { Technologies } from "./sections/Technologies";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <WhatWeDo />
      <WhyWIAP />
      <Capabilities />
      <Process />
      <Technologies />
      <CTA />
      <Footer />
      <FloatingCTA />
    </>
  );
}

export default App;
