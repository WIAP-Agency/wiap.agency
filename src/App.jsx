import { NavBar } from "./components/layout/NavBar";
import { Hero } from "./sections/Hero";
import { FloatingCTA } from "./components/ui/FloatingCTA";
import { About } from "./sections/About";
import { WhatWeDo } from "./sections/WhatWeDo";
import { whyWIAP } from "./sections/whyWIAP";
import { Capabilities } from "./sections/Capabilities";
import { Process } from "./sections/Process";
import { Technologies } from "./sections/Technologies";
import { CTA } from "./sections/CTA";
import { Footer } from "./sections/Footer";
import { Loader } from "./components/ui/Loader";
import { SmoothScroll } from "./components/providers/SmoothScroll";

import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("wiap-loaded");

    if (!hasLoaded) {
      setLoading(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    sessionStorage.setItem("wiap-loaded", "true");

    setLoading(false);
  };

  return (
    <>
      <SmoothScroll />

      {loading && <Loader onComplete={handleLoaderComplete} />}

      <NavBar />

      <Hero />

      <About />

      <WhatWeDo />

      <whyWIAP />

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
