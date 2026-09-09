import { SiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/SiteHeader";
import { HeroSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HeroSection";
import { StatsSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/StatsSection";
import { BusinessSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/BusinessSection";
import { IndustrySection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/IndustrySection";
import { ProfileSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/ProfileSection";
import { AdvantagesSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/AdvantagesSection";
import { ContactSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/ContactSection";
import { SiteFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/SiteFooter";
import { SiteDialogs } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/SiteDialogs";
import { HomepageInteractions } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HomepageInteractions";
import { AboutProfileSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-about-profile/AboutProfileSection";

export default function Home() {
  return <>
    <SiteHeader />
    <main>
      <HeroSection />
      <StatsSection />
      <BusinessSection />
      <IndustrySection />
      <ProfileSection />
      <AdvantagesSection />
      <ContactSection />
      <AboutProfileSection />
    </main>
    <SiteFooter />
    <SiteDialogs />
    <HomepageInteractions />
  </>;
}
