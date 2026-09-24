import { ArrowUpRight, BookOpen } from "lucide-react";
import { ServiceDownloadsSection } from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-service-downloads/ServiceDownloadsSection";
import { PageBanner } from "@/components/sites/www-racodf-com-3880565d/page-banner/PageBanner";
import { SectionSideNav } from "@/components/sites/www-racodf-com-3880565d/shared-section-nav/SectionSideNav";
import styles from "@/components/sites/www-racodf-com-3880565d/root-8a5edab2-news/NewsSection.module.css";

const knowledgeTopics = [
  "微波频段的划分与应用", "波导传输的基本原理", "矩形波导与圆波导", "波导规格与接口标准",
  "常用波导法兰介绍", "直波导的选型方法", "弯波导的结构与应用", "软波导的使用注意事项",
  "波导同轴转换原理", "同轴连接器类型介绍", "阻抗匹配基础", "驻波比与回波损耗",
  "插入损耗的测量方法", "功率容量与热设计", "微波负载的分类", "定向耦合器工作原理",
  "功率分配器与合成器", "微波滤波器基础", "隔离器与环行器", "微波开关的类型",
  "衰减器与移相器", "低噪声放大器基础", "功率放大器选型", "混频器与变频技术",
  "天线增益与波束宽度", "天线极化方式介绍", "喇叭天线的工作原理", "抛物面天线基础",
  "宽带天线与超宽带天线", "相控阵天线概述", "天线近场与远场测量", "矢量网络分析仪基础",
  "微波测量中的校准方法", "电缆组件的选型与维护", "伺服转台的运动形式", "转台精度与控制接口",
  "卫星通信链路基础", "气象雷达天馈系统", "电磁兼容与屏蔽基础", "微波器件的环境可靠性",
] as const;

export function TechnicalResources({ selected }: { selected: string }) {
  const knowledge = selected === "knowledge";
  return <section className={`${styles.news} bg-[#fff]`}>
    <PageBanner eyebrow="TECHNICAL RESOURCES" title="技术资料" />
    <div className={styles.container}>
      <div className={styles.content}>
      <SectionSideNav
        title="技术资料"
        ariaLabel="技术资料栏目"
        items={[
          { key: "knowledge", label: "微波知识", href: "/tech/knowledge", active: selected === "knowledge" },
          { key: "papers", label: "论文下载", href: "/tech/papers", active: selected === "papers" },
        ]}
      />
      <div>
      {knowledge ? <div>
        <h2 className="text-2xl font-semibold text-gray-900">微波知识</h2>
        <p className="mt-3 text-sm text-gray-500">以下为演示链接，文章内容待补充。</p>
        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {knowledgeTopics.map((title, index) => <a key={title} id={`knowledge-demo-${index + 1}`} href={`#knowledge-demo-${index + 1}`} className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-5 transition-colors hover:border-primary-mid hover:text-primary">
            <BookOpen className="shrink-0 text-primary" size={21} aria-hidden="true" />
            <span className="flex-1 text-sm leading-6">{title}</span>
            <ArrowUpRight size={17} className="shrink-0 text-gray-400 group-hover:text-primary" aria-hidden="true" />
          </a>)}
        </div>
      </div> : <ServiceDownloadsSection />}
    </div>
      </div>
    </div>
  </section>;
}
