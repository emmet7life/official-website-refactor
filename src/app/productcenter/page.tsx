import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";
import { ProductCenter } from "@/components/productcenter/ProductCenter";
import { redirect } from "next/navigation";

type ProductCenterPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ProductCenterPage({ searchParams }: ProductCenterPageProps) {
  const params = await searchParams;
  const category = Array.isArray(params.category) ? params.category[0] : params.category;
  if (category === "custom") redirect("/custom-machining");

  return <>
    <HengdaSiteHeader solid />
    <main className="pt-[70px]"><ProductCenter key={category ?? "root"} initialCategory={category} /></main>
    <HengdaHomeFooter />
  </>;
}
