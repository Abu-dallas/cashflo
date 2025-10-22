import AboutUs from "@/components/AboutUs";
import Analytics from "@/components/Analytics";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <div className="w-full relative overflow-x-hidden">
      <div className="absolute top-0 right-0 -z-10 blur-3xl w-[300px] md:w-[600px] h-[150px] bg-purple-950 -rotate-45 opacity-80"></div>
      <section className="w-full h-full -z-20 absolute top-0 right-0 bg-purple-950 blur-3xl opacity-15"></section>
      <NavBar />
      {/* Hero Section */}

      <Hero />
      <Analytics />
      <WhyUs />
      <Features />
      <AboutUs />
      <Reviews />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}
