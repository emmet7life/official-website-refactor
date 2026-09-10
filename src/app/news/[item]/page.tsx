import { HengdaSectionPage, sectionItems } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSectionPage";

export function generateStaticParams() {
  return sectionItems.news.map((item) => ({ item }));
}

export default async function NewsPage({ params }: { params: Promise<{ item: string }> }) {
  const { item } = await params;
  return <HengdaSectionPage section="news" item={item} />;
}
