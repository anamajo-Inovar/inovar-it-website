import HeaderAbout from "@/components/HeaderAbout";
import AboutHero from "@/components/AboutHero";
import AboutWhy from "@/components/AboutWhy";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B23]">
      <HeaderAbout />
      <main>
        <AboutHero />
        <AboutWhy />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
