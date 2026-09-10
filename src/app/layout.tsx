import type { Metadata } from "next";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import "./globals.css";
export const metadata: Metadata = {
  title: "恒达微波 | 西安恒达微波技术开发有限公司",
  description: "西安恒达微波技术开发有限公司，长期致力于微波毫米波产品及系统的研发与生产。",
  icons: { icon: "/sites/www-racodf-com-3880565d/shared/home/logo-dark.jpg" },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN" data-scroll-behavior="smooth"><body>{children}<ScrollToTopButton /></body></html>;
}
