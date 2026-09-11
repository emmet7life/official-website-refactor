export const hengdaNavGroups = [
  {
    label: '关于恒达',
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
      ['波导、同轴元器件', '/productcenter?category=waveguide-coaxial'],
      ['微波有源器件', '/productcenter?category=active-devices'],
      ['天线', '/productcenter?category=antenna'],
      ['天线转台与伺服控制', '/productcenter?category=servo-control'],
      ['分系统集成产品', '/productcenter?category=subsystem-integration'],
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
    label: '客户服务',
    section: '/service',
    links: [
      ['质量控制', '/service/quality'],
      ['服务承诺', '/service/promise'],
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
] as const;
