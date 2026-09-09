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
import { AboutHistorySection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-about-history/AboutHistorySection";
import { AboutHonorSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-about-honor/AboutHonorSection";
import { AboutCultureSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-about-culture/AboutCultureSection";
import { AboutHrSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-about-hr/AboutHrSection";
import { ServiceSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-service/ServiceSection";
import { ServiceDownloadsSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-service-downloads/ServiceDownloadsSection";
import { ServiceSalesSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-service-sales/ServiceSalesSection";
import { NewsSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-news/NewsSection";
import { StrengthSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-strength/StrengthSection";
import { StrengthRdSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-strength-rd-block/StrengthRdSection";
import { StrengthProdSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-strength-prod-block/StrengthProdSection";

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
      <AboutProfileSection>
        <AboutHistorySection />
        <AboutHonorSection />
        <AboutCultureSection />
        <AboutHrSection />
      </AboutProfileSection>
      <ServiceSection>
        <ServiceDownloadsSection />
        <ServiceSalesSection />
      </ServiceSection>
      <NewsSection />
      <StrengthSection>
        <StrengthRdSection />
        <StrengthProdSection />
      </StrengthSection>
    </main>
    <SiteFooter />
    <SiteDialogs />
    <HomepageInteractions />
  </>;
}
