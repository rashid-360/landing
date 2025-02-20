import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Timeline } from "./components/Timeline";
import { AppMockup } from "./components/AppMockup";
import { Partners } from "./components/Partners";
import { Footer } from "./components/Footer";
import MarqueeEffect from "@/components/ui/marquee-effect";

function App() {
  return (
    <div className="w-full bg-[#000000] min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Timeline />
      <AppMockup />

      <div className="flex flex-col gap-4">
        <MarqueeEffect
          direction="left"
          baseVelocity={-3}
          className="bg-[#37e5a5]/70 text-white py-2"
        >
          THE FINEST WAY TO TRAVEL.
        </MarqueeEffect>
        <MarqueeEffect
          direction="right"
          baseVelocity={-3}
          className="bg-[#fdfff5]/70 text-black py-2"
        >
          THE FINEST WAY TO TRAVEL.
        </MarqueeEffect>
      </div>

      <Partners />
      <Footer />
    </div>
  );
}

export default App;
