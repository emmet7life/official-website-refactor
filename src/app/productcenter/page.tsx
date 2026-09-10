import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";
import { ProductCenter } from "@/components/productcenter/ProductCenter";

export default function ProductCenterPage() {
  return <>
    <HengdaSiteHeader solid />
    <main className="pt-16 lg:pt-[72px]"><ProductCenter /></main>
    <HengdaHomeFooter />
  </>;
}
