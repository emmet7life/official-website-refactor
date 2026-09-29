import type { Metadata } from "next";
import { NewsArticleView } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-news/NewsSection";
import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaPageInteractions } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaPageInteractions";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";

export const metadata: Metadata = {
  title: "新闻详情 | 恒达微波",
  description: "恒达微波新闻中心，关注公司新闻、媒体报道、企业公众号、行业资讯与学术展会。",
};

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <>
    <HengdaSiteHeader solid />
    <div className="pt-[70px]"><NewsArticleView slug={decodeURIComponent(slug)} /></div>
    <HengdaHomeFooter />
    <HengdaPageInteractions solidHeader />
  </>;
}
