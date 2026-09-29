import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";
import { ProductCenter } from "@/components/productcenter/ProductCenter";
import { redirect } from "next/navigation";

type ProductCenterPageProps = {
  searchParams: Promise<{ category?: string | string[]; code?: string | string[]; model?: string | string[] }>;
};

export default async function ProductCenterPage({ searchParams }: ProductCenterPageProps) {
  const params = await searchParams;
  const category = Array.isArray(params.category) ? params.category[0] : params.category;
  const code = Array.isArray(params.code) ? params.code[0] : params.code;
  const model = Array.isArray(params.model) ? params.model[0] : params.model;
  if (category === "custom") redirect("/custom-machining");

  return <>
    <HengdaSiteHeader solid />
    <main className="pt-[70px]"><ProductCenter key={`${category ?? "root"}:${code ?? ""}:${model ?? ""}`} initialCategory={category} initialCode={code} initialModel={model} /></main>
    <HengdaHomeFooter />
  </>;
}
