import { notFound } from "next/navigation";
import { NewsSection, type NewsFilter } from "../root-8a5edab2-news/NewsSection";
import { ServiceCommitmentSection } from "../root-8a5edab2-service-commitment/ServiceCommitmentSection";
import { ServiceDownloadsSection } from "../root-8a5edab2-service-downloads/ServiceDownloadsSection";
import { ServiceQualitySection } from "../root-8a5edab2-service-quality/ServiceQualitySection";
import { ServiceSalesSection } from "../root-8a5edab2-service-sales/ServiceSalesSection";
import { ServiceSection } from "../root-8a5edab2-service/ServiceSection";
import { HengdaHomeFooter } from "./HengdaHomeFooter";
import { HengdaPageInteractions } from "./HengdaPageInteractions";
import { HengdaProductCenter, type HengdaProductKey } from "./HengdaProductCenter";
import { HengdaSiteHeader } from "./HengdaSiteHeader";
import { TechnicalResources } from "@/components/tech/TechnicalResources";
import {
  AboutActivityContent,
  AboutHistoryContent,
  AboutHonorContent,
  AboutIntroContent,
  AboutRefreshShell,
  type AboutItem,
} from "../about-refresh/AboutRefresh";

export const sectionItems = {
  about: ["intro", "history", "honor", "activity"],
  news: ["all", "company", "media", "wechat", "social-media", "industry", "exhibition"],
  products: ["antenna", "feeder", "servo", "subsystem", "custom"],
  service: ["downloads", "sales", "quality", "promise"],
  tech: ["knowledge", "papers"],
} as const;

export type HengdaSection = keyof typeof sectionItems;

const serviceParts: Record<string, string> = {
  downloads: "service-downloads",
  sales: "service-sales",
  quality: "service-quality",
  promise: "service-commitment",
};
const newsCategories: Record<string, NewsFilter> = {
  all: "全部",
  company: "公司新闻",
  media: "媒体报道",
  wechat: "企业公众号",
  "social-media": "自媒体宣传",
  industry: "行业资讯",
  exhibition: "学术展会",
};

const refreshedAboutContent: Record<Exclude<AboutItem, "capability">, React.ReactNode> = {
  intro: <AboutIntroContent />,
  history: <AboutHistoryContent />,
  honor: <AboutHonorContent />,
  activity: <AboutActivityContent />,
};

function ServiceContent() {
  return <ServiceSection>
    <ServiceDownloadsSection />
    <ServiceSalesSection />
    <ServiceQualitySection />
    <ServiceCommitmentSection />
  </ServiceSection>;
}

function isValidItem(section: HengdaSection, item: string) {
  return (sectionItems[section] as readonly string[]).includes(item);
}

export function HengdaSectionPage({ section, item }: { section: HengdaSection; item: string }) {
  if (!isValidItem(section, item)) notFound();

  let initialPart: string | undefined;
  let content: React.ReactNode;
  if (section === "about") {
    const aboutItem = item as Exclude<AboutItem, "capability">;
    content = <AboutRefreshShell item={aboutItem}>{refreshedAboutContent[aboutItem]}</AboutRefreshShell>;
  } else if (section === "news") {
    content = <NewsSection key={item} initialFilter={newsCategories[item]} />;
  } else if (section === "products") {
    content = <HengdaProductCenter selected={item as HengdaProductKey} />;
  } else if (section === "tech") {
    content = <TechnicalResources selected={item} />;
  } else {
    initialPart = serviceParts[item];
    content = <ServiceContent />;
  }

  return <>
    <HengdaSiteHeader solid />
    <main className="pt-[70px]">{content}</main>
    <HengdaHomeFooter />
    <HengdaPageInteractions initialPart={initialPart} solidHeader />
  </>;
}
