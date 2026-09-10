import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaHomeSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeSection";
import { HengdaPageInteractions } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaPageInteractions";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";
import { SiteDialogs } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/SiteDialogs";

export default function Home() {
  return <>
    <HengdaSiteHeader />
    <main><HengdaHomeSection /></main>
    <HengdaHomeFooter />
    <SiteDialogs />
    <HengdaPageInteractions />
  </>;
}
