import { notFound } from "next/navigation";
import { CapabilityDetailPage, isCapabilitySlug } from "@/components/sites/www-racodf-com-3880565d/capability/CapabilityPage";
import { HengdaHomeFooter } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaHomeFooter";
import { HengdaSiteHeader } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2/HengdaSiteHeader";
export function generateStaticParams() { return ["management","test","inspection","tech","smart"].map((slug) => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; if (!isCapabilitySlug(slug)) notFound(); return <><HengdaSiteHeader solid /><main className="pt-16 lg:pt-[72px]"><CapabilityDetailPage slug={slug} /></main><HengdaHomeFooter /></>; }
