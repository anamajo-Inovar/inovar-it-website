import HeaderServices from "@/components/HeaderServices";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B23]">
      <HeaderServices />

      <main>
        <ServicesHero />
        <ServicesGrid />
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
