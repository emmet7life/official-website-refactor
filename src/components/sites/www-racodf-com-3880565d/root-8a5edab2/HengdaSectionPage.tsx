import { notFound } from "next/navigation";
import { AboutActivitiesSection } from "../root-8a5edab2-about-activities/AboutActivitiesSection";
import { AboutCultureSection } from "../root-8a5edab2-about-culture/AboutCultureSection";
import { AboutEquipmentSection } from "../root-8a5edab2-about-equipment/AboutEquipmentSection";
import { AboutHistorySection } from "../root-8a5edab2-about-history/AboutHistorySection";
import { AboutHonorSection } from "../root-8a5edab2-about-honor/AboutHonorSection";
import { AboutHrSection } from "../root-8a5edab2-about-hr/AboutHrSection";
import { AboutMediaSection } from "../root-8a5edab2-about-media/AboutMediaSection";
import { AboutProfileSection } from "../root-8a5edab2-about-profile/AboutProfileSection";
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

export const sectionItems = {
  about: ["intro", "history", "honor", "equipment", "activity", "media", "culture", "hr"],
  news: ["all", "company", "media", "industry", "exhibition", "enews"],
  products: ["antenna", "feeder", "servo", "subsystem", "custom"],
  service: ["downloads", "sales", "quality", "promise"],
  tech: ["knowledge", "papers"],
} as const;

export type HengdaSection = keyof typeof sectionItems;

const aboutParts: Record<string, string> = {
  intro: "about-profile",
  history: "about-history",
  honor: "about-honor",
  equipment: "about-equipment",
  activity: "about-activities",
  media: "about-media",
  culture: "about-culture",
  hr: "about-hr",
};
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
  industry: "行业资讯",
  exhibition: "学术展会",
  enews: "电子报",
};

function AboutContent() {
  return <AboutProfileSection>
    <AboutHistorySection />
    <AboutHonorSection />
    <AboutEquipmentSection />
    <AboutActivitiesSection />
    <AboutMediaSection />
    <AboutCultureSection />
    <AboutHrSection />
  </AboutProfileSection>;
}

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
    initialPart = aboutParts[item];
    content = <AboutContent />;
  } else if (section === "news") {
    content = <NewsSection key={item} initialFilter={newsCategories[item]} />;
  } else if (section === "products") {
    content = <HengdaProductCenter selected={item as HengdaProductKey} />;
  } else {
    initialPart = section === "tech" ? "service-downloads" : serviceParts[item];
    content = <ServiceContent />;
  }

  return <>
    <HengdaSiteHeader solid />
    <main className="pt-16 lg:pt-[72px]">{content}</main>
    <HengdaHomeFooter />
    <HengdaPageInteractions initialPart={initialPart} solidHeader />
  </>;
}
