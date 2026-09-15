import { HengdaSectionPage, sectionItems } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSectionPage";
import { redirect } from "next/navigation";

export function generateStaticParams() {
  return sectionItems.about.map((item) => ({ item }));
}

export default async function AboutPage({ params }: { params: Promise<{ item: string }> }) {
  const { item } = await params;
  if (item === "hr") redirect("/hr");
  return <HengdaSectionPage section="about" item={item} />;
}
