import HeaderContact from "@/components/HeaderContact";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B23]">
      <HeaderContact />

      <main>
        <ContactHero />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
