export const hengdaNavGroups = [
  {
    label: '关于我们',
    section: '/about',
    links: [
      ['公司介绍', '/about/intro'],
      ['发展历程', '/about/history'],
      ['荣誉资质', '/about/honor'],
      ['公司活动', '/about/activity'],
      ['能力介绍', '/capability'],
    ],
  },
  {
    label: '解决方案',
    section: '/solutions',
    href: '/solutions',
    links: [
      ['气象雷达', '/solutions?solution=weather-radar'],
      ['卫星通信', '/solutions?solution=satellite-communication'],
    ],
  },
  {
    label: '产品中心',
    section: '/productcenter',
    href: '/productcenter',
    links: [
      ['天线系列产品', '/productcenter?category=antenna'],
      ['无源系列产品', '/productcenter?category=waveguide-coaxial'],
      ['有源系列产品', '/productcenter?category=active-devices'],
      ['伺服转台系列产品', '/productcenter?category=servo-control'],
      ['分系统集成系列产品', '/productcenter?category=subsystem-integration'],
      ['来图加工系列产品', '/custom-machining'],
    ],
  },
  {
    label: '新闻中心',
    section: '/news',
    links: [
      ['公司新闻', '/news/company'],
      ['媒体报道', '/news/media'],
      ['企业公众号', '/news/wechat'],
      ['自媒体宣传', '/news/social-media'],
      ['行业资讯', '/news/industry'],
      ['学术展会', '/news/exhibition'],
    ],
  },
  {
    label: '人力资源',
    section: '/hr',
    href: '/hr',
    links: [
      ['研究生培养', '/hr#training'],
      ['人事行政联系方式', '/hr#hr-contact'],
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
      ['销售网络', '/contact?section=sales'],
      ['售后服务', '/contact?section=after-sales'],
      ['供应链合作', '/contact?section=supply-chain'],
    ],
  },
] as const;
