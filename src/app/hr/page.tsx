import { AboutHrSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-about-hr/AboutHrSection";
import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";
import { HengdaPageInteractions } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaPageInteractions";

export default function HumanResourcesPage() {
  return <>
    <HengdaSiteHeader solid />
    <main className="pt-16 lg:pt-[72px]">
      <div className="mx-auto max-w-container px-5 py-14 md:px-10 lg:px-16"><AboutHrSection /></div>
    </main>
    <HengdaHomeFooter />
    <HengdaPageInteractions solidHeader />
  </>;
}
