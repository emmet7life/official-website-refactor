import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaPageInteractions } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaPageInteractions";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";
import { SearchPage } from "@/components/search/SearchPage";

export const metadata = {
  title: "产品搜索 | 恒达微波",
  description: "按一级产品类别与技术参数筛选恒达微波产品，支持频率等区间指标拖动筛选。",
};

type SearchRoutePageProps = {
  searchParams: Promise<{ category?: string | string[]; q?: string | string[] }>;
};

function firstParam(value?: string | string[]) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function SearchRoutePage({ searchParams }: SearchRoutePageProps) {
  const params = await searchParams;

  return <>
    <HengdaSiteHeader solid />
    <main className="pt-[70px]">
      <SearchPage initialCategory={firstParam(params.category)} initialKeyword={firstParam(params.q)} />
    </main>
    <HengdaHomeFooter />
    <HengdaPageInteractions solidHeader />
  </>;
}
