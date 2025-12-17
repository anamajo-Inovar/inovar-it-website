import HeaderServices from "@/components/HeaderServices";
import ServicesHero from "@/components/ServicesHero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B23]">
      <HeaderServices />

      <main>
        <ServicesHero />

        {/* Aqui entra depois: Grid de serviços + seção de destaque (Cloud Migration) */}
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
