import { AboutHrSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-about-hr/AboutHrSection";
import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";
import { HengdaPageInteractions } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaPageInteractions";

export default function HumanResourcesPage() {
  return <>
    <HengdaSiteHeader solid />
    <main className="pt-[70px]">
      <AboutHrSection />
    </main>
    <HengdaHomeFooter />
    <HengdaPageInteractions solidHeader />
  </>;
}
