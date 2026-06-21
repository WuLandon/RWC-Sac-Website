import { Navbar } from "@/components/rwc/Navbar";
import { Hero } from "@/components/rwc/Hero";
import { Marquee } from "@/components/rwc/Marquee";
import { Mission } from "@/components/rwc/Mission";
import { Donate } from "@/components/rwc/Donate";
import { Expect } from "@/components/rwc/Expect";
import { Community } from "@/components/rwc/Community";
import { Meeting } from "@/components/rwc/Meeting";
import { CTA } from "@/components/rwc/CTA";
import { Footer } from "@/components/rwc/Footer";

const marqueePrimaryItems = [
  "MAKE HEAVEN FULL",
  "ISOLATED TO INTEGRATED",
  "KNOWN · SEEN · LOVED",
  "UNITE FOR CHRIST",
];

const marqueeSecondaryItems = [
  "RUN WITH CHRIST",
  "SACRAMENTO",
  "ONE BODY",
  "ALL PACES WELCOME",
];

export default function HomePage() {
  return (
    <main className="bg-ink text-foreground">
      <Navbar />
      <Hero />
      <Marquee items={marqueePrimaryItems} />
      <Mission />
      <Donate />
      <Marquee variant="white" items={marqueeSecondaryItems} />
      <Expect />
      <Community />
      <Meeting />
      <CTA />
      <Footer />
    </main>
  );
}
