import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "雷科防务 | 雷达系统·卫星应用·智能控制·智算存储·智能网联 —— 电子信息综合服务商",
  description: "雷科防务，聚焦雷达系统、卫星应用、智能控制、智算存储、智能网联核心技术研发与产业化应用。",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
