import { ContactPage } from "@/components/contact/ContactPage";
import { ServiceSalesSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-service-sales/ServiceSalesSection";
import { ServiceQualitySection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-service-quality/ServiceQualitySection";
import { ServiceCommitmentSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-service-commitment/ServiceCommitmentSection";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";
import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaPageInteractions } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaPageInteractions";

export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ section?: string | string[] }>;
}) {
  const section = (await searchParams).section;
  const initialSection = typeof section === "string" ? section : undefined;

  return <>
    <HengdaSiteHeader solid />
    <main className="pt-[70px]"><ContactPage initialSection={initialSection} sales={<ServiceSalesSection standalone />} quality={<ServiceQualitySection standalone />} commitment={<ServiceCommitmentSection standalone />} /></main>
    <HengdaHomeFooter />
    <HengdaPageInteractions solidHeader />
  </>;
}
