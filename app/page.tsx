import Header from "../components/header";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/services";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B23]">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
