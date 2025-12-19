import { Suspense } from "react";

import HeaderServices from "@/components/HeaderServices";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

function ServicesGridFallback() {
  // fallback simples enquanto resolve searchParams no client
  return <div className="h-10" />;
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B23]">
      <HeaderServices />
      <main>
        <ServicesHero />
        <Suspense fallback={<ServicesGridFallback />}>
          <ServicesGrid />
        </Suspense>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
