import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaPageInteractions } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaPageInteractions";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";
import { NewSearchPage } from "@/components/search/NewSearchPage";

export const metadata = {
  title: "产品搜索 | 恒达微波",
  description: "按产品名称、型号、目录类别和频率范围搜索恒达微波产品。",
};

export default function NewSearchRoutePage() {
  return <>
    <HengdaSiteHeader solid />
    <main className="pt-[70px]"><NewSearchPage /></main>
    <HengdaHomeFooter />
    <HengdaPageInteractions solidHeader />
  </>;
}
