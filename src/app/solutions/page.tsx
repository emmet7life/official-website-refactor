import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaPageInteractions } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaPageInteractions";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";
import { SolutionsPage } from "@/components/solutions/SolutionsPage";

export const metadata = {
  title: "解决方案 | 恒达微波",
  description: "恒达微波气象雷达与卫星通信天馈伺解决方案，按应用场景关联现有产品体系。",
};

export default function SolutionsRoutePage() {
  return <>
    <HengdaSiteHeader solid />
    <main className="pt-16 lg:pt-[72px]">
      <SolutionsPage />
    </main>
    <HengdaHomeFooter />
    <HengdaPageInteractions solidHeader />
  </>;
}
