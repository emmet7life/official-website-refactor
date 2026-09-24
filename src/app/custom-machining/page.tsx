import { CustomMachiningPage } from "@/components/productcenter/custom-machining/CustomMachiningPage";
import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";

export default function CustomMachiningRoute() {
  return <>
    <HengdaSiteHeader solid />
    <main className="pt-[70px]"><CustomMachiningPage /></main>
    <HengdaHomeFooter />
  </>;
}
