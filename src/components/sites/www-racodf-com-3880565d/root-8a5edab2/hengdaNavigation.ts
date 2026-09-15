export const hengdaNavGroups = [
  {
    label: '关于我们',
    section: '/about',
    links: [
      ['公司介绍', '/about/intro'],
      ['公司历程', '/about/history'],
      ['资质荣誉', '/about/honor'],
      ['实验设备', '/about/equipment'],
      ['公司活动', '/about/activity'],
      ['媒体宣传', '/about/media'],
    ],
  },
  {
    label: '解决方案',
    section: '/solutions',
    href: '/solutions',
    links: [
      ['气象雷达', '/solutions#weather-radar'],
      ['卫星通信', '/solutions#satellite-communication'],
    ],
  },
  {
    label: '产品中心',
    section: '/productcenter',
    href: '/productcenter',
    links: [
      ['无源系列', '/productcenter?category=waveguide-coaxial'],
      ['有源系列', '/productcenter?category=active-devices'],
      ['天线系列', '/productcenter?category=antenna'],
      ['伺服转台系列', '/productcenter?category=servo-control'],
      ['分系统集成系列', '/productcenter?category=subsystem-integration'],
      ['来图加工', '/productcenter?category=custom'],
    ],
  },
  {
    label: '新闻中心',
    section: '/news',
    links: [
      ['公司新闻', '/news/company'],
      ['媒体报道', '/news/media'],
      ['行业资讯', '/news/industry'],
      ['学术展会', '/news/exhibition'],
      ['电子报', '/news/enews'],
    ],
  },
  {
    label: '人力资源',
    section: '/hr',
    href: '/hr',
    links: [
      ['人力资源', '/hr'],
    ],
  },
  {
    label: '技术资料',
    section: '/tech',
    links: [
      ['微波知识', '/tech/knowledge'],
      ['论文下载', '/tech/papers'],
    ],
  },
  {
    label: '联系我们',
    section: '/contact',
    href: '/contact',
    links: [
      ['销售网络', '/contact#sales'],
      ['售后服务', '/contact#after-sales'],
      ['供应链合作', '/contact#supply-chain'],
    ],
  },
] as const;
