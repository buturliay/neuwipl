import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Join from "@/components/Join";
import Eboard from "@/components/Eboard";
import Calendar from "@/components/Calendar";
import Contact from "@/components/Contact";
import Faq from "@/components/faq"
import Socials from "@/components/Socials"

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Mission />
      <Join />
      <Eboard />
      <Calendar />
      <Faq />
      <Contact />
      <Socials />
    </main>
  );
}
